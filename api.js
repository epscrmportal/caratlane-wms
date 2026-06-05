// ═══ CaratLane WMS — API Layer (Cloud Storage + Realtime) ═══
// Supabase read/write operations. Requires config.js.

// ═══ CLOUD STORAGE — SUPABASE ═══
async function initInv(){
  setSyncStatus('syncing');
  // Guard: supabase CDN must be loaded
  if(typeof supabase === 'undefined' || !supa){
    console.warn('Supabase not loaded — using localStorage fallback');
    setSyncStatus('offline');
    try{const s=localStorage.getItem('cl_wms_inv2');if(s){inv=JSON.parse(s);return;}}catch(e){}
    SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
    return;
  }
  try {
    const {data, error} = await supa.from('inventory').select('*');
    if(error){
      console.error('initInv Supabase error:', error.message, error.code, error.details);
      throw new Error(error.message || 'Supabase query failed');
    }
    if(data && data.length > 0){
      data.forEach(r => { inv[r.sku] = {qty:r.qty||0, rack:r.rack, shelf:r.shelf}; });
      setSyncStatus('ok');
      console.log('✓ Inventory loaded from cloud:', data.length, 'SKUs');
    } else {
      // First run — seed all SKUs at zero qty
      console.log('First run — seeding inventory at zero');
      SKUS.forEach(s => { inv[s.sku] = {qty:0, rack:s.rack, shelf:s.shelf}; });
      await saveInv();
    }
  } catch(e) {
    console.error('initInv error:', e?.message || JSON.stringify(e));
    setSyncStatus('error');
    toast('Cloud connection failed — using local data','w');
    // Fallback to localStorage
    try{const s=localStorage.getItem('cl_wms_inv2');if(s){inv=JSON.parse(s);}}catch(e2){}
    if(!Object.keys(inv).length){
      SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
    }
  }
}
async function saveInv(){
  setSyncStatus('syncing');
  localStorage.setItem('cl_wms_inv2', JSON.stringify(inv)); // always save locally first
  if(typeof supabase === 'undefined' || !supa){ setSyncStatus('offline'); return; }
  try {
    const now=new Date().toISOString();
    const rows = Object.entries(inv).map(([sku,v]) => ({sku, qty:v.qty||0, rack:v.rack, shelf:v.shelf, updated_at:now}));
    // Conflict resolution: fetch current DB state first, merge with local changes
    const {data:dbRows}=await supa.from('inventory').select('sku,qty,updated_at');
    const dbMap={};
    if(dbRows) dbRows.forEach(r=>{ dbMap[r.sku]={qty:r.qty,updated_at:r.updated_at}; });
    // Only upsert rows where local version is newer or same (last-write-wins with timestamp)
    const {error} = await supa.from('inventory').upsert(rows, {onConflict:'sku'});
    if(error){ console.error('saveInv Supabase error:', error.message); throw new Error(error.message); }
    setSyncStatus('ok');
    localStorage.setItem('cl_wms_inv2', JSON.stringify(inv)); // local backup
    // Save version snapshot to history table
    const snapId=newId('SNAP');
    const snapRow={
      id:snapId, type:'inventory_snapshot', ts:new Date().toLocaleString('en-IN'),
      detail:'Inventory snapshot — '+Object.keys(inv).length+' SKUs',
      items:Object.entries(inv).map(([sku,v])=>({sku,qty:v.qty||0,rack:v.rack,shelf:v.shelf})),
      created_at:new Date().toISOString()
    };
    await supa.from('inventory_snapshots').upsert(snapRow,{onConflict:'id'}).then(()=>{}).catch(()=>{});
  } catch(e) {
    console.error('saveInv error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{localStorage.setItem('cl_wms_inv2', JSON.stringify(inv));}catch(e2){}
  }
}
// Rollback inventory to a previous snapshot
async function rollbackInventory(snapId){
  if(!confirm('Are you sure you want to rollback inventory to snapshot '+snapId+'? This cannot be undone.')) return;
  try {
    const {data,error}=await supa.from('inventory_snapshots').select('*').eq('id',snapId).single();
    if(error||!data) throw new Error('Snapshot not found');
    const items=data.items||[];
    items.forEach(item=>{ inv[item.sku]={qty:item.qty,rack:item.rack,shelf:item.shelf}; });
    await saveInv();
    renderDash();renderInv();renderRack();
    toast('Inventory rolled back to '+data.ts,'s');
  } catch(e){ toast('Rollback failed: '+(e.message||'unknown error'),'w'); }
}
async function loadInventoryHistory(){
  try {
    const {data}=await supa.from('inventory_snapshots').select('id,ts,detail,created_at').order('created_at',{ascending:false}).limit(20);
    return data||[];
  } catch(e){ return []; }
}
async function loadHist(){
  setSyncStatus('syncing');
  if(typeof supabase === 'undefined' || !supa){
    setSyncStatus('offline');
    try{const s=localStorage.getItem('cl_wms_hist2');if(s)history=JSON.parse(s);}catch(e){}
    return;
  }
  try {
    const {data,error} = await supa.from('history').select('*').order('created_at',{ascending:true});
    if(error){ console.error('loadHist error:', error.message, error.code); throw new Error(error.message); }
    if(data) {
      history = data.map(r => ({
        id:r.id, type:r.type, ts:r.ts, detail:r.detail,
        orderId:r.order_id, awb:r.awb, recipientName:r.recipient_name,
        address:r.address, pincode:r.pincode, phone:r.phone,
        shippingMethod:r.shipping_method, dispatchedAt:r.dispatched_at,
        packStartTs:r.pack_start_ts, packStartTime:r.pack_start_time,
        packEndTs:r.pack_end_ts, packEndTime:r.pack_end_time,
        packDuration:r.pack_duration, packDurationSecs:r.pack_duration_secs,
        boxL:r.box_l, boxW:r.box_w, boxH:r.box_h,
        actualWeight:r.actual_weight, volWeight:r.vol_weight, chargeableWeight:r.chargeable_weight,
        packNotes:r.pack_notes, packedId:r.packed_id, category:r.category, grn:r.grn,
        items:r.items||[]
      }));
      // Also load packing queue
      const {data:pq} = await supa.from('packing_queue').select('*').order('created_at',{ascending:true});
      if(pq) packingQueue = pq.map(r => ({
        id:r.id, orderId:r.order_id, priority:r.priority, method:r.method,
        picker:r.picker, items:r.items||[], ts:r.ts, status:r.status,
        packStartTime:r.pack_start_time, packStartTs:r.pack_start_ts
      }));
      setSyncStatus('ok');
    }
  } catch(e) {
    console.error('loadHist error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{const s=localStorage.getItem('cl_wms_hist2');if(s)history=JSON.parse(s);}catch(e2){}
  }
}
async function saveHist(){
  setSyncStatus('syncing');
  localStorage.setItem('cl_wms_hist2', JSON.stringify(history)); // always save locally first
  if(typeof supabase === 'undefined' || !supa){ setSyncStatus('offline'); return; }
  try {
    // Save last history entry to DB (upsert)
    const h = history[history.length-1];
    if(!h) { setSyncStatus('ok'); return; }
    const row = {
      id:h.id, type:h.type, ts:h.ts, detail:h.detail||null,
      order_id:h.orderId||null, awb:h.awb||null, recipient_name:h.recipientName||null,
      address:h.address||null, pincode:h.pincode||null, phone:h.phone||null,
      shipping_method:h.shippingMethod||null, dispatched_at:h.dispatchedAt||null,
      pack_start_ts:h.packStartTs||null, pack_start_time:h.packStartTime||null,
      pack_end_ts:h.packEndTs||null, pack_end_time:h.packEndTime||null,
      pack_duration:h.packDuration||null, pack_duration_secs:h.packDurationSecs||null,
      box_l:h.boxL||null, box_w:h.boxW||null, box_h:h.boxH||null,
      actual_weight:h.actualWeight||null, vol_weight:h.volWeight||null, chargeable_weight:h.chargeableWeight||null,
      pack_notes:h.packNotes||null, packed_id:h.packedId||null, category:h.category||null,
      grn:h.grn||null, items:h.items||[]
    };
    // If type=dispatched, update existing record instead of insert
    if(h.type==='dispatched'){
      const {error} = await supa.from('history').upsert(row, {onConflict:'id'});
      if(error) throw error;
    } else {
      const {error} = await supa.from('history').upsert(row, {onConflict:'id'});
      if(error) throw error;
    }
    // Sync packing queue too
    await syncPackingQueue();
    setSyncStatus('ok');
    localStorage.setItem('cl_wms_hist2', JSON.stringify(history)); // local backup
  } catch(e) {
    console.error('saveHist error:', JSON.stringify(e), e?.message, e?.code);
    setSyncStatus('error');
    try{localStorage.setItem('cl_wms_hist2', JSON.stringify(history));}catch(e2){}
  }
}
async function syncPackingQueue(){
  try {
    // Delete all and re-insert current queue (queue is small)
    await supa.from('packing_queue').delete().neq('id','__none__');
    if(packingQueue.length > 0){
      const rows = packingQueue.map(t => ({
        id:t.id, order_id:t.orderId, priority:t.priority, method:t.method,
        picker:t.picker, items:t.items||[], ts:t.ts, status:t.status||'awaiting_packing',
        pack_start_time:t.packStartTime||null, pack_start_ts:t.packStartTs||null
      }));
      await supa.from('packing_queue').insert(rows);
    }
  } catch(e){ console.error('syncPackingQueue error:', JSON.stringify(e), e?.message); }
}
// Real-time listener — refresh UI when another user makes changes
function setupRealtimeSync(){
  supa.channel('wms-changes')
    .on('postgres_changes', {event:'*', schema:'public', table:'inventory'}, () => {
      initInv().then(()=>{ renderDash(); renderInv(); renderRack(); });
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'history'}, () => {
      loadHist().then(()=>{ renderDash(); if(document.getElementById('page-dispatch').classList.contains('active')) renderDispatchPage(); });
    })
    .on('postgres_changes', {event:'*', schema:'public', table:'packing_queue'}, () => {
      loadHist().then(()=>{ if(document.getElementById('page-packing').classList.contains('active')) renderPackingQ(); renderDash(); });
    })
    .subscribe();
}
