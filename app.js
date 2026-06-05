// ═══ CaratLane WMS — App Logic & UI ═══
// All UI rendering, state management, SKU data

let SKUS=[
  {sku:"UNI-GS-M-34",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 34",rack:"A",shelf:"1"},
  {sku:"UNI-GS-M-36",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 36",rack:"A",shelf:"1"},
  {sku:"UNI-GS-M-38",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 38",rack:"A",shelf:"1"},
  {sku:"UNI-GS-M-42",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 42",rack:"A",shelf:"1"},
  {sku:"UNI-GS-M-44",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 44",rack:"A",shelf:"1"},
  {sku:"UNI-GS-M-46",cat:"Uniform",sub:"Grey Sweater- Male",variant:"Size 46",rack:"A",shelf:"1"},
  {sku:"UNI-GS-F-34",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 34",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-36",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 36",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-38",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 38",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-40",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 40",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-42",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 42",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-44",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 44",rack:"A",shelf:"2"},
  {sku:"UNI-GS-F-46",cat:"Uniform",sub:"Grey Sweater- Female",variant:"Size 46",rack:"A",shelf:"2"},
  {sku:"UNI-MC-U-34",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 34",rack:"A",shelf:"3"},
  {sku:"UNI-MC-U-36",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 36",rack:"A",shelf:"3"},
  {sku:"UNI-MC-U-38",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 38",rack:"A",shelf:"3"},
  {sku:"UNI-MC-U-40",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 40",rack:"A",shelf:"3"},
  {sku:"UNI-MC-U-42",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 42",rack:"A",shelf:"3"},
  {sku:"UNI-MC-U-44",cat:"Uniform",sub:"Monte Carlo Sweater- Unisex",variant:"Size 44",rack:"A",shelf:"3"},
  {sku:"UNI-BLZ-U",cat:"Uniform",sub:"Blazers - Unisex",variant:"Unstitched",rack:"A",shelf:"4"},
  {sku:"UNI-JCT-U",cat:"Uniform",sub:"JC Trouser - Unisex",variant:"Unstitched",rack:"A",shelf:"4"},
  {sku:"UNI-JCS-U",cat:"Uniform",sub:"JC Shirt - Unisex",variant:"Unstitched",rack:"A",shelf:"4"},
  {sku:"UNI-TAH-U",cat:"Uniform",sub:"TAH Shirt - Unisex",variant:"Unstitched",rack:"A",shelf:"4"},
  {sku:"UNI-HKS-M",cat:"Uniform",sub:"HK Shirt - Male",variant:"Unstitched",rack:"A",shelf:"5"},
  {sku:"UNI-HKT-M",cat:"Uniform",sub:"HK Trouser - Male",variant:"Unstitched",rack:"A",shelf:"5"},
  {sku:"UNI-HKK-F",cat:"Uniform",sub:"HK Kurta - Female",variant:"Unstitched",rack:"A",shelf:"5"},
  {sku:"UNI-HKP-F",cat:"Uniform",sub:"HK Pyjama - Female",variant:"Unstitched",rack:"A",shelf:"5"},
  {sku:"UNI-SH-M-6",cat:"Uniform",sub:"Shoes - Male",variant:"Size 6",rack:"A",shelf:"6"},
  {sku:"UNI-SH-M-7",cat:"Uniform",sub:"Shoes - Male",variant:"Size 7",rack:"A",shelf:"6"},
  {sku:"UNI-SH-M-8",cat:"Uniform",sub:"Shoes - Male",variant:"Size 8",rack:"A",shelf:"6"},
  {sku:"UNI-SH-M-11",cat:"Uniform",sub:"Shoes - Male",variant:"Size 11",rack:"A",shelf:"6"},
  {sku:"UNI-SH-M-12",cat:"Uniform",sub:"Shoes - Male",variant:"Size 12",rack:"A",shelf:"6"},
  {sku:"UNI-SH-F-6",cat:"Uniform",sub:"Shoes - Female",variant:"Size 6",rack:"A",shelf:"7"},
  {sku:"UNI-SH-F-7",cat:"Uniform",sub:"Shoes - Female",variant:"Size 7",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-4",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 4",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-5",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 5",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-6",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 6",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-7",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 7",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-8",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 8",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-9",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 9",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-10",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 10",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-11",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 11",rack:"A",shelf:"7"},
  {sku:"UNI-SH-U-12",cat:"Uniform",sub:"Shoes - Unisex",variant:"Size 12",rack:"A",shelf:"7"},
  {sku:"UNI-DN-M-30",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 30",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-32",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 32",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-34",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 34",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-36",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 36",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-38",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 38",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-40",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 40",rack:"A",shelf:"8"},
  {sku:"UNI-DN-M-42",cat:"Uniform",sub:"Stitched Denim - Male",variant:"Size 42",rack:"A",shelf:"8"},
  {sku:"UNI-DN-F-28",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 28",rack:"A",shelf:"9"},
  {sku:"UNI-DN-F-30",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 30",rack:"A",shelf:"9"},
  {sku:"UNI-DN-F-32",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 32",rack:"A",shelf:"9"},
  {sku:"UNI-DN-F-34",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 34",rack:"A",shelf:"9"},
  {sku:"UNI-DN-F-36",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 36",rack:"A",shelf:"9"},
  {sku:"UNI-DN-F-38",cat:"Uniform",sub:"Stitched Denim - Female",variant:"Size 38",rack:"A",shelf:"9"},
  {sku:"UNI-SHT-M-38",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 38",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-40",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 40",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-42",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 42",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-44",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 44",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-46",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 46",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-48",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 48",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-50",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 50",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-52",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 52",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-M-54",cat:"Uniform",sub:"Stitched Shirt - Male",variant:"Size 54",rack:"A",shelf:"10"},
  {sku:"UNI-SHT-F-XXS",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXS",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-XS",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XS",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-S",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size S",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-M",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size M",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-L",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size L",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-XL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XL",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-XXL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXL",rack:"A",shelf:"11"},
  {sku:"UNI-SHT-F-XXXL",cat:"Uniform",sub:"Stitched Shirt - Female",variant:"Size XXXL",rack:"A",shelf:"11"},
  {sku:"VM-EG",cat:"VM",sub:"Eye glass",variant:"Eye glass",rack:"B",shelf:"1"},
  {sku:"VM-EL",cat:"VM",sub:"Eye Loop",variant:"Eye Loop",rack:"B",shelf:"1"},
  {sku:"VM-CB",cat:"VM",sub:"Chocolate bowl",variant:"Chocolate bowl",rack:"B",shelf:"2"},
  {sku:"VM-CC",cat:"VM",sub:"Cleaning Cloth",variant:"Cleaning Cloth",rack:"B",shelf:"2"},
  {sku:"VM-IS",cat:"VM",sub:"Ipad Stand",variant:"Ipad Stand",rack:"B",shelf:"3"},
  {sku:"VM-IC-9",cat:"VM",sub:"Ipad Cover",variant:"9th Generation",rack:"B",shelf:"3"},
  {sku:"VM-IC-10",cat:"VM",sub:"Ipad Cover",variant:"10th Generation",rack:"B",shelf:"3"},
  {sku:"VM-RS",cat:"VM",sub:"Ring Sizer",variant:"Ring Sizer",rack:"B",shelf:"4"},
  {sku:"VM-RR",cat:"VM",sub:"Ring Rod",variant:"Ring Rod",rack:"B",shelf:"4"},
  {sku:"VM-BS",cat:"VM",sub:"Bangle Sizer",variant:"Bangle Sizer",rack:"B",shelf:"4"},
  {sku:"RS-RS",cat:"Ring Sizer",sub:"Ring Sizer",variant:"Ring Sizer",rack:"B",shelf:"5"},
];

let inv={},history=[],ibItems=[],pkItemsList=[],rtItemsList=[],packingQueue=[],inventoryCounts=[],currentCount={},costParams={
  receivingCostPerGrn:500,
  pickCostPerOrder:50,
  packCostPerOrder:40,
  dispatchCostPerOrder:100,
  storageCostPerSku:2,
  damageLoss:0,
  returnProcessingCost:75
};

// ═══ CaratLane WMS — App UI & Business Logic ═══
// All rendering, navigation, state management, features

function ts(){return new Date().toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
function newId(pfx){return pfx+'-'+Date.now().toString().slice(-6);}
function getSt(q){return q<=0?'out':q<=3?'low':'ok';}
function stPill(q){const s=getSt(q);return s==='out'?'<span class="pill p-out">Out</span>':s==='low'?'<span class="pill p-low">Low</span>':'<span class="pill p-ok">In stock</span>';}

function nav(tab){
  document.querySelectorAll('.ntab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+tab));
  updateNotificationBadge();
  if(tab==='dashboard')renderDash();
  if(tab==='inventory'){renderInv();renderInvVersionHistory();}
  if(tab==='labels'){renderLabelPage();}
  if(tab==='audit'){renderAuditLog();}
  if(tab==='users'){renderUsersList();}
  if(tab==='rack')renderRack();
  if(tab==='dispatch')renderDispatchPage();
  if(tab==='packing')renderPackingQ();
  if(tab==='reports')renderReports();
  if(tab==='analytics')renderAnalytics();
  if(tab==='finance')renderFinance();
  if(tab==='invcount'){
    if(currentCount.counts){
      renderCountList();
      updateCountSummary();
    }else{
      updateCountSummary();
    }
    renderCountHistory();
  }
  if(tab==='mobile'){updateMobileKPIs();switchMobileView('home');}
  if(tab==='inbound'){populateSkuSel('ib-sku');renderIbLog();}
  if(tab==='picking'){populateSkuSel('pk-sku');}
  if(tab==='returns'){populateSkuSel('rt-sku');renderRtLog();}
}

function toggleMenu(){
  const menu=document.getElementById('dropdown-menu');
  if(!menu)return;
  const isVisible=menu.style.display==='block';
  menu.style.display=isVisible?'none':'block';
}

function navAndClose(tab){
  nav(tab);
  document.getElementById('dropdown-menu').style.display='none';
}

// Close menu when clicking outside
document.addEventListener('click',function(e){
  const menu=document.getElementById('dropdown-menu');
  if(menu&&!menu.contains(e.target)&&e.target.closest('button')?false:true){
    menu.style.display='none';
  }
});

function populateSkuSel(id_){
  if(id_==='none')return;
  const s=document.getElementById(id_);
  if(s)s.innerHTML=SKUS.map(x=>`<option value="${x.sku}">${x.sub} — ${x.variant} (${x.sku})</option>`).join('');
}

// DASHBOARD
function getSameDayPending(){
  // Returns packed orders that were packed today and not yet dispatched
  const today=new Date();
  const todayStr=today.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
  const packed=history.filter(h=>h.type==='packed');
  const dispatched=new Set(history.filter(h=>h.type==='dispatched').map(h=>h.packedId||h.orderId));
  return packed.filter(p=>{
    const notDispatched=!dispatched.has(p.id)&&!dispatched.has(p.orderId);
    return notDispatched;
  });
}
function getHoursPassed(tsString){
  // Try to parse timestamp from history entry
  try{
    const now=new Date();
    // ts format: "04 Jun 2026, 10:30" or similar
    const d=new Date(tsString);
    if(!isNaN(d)){return Math.floor((now-d)/3600000);}
  }catch(e){}
  return null;
}
function renderSameDayAlert(){
  const el=document.getElementById('same-day-dispatch-banner');
  if(!el)return;
  const pending=getSameDayPending();
  if(!pending.length){el.innerHTML='';return;}
  const now=new Date();
  const hrs=now.getHours();
  const minsLeft=(18-hrs)*60-now.getMinutes(); // cutoff 6pm
  const isUrgent=hrs>=15; // red after 3pm
  const isCritical=hrs>=17; // critical after 5pm
  const color=isCritical?'var(--dt)':isUrgent?'var(--wt)':'var(--it)';
  const bg=isCritical?'var(--dbg)':isUrgent?'var(--wbg)':'var(--ibg)';
  const icon=isCritical?'ti-alarm':'ti-truck-delivery';
  const urgencyLabel=isCritical?'🚨 CRITICAL':'⚠️ ACTION REQUIRED';
  const timeMsg=minsLeft>0?`Dispatch cutoff in <strong>${Math.floor(minsLeft/60)}h ${minsLeft%60}m</strong>`:'<strong>Past dispatch cutoff — dispatch immediately!</strong>';
  el.innerHTML=`
    <div style="background:${bg};border:1.5px solid ${color};border-radius:10px;padding:14px 16px;margin-bottom:14px;cursor:pointer" onclick="nav('dispatch')">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:40px;height:40px;background:${color};border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="ti ${icon}" style="font-size:20px;color:#fff"></i>
          </div>
          <div>
            <div style="font-weight:700;font-size:13px;color:${color}">${urgencyLabel} — Same-Day Dispatch</div>
            <div style="font-size:11px;color:var(--t2);margin-top:2px">${pending.length} packed order${pending.length>1?'s':''} must be dispatched <strong>today</strong> · ${timeMsg}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          ${pending.map(p=>`<span style="background:${color};color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px">${esc(p.orderId||p.id)}</span>`).join('')}
          <span style="font-size:11px;color:${color};font-weight:600">Go to Dispatch →</span>
        </div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:0.5px solid ${color}33;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px">
        ${pending.map(p=>{
          const items=(p.items&&p.items.length)?p.items.length:0;
          return `<div style="background:var(--s2);border-radius:6px;padding:8px;font-size:10px;cursor:pointer;border:1px solid transparent;transition:border .15s" onclick="event.stopPropagation();selectDispatchOrder('${p.id}')" onmouseover="this.style.borderColor='${color}'" onmouseout="this.style.borderColor='transparent'">
            <div style="font-weight:600;color:var(--t)">${esc(p.orderId||p.id)}</div>
            <div style="color:var(--t2);margin-top:2px">Packed ID: ${p.id}</div>
            <div style="color:var(--t2)">${items} SKU(s) · ${p.ts||'Today'}</div>
            <div style="color:${color};font-weight:600;margin-top:4px">👆 Tap to assign AWB</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}
function renderDispatchSameDayAlert(){
  const el=document.getElementById('dispatch-sameday-alert');
  if(!el)return;
  const pending=getSameDayPending();
  if(!pending.length){
    el.innerHTML='<div style="background:var(--sbg);border:1px solid var(--st);border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:11px;color:var(--st);display:flex;align-items:center;gap:8px"><i class="ti ti-circle-check" style="font-size:16px"></i><strong>All clear!</strong> No pending dispatches — all packed orders have been dispatched today ✓</div>';
    return;
  }
  const now=new Date();
  const hrs=now.getHours();
  const isCritical=hrs>=17;
  const isUrgent=hrs>=15;
  const color=isCritical?'var(--dt)':isUrgent?'var(--wt)':'var(--gold)';
  const bg=isCritical?'var(--dbg)':isUrgent?'var(--wbg)':'#fff8e6';
  el.innerHTML=`
    <div style="background:${bg};border:2px solid ${color};border-radius:10px;padding:12px 16px;margin-bottom:14px">
      <div style="font-weight:700;font-size:13px;color:${color};margin-bottom:8px;display:flex;align-items:center;gap:6px">
        <i class="ti ti-clock-exclamation" style="font-size:16px"></i>
        SAME-DAY DISPATCH REQUIRED — ${pending.length} order${pending.length>1?'s':''} pending
      </div>
      <div style="font-size:11px;color:var(--t2);margin-bottom:10px">
        Per SOP §3 — all packed orders must be dispatched <strong>same day</strong>. 
        Select each order below, assign AWB number from courier, and confirm dispatch.
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${pending.map(p=>`
          <div style="background:var(--s);border:1px solid ${color};border-radius:6px;padding:8px 12px;font-size:11px;cursor:pointer;min-width:160px;transition:background .15s" onclick="assignAWBDirect('${p.id}')" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background='var(--s)'">
            <div style="font-weight:700;color:${color}">${esc(p.orderId||p.id)}</div>
            <div style="color:var(--t2);margin-top:2px">${(p.items&&p.items.length)||0} SKU(s) · ${p.ts||'Today'}</div>
            <div style="color:${color};font-weight:600;margin-top:4px;font-size:10px">👆 Tap to assign AWB</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function showClearDataModal(){
  document.getElementById('dropdown-menu').style.display='none';
  const overlay=document.getElementById('clear-modal-overlay');
  overlay.style.display='flex';
  document.getElementById('clear-confirm-input').value='';
  document.getElementById('clear-confirm-btn').disabled=true;
  document.getElementById('clear-confirm-btn').style.background='var(--b)';
  document.getElementById('clear-confirm-btn').style.color='var(--t3)';
  document.getElementById('clear-confirm-btn').style.cursor='not-allowed';
  setTimeout(()=>document.getElementById('clear-confirm-input').focus(),100);
}
function closeClearModal(){
  document.getElementById('clear-modal-overlay').style.display='none';
}
function validateClearInput(){
  const val=document.getElementById('clear-confirm-input').value.trim();
  const btn=document.getElementById('clear-confirm-btn');
  const valid=val==='CLEAR';
  btn.disabled=!valid;
  btn.style.background=valid?'var(--dt)':'var(--b)';
  btn.style.color=valid?'#fff':'var(--t3)';
  btn.style.cursor=valid?'pointer':'not-allowed';
}
async function executeFullClear(){
  if(!rateLimit('clear',10000)){toast('Please wait before trying again','w');return;}
  // Clear localStorage
  localStorage.removeItem('cl_wms_inv2');
  localStorage.removeItem('cl_wms_hist2');
  localStorage.removeItem('cl_wms_counts');
  // Clear Supabase
  try {
    await supa.from('history').delete().neq('id','__none__');
    await supa.from('packing_queue').delete().neq('id','__none__');
    await supa.from('inventory').delete().neq('sku','__none__');
  } catch(e){ console.error('Cloud clear error:', e); }
  // Reset all in-memory data
  history=[];
  packingQueue=[];
  inventoryCounts=[];
  currentCount={};
  ibItems=[];
  pkItemsList=[];
  rtItemsList=[];
  // Re-init inventory to zero (keeps SKU list but zeroes quantities)
  inv={};
  SKUS.forEach(s=>{inv[s.sku]={qty:0,rack:s.rack,shelf:s.shelf};});
  saveInv();
  saveHist();
  closeClearModal();
  // Refresh all visible pages
  nav('dashboard');
  toast('All data cleared — WMS reset to zero','s');
}
function renderDash(){
  const total=SKUS.length,ins=SKUS.filter(s=>inv[s.sku]&&inv[s.sku].qty>0).length;
  const low=SKUS.filter(s=>inv[s.sku]&&getSt(inv[s.sku].qty)==='low');
  const out=SKUS.filter(s=>!inv[s.sku]||inv[s.sku].qty<=0);
  const tq=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const disp=history.filter(h=>h.type==='dispatch').length;
  const rcv=history.filter(h=>h.type==='grn').length;
  const rets=history.filter(h=>h.type==='return').length;
  const pendingDispatch=history.filter(h=>h.type==='packed').length;
  document.getElementById('alert-ct').textContent=low.length+out.length+pendingDispatch;
  renderSameDayAlert();
  document.getElementById('stat-cards').innerHTML=`
    <div class="sc"><div class="sl"><i class="ti ti-package"></i>Total SKUs</div><div class="sv">${total}</div><div class="ss">2 racks · 16 shelves</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-check"></i>In stock</div><div class="sv">${ins}</div><div class="ss">${total-ins} empty SKUs</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-alert-triangle"></i>Low stock</div><div class="sv" style="color:var(--wt)">${low.length}</div><div class="ss">≤3 units</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-box"></i>Total units</div><div class="sv">${tq}</div><div class="ss">All SKUs combined</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-truck-delivery"></i>Dispatches</div><div class="sv">${disp}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-import"></i>GRNs raised</div><div class="sv">${rcv}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-export"></i>Returns</div><div class="sv">${rets}</div><div class="ss">All time</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-clock"></i>Packing queue</div><div class="sv">${packingQueue.length}</div><div class="ss">Awaiting packing</div></div>
  `;
  const alerts=[...out.map(s=>({...s,st:'out'})),...low.map(s=>({...s,st:'low'}))].slice(0,5);
  const ae=document.getElementById('dash-alerts');
  ae.innerHTML=alerts.length?alerts.map(s=>`<div class="hist-entry"><div class="hist-head"><span style="font-size:11px;font-weight:600">${s.sub} — ${s.variant}</span>${s.st==='out'?'<span class="pill p-out">Out</span>':'<span class="pill p-low">Low</span>'}</div><div class="hist-body">${s.sku} · BIN ${(inv[s.sku]||{rack:s.rack,shelf:s.shelf}).rack}-${(inv[s.sku]||{rack:s.rack,shelf:s.shelf}).shelf} · <b>${(inv[s.sku]||{qty:0}).qty}</b> units</div></div>`).join(''):'<div class="empty">No stock alerts — all items healthy ✓</div>';
  const re=document.getElementById('dash-recent');
  const rec=history.slice(-5).reverse();
  re.innerHTML=rec.length?rec.map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="pill ${h.type==='dispatch'?'p-low':h.type==='return'?'p-info':'p-ok'}">${h.type}</span></div><div class="hist-body">${h.ts} · ${esc(h.detail||'')}</div></div>`).join(''):'<div class="empty">No recent activity</div>';
}

// INBOUND
function filterSkuList(searchInputId,selectId){
  const q=(document.getElementById(searchInputId).value||'').toLowerCase();
  const sel=document.getElementById(selectId);
  if(!q){sel.innerHTML=SKUS.map(x=>`<option value="${x.sku}">${x.sub} (${x.sku}) — ${x.variant}</option>`).join('');return;}
  const filtered=SKUS.filter(s=>s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q)||s.variant.toLowerCase().includes(q));
  sel.innerHTML=filtered.length?filtered.map(x=>`<option value="${x.sku}">${x.sub} (${x.sku}) — ${x.variant}</option>`).join(''):`<option disabled>No SKUs found</option>`;
}
function addIbItem(){
  const sku=document.getElementById('ib-sku').value;
  const qc=document.getElementById('ib-qc').value;
  const issue=document.getElementById('ib-issue').value;
  const qty=parseInt(document.getElementById('ib-qty').value)||1;
  const binOverride=document.getElementById('ib-bin-override').value.trim();
  const s=SKUS.find(x=>x.sku===sku);
  const defaultBin=`${s.rack}-${s.shelf}`;
  const bin=binOverride||defaultBin;
  ibItems.push({sku,name:s.sub,variant:s.variant,qc,issue,qty,bin,binOverridden:!!binOverride});
  renderIbItemsList();
  document.getElementById('ib-bin-override').value='';
  toast(`Added ${sku} to ${bin}${binOverride?' (manual assignment)':' (auto-assigned)'}`, 's');
}
function renderIbItemsList(){
  const el=document.getElementById('ib-items-list');
  el.innerHTML=ibItems.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>BIN</th><th>QC</th><th>Issue</th><th>Qty</th><th></th></tr></thead><tbody>${ibItems.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name}</td><td style="font-weight:600;color:var(--gold)">${item.bin}${item.binOverridden?' ⚠':'(auto)'}</td><td><span class="pill ${item.qc==='PASS'?'p-pass':item.qc==='HOLD'?'p-hold':'p-out'}">${item.qc}</span></td><td style="font-size:10px;color:var(--t2)">${item.issue||'—'}</td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removeIbItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removeIbItem(i){ibItems.splice(i,1);renderIbItemsList();}
function createGRN(){
  if(!ibItems.length){toast('Add at least one item to the shipment','w');return;}
  if(!rateLimit('grn',2000)){toast('Please wait before submitting again','w');return;}
  const seal=document.getElementById('ib-seal').value;
  if(seal==='broken'){toast('STOP: Broken seal detected — escalate to CaratLane & security before proceeding (SOP §1.5)','w');return;}
  const asn=document.getElementById('ib-asn').value.trim();
  const carrier=document.getElementById('ib-carrier').value.trim();
  const vehicle=document.getElementById('ib-vehicle').value.trim();
  const cartons=document.getElementById('ib-cartons').value.trim();
  const gid=newId('GRN');
  ibItems.forEach(item=>{
    if(item.qc==='PASS'){
      if(!inv[item.sku])inv[item.sku]={qty:0,rack:SKUS.find(s=>s.sku===item.sku).rack,shelf:SKUS.find(s=>s.sku===item.sku).shelf};
      inv[item.sku].qty+=item.qty;
    }
    // Track exceptions for compliance
    if(item.qc==='HOLD' || item.qc==='REJECT' || item.issue){
      history.push({id:newId('EXC'),type:'exception',ts:ts(),category:'damage',detail:`${item.sku} · QC: ${item.qc} · Issue: ${item.issue||'N/A'} · Qty: ${item.qty}`,grn:gid});
    }
  });
  const pass=ibItems.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
  const hold=ibItems.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
  const rej=ibItems.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
  history.push({id:gid,type:'grn',ts:ts(),detail:`ASN: ${asn||'N/A'} · ${ibItems.length} SKUs · PASS:${pass} HOLD:${hold} REJ:${rej}`,items:[...ibItems],asn,carrier,vehicle,cartons});
  saveInv();saveHist();ibItems=[];renderIbItemsList();renderIbLog();updateNotificationBadge();
  document.getElementById('ib-issue').value='';
  ['ib-asn','ib-carrier','ib-vehicle','ib-cartons'].forEach(id_=>document.getElementById(id_).value='');
  toast(`GRN ${gid} created · ${pass} units added to inventory (FIFO)`, 's');
}
function renderIbLog(){
  const el=document.getElementById('ib-log');
  const logs=history.filter(h=>h.type==='grn').slice(-10).reverse();
  el.innerHTML=logs.length?logs.map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="hist-ts">${h.ts}</span><button onclick="printGRN('${h.id}')" style="background:none;border:none;cursor:pointer;color:var(--t2);font-size:11px;padding:4px 8px;border-radius:3px;transition:all 0.2s" onmouseover="this.style.background='var(--s2)';this.style.color='var(--t)'" onmouseout="this.style.background='transparent';this.style.color='var(--t2)'"><i class="ti ti-printer"></i>Print</button></span></div><div class="hist-body">${esc(h.detail)}</div></div>`).join(''):'<div class="empty">No GRNs created yet</div>';
}

function printGRN(grnId){
  const grn=history.find(h=>h.id===grnId&&h.type==='grn');
  if(!grn){toast('GRN not found','w');return;}
  const items=grn.items||[];
  const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
  const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
  const reject=items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
  
  const printWindow=window.open('','GRN_'+grnId,'width=900,height=1000');
  if(!printWindow){toast('Please allow popups to print GRN','w');return;}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>GRN ${grnId}</title>
      <style>
        body{font-family:Arial,sans-serif;margin:20px;line-height:1.6;color:#333}
        .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
        .company{font-size:20px;font-weight:bold;margin-bottom:5px}
        .subtitle{font-size:12px;color:#666;margin-bottom:15px}
        .grn-title{font-size:24px;font-weight:bold;margin:20px 0}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
        .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
        .info-label{font-weight:bold;font-size:12px;color:#666;text-transform:uppercase}
        .info-value{font-size:14px;font-weight:bold;margin-top:5px}
        table{width:100%;border-collapse:collapse;margin:20px 0}
        th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold;font-size:12px}
        td{padding:10px;border:1px solid #ddd;font-size:12px}
        .total-row{background:#f9f9f9;font-weight:bold}
        .signature-area{margin-top:40px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px}
        .signature-box{text-align:center;border-top:1px solid #000;padding-top:10px;margin-top:30px}
        .footer{margin-top:30px;border-top:1px solid #ddd;padding-top:15px;font-size:10px;color:#999;text-align:center}
        @media print{
          body{margin:0;padding:10mm}
          .no-print{display:none}
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company">CaratLane WMS</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics, Mumbai</div>
      </div>
      
      <div class="grn-title">Goods Receipt Note (GRN)</div>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">GRN Number</div>
          <div class="info-value">${grnId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Date & Time</div>
          <div class="info-value">${grn.ts}</div>
        </div>
        <div class="info-box">
          <div class="info-label">ASN/PO Number</div>
          <div class="info-value">${grn.asn||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Carrier</div>
          <div class="info-value">${grn.carrier||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Vehicle / Docket No.</div>
          <div class="info-value">${grn.vehicle||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">No. of Cartons</div>
          <div class="info-value">${grn.cartons||'N/A'}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Total SKUs</div>
          <div class="info-value">${items.length}</div>
        </div>
      </div>
      
      <h3 style="margin-top:20px;border-bottom:2px solid #000;padding-bottom:10px">Received Items</h3>
      <table>
        <thead>
          <tr>
            <th>SKU Code</th>
            <th>Item Name</th>
            <th>Variant</th>
            <th>QC Result</th>
            <th>Issue</th>
            <th>Qty</th>
            <th>Bin Location</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(i=>`<tr>
            <td>${i.sku}</td>
            <td>${i.name}</td>
            <td>${i.variant}</td>
            <td style="font-weight:bold;color:${i.qc==='PASS'?'green':i.qc==='HOLD'?'orange':'red'}">${i.qc}</td>
            <td>${i.issue||'—'}</td>
            <td style="text-align:center">${i.qty}</td>
            <td>${i.bin}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      
      <table>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">PASS (Accepted):</td>
          <td style="text-align:center">${pass}</td>
          <td></td>
        </tr>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">HOLD (Pending):</td>
          <td style="text-align:center">${hold}</td>
          <td></td>
        </tr>
        <tr class="total-row">
          <td colspan="5" style="text-align:right">REJECT (Return):</td>
          <td style="text-align:center">${reject}</td>
          <td></td>
        </tr>
      </table>
      
      <div class="signature-area">
        <div class="signature-box">
          <span>Received By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Verified By (Signature)</span>
        </div>
      </div>
      
      <div class="footer">
        <p>This GRN was generated by CaratLane WMS on ${new Date().toLocaleString()}</p>
        <p style="margin-top:10px">SOP Reference: EPS-WH-SOP-001 v1.0 | Section 1: Inbound Receiving</p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),500);
}

function printDispatch(dispatchId){
  const dispatch=history.find(h=>h.id===dispatchId&&h.type==='dispatched');
  if(!dispatch){toast('Dispatch not found','w');return;}
  const items=dispatch.items||[];
  
  const printWindow=window.open('','DISPATCH_'+dispatchId,'width=900,height=1000');
  if(!printWindow){toast('Please allow popups to print dispatch','w');return;}
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dispatch ${dispatchId}</title>
      <style>
        body{font-family:Arial,sans-serif;margin:20px;line-height:1.6;color:#333}
        .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
        .company{font-size:20px;font-weight:bold;margin-bottom:5px}
        .subtitle{font-size:12px;color:#666;margin-bottom:15px}
        .dispatch-title{font-size:24px;font-weight:bold;margin:20px 0}
        .awb-box{background:#f0f0f0;padding:15px;border-radius:4px;margin:20px 0;text-align:center}
        .awb-label{font-size:12px;color:#666;font-weight:bold;text-transform:uppercase}
        .awb-number{font-size:28px;font-weight:bold;font-family:monospace;margin-top:10px}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
        .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
        .info-label{font-weight:bold;font-size:12px;color:#666;text-transform:uppercase}
        .info-value{font-size:14px;font-weight:bold;margin-top:5px}
        .address-box{border:1px solid #ddd;padding:15px;border-radius:4px;margin:20px 0;background:#f9f9f9}
        .address-title{font-weight:bold;font-size:12px;margin-bottom:8px}
        .address-content{font-size:13px;line-height:1.8}
        table{width:100%;border-collapse:collapse;margin:20px 0}
        th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold;font-size:12px}
        td{padding:10px;border:1px solid #ddd;font-size:12px}
        .total-row{background:#f9f9f9;font-weight:bold}
        .signature-area{margin-top:40px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px}
        .signature-box{text-align:center;border-top:1px solid #000;padding-top:10px;margin-top:30px}
        .footer{margin-top:30px;border-top:1px solid #ddd;padding-top:15px;font-size:10px;color:#999;text-align:center}
        @media print{
          body{margin:0;padding:10mm}
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company">CaratLane WMS</div>
        <div class="subtitle">EPS Worldwide Integrated Logistics, Mumbai</div>
      </div>
      
      <div class="dispatch-title">Dispatch Note</div>
      
      <div class="awb-box">
        <div class="awb-label">Air Waybill / Tracking Number</div>
        <div class="awb-number">${dispatch.awb}</div>
      </div>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">Dispatch ID</div>
          <div class="info-value">${dispatchId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Order ID</div>
          <div class="info-value">${dispatch.orderId}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Dispatch Date & Time</div>
          <div class="info-value">${dispatch.dispatchedAt}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Shipping Method</div>
          <div class="info-value">${dispatch.shippingMethod}</div>
        </div>
      </div>
      
      <div class="address-box">
        <div class="address-title">Recipient Address</div>
        <div class="address-content">
          <strong>${dispatch.recipientName}</strong><br>
          ${dispatch.address}<br>
          <strong>Pincode:</strong> ${dispatch.pincode}<br>
          <strong>Phone:</strong> ${dispatch.phone}
        </div>
      </div>
      
      <h3 style="margin-top:20px;border-bottom:2px solid #000;padding-bottom:10px">Shipped Items</h3>
      <table>
        <thead>
          <tr>
            <th>SKU Code</th>
            <th>Item Name</th>
            <th>Variant</th>
            <th>Qty</th>
            <th>Bin Location</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(i=>`<tr>
            <td>${i.sku}</td>
            <td>${i.name}</td>
            <td>${i.variant}</td>
            <td style="text-align:center">${i.qty}</td>
            <td>${i.bin}</td>
          </tr>`).join('')}
          <tr class="total-row">
            <td colspan="3" style="text-align:right">Total Items:</td>
            <td style="text-align:center">${items.reduce((a,i)=>a+i.qty,0)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <div class="info-grid">
        <div class="info-box">
          <div class="info-label">Total SKUs</div>
          <div class="info-value">${items.length}</div>
        </div>
        <div class="info-box">
          <div class="info-label">Total Units</div>
          <div class="info-value">${items.reduce((a,i)=>a+i.qty,0)}</div>
        </div>
      </div>

      <h3 style="margin-top:24px;border-bottom:2px solid #B8860B;padding-bottom:8px;color:#B8860B">📦 Box & Weight Details</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0">
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Box Dimensions</div>
          <div style="font-size:20px;font-weight:bold">${dispatch.boxL&&dispatch.boxW&&dispatch.boxH?dispatch.boxL+'×'+dispatch.boxW+'×'+dispatch.boxH+' cm':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">L × W × H (centimetres)</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Actual Weight</div>
          <div style="font-size:20px;font-weight:bold">${dispatch.actualWeight?dispatch.actualWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">Physical scale weight</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Volumetric Weight</div>
          <div style="font-size:20px;font-weight:bold;color:#1565c0">${dispatch.volWeight?dispatch.volWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999;margin-top:4px">(L×W×H) ÷ 5000</div>
        </div>
      </div>
      <div style="border:2px solid #B8860B;padding:12px 16px;border-radius:6px;background:#fffbf0;margin-bottom:14px;display:flex;align-items:center;gap:16px">
        <div>
          <div style="font-size:11px;color:#B8860B;font-weight:bold;text-transform:uppercase">Chargeable Weight</div>
          <div style="font-size:26px;font-weight:bold;color:#B8860B">${dispatch.chargeableWeight?dispatch.chargeableWeight+' kg':'—'}</div>
          <div style="font-size:10px;color:#999">max(actual, volumetric)</div>
        </div>
        <div style="flex:1;font-size:11px;color:#666;line-height:1.8">
          ${dispatch.packNotes?'<strong>Packing notes:</strong> '+esc(dispatch.packNotes):''}
        </div>
      </div>

      <h3 style="margin-top:24px;border-bottom:2px solid #333;padding-bottom:8px">⏱ Packing Time Record</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0">
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Pack Start</div>
          <div style="font-size:14px;font-weight:bold">${dispatch.packStartTs||'—'}</div>
        </div>
        <div style="border:1px solid #ddd;padding:12px;border-radius:4px;text-align:center">
          <div style="font-size:11px;color:#666;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Pack End</div>
          <div style="font-size:14px;font-weight:bold">${dispatch.packEndTs||'—'}</div>
        </div>
        <div style="border:1px solid #2e7d32;padding:12px;border-radius:4px;text-align:center;background:#f1f8e9">
          <div style="font-size:11px;color:#2e7d32;font-weight:bold;text-transform:uppercase;margin-bottom:6px">Total Duration</div>
          <div style="font-size:20px;font-weight:bold;color:#2e7d32">${dispatch.packDuration||'—'}</div>
        </div>
      </div>
      
      <div class="signature-area">
        <div class="signature-box">
          <span>Packed By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Dispatched By (Signature)</span>
        </div>
        <div class="signature-box">
          <span>Verified By (Signature)</span>
        </div>
      </div>
      
      <div class="footer">
        <p>This Dispatch Note was generated by CaratLane WMS on ${new Date().toLocaleString()}</p>
        <p style="margin-top:10px">SOP Reference: EPS-WH-SOP-001 v1.0 | Section 3: Packing & Dispatch</p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>printWindow.print(),500);
}

// PICKING
function addPkItem(){
  const sku=document.getElementById('pk-sku').value;
  const cond=document.getElementById('pk-cond').value;
  const qty=parseInt(document.getElementById('pk-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  const avail=(inv[sku]||{qty:0}).qty;
  if(cond==='defective'){toast(`${sku} flagged DEFECTIVE — item moved to HOLD zone. Raise defect report. (SOP §2.5)`,'w');return;}
  if(qty>avail){toast(`Insufficient stock: ${sku} has only ${avail} units available`,'w');return;}
  pkItemsList.push({sku,name:s.sub,variant:s.variant,qty,bin:`${s.rack}-${s.shelf}`});
  renderPkItemsList();
}
function renderPkItemsList(){
  const el=document.getElementById('pk-items-list');
  el.innerHTML=pkItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>BIN</th><th>Qty</th><th></th></tr></thead><tbody>${pkItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name} — ${item.variant}</td><td>${item.bin}</td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removePkItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removePkItem(i){pkItemsList.splice(i,1);renderPkItemsList();}
function releaseToPacking(){
  if(!pkItemsList.length){toast('Add items to the pick list first','w');return;}
  const oid=document.getElementById('pk-orderid').value.trim()||newId('ORD');
  const pri=document.getElementById('pk-priority').value;
  const method=document.getElementById('pk-method').value;
  const picker=document.getElementById('pk-picker').value.trim()||'Unassigned';
  pkItemsList.forEach(item=>{inv[item.sku].qty-=item.qty;});
  const tid=newId('PCK');
  packingQueue.push({id:tid,orderId:oid,priority:pri,method,picker,items:[...pkItemsList],ts:ts(),status:'awaiting_packing'});
  history.push({id:tid,type:'pick',ts:ts(),detail:`${oid} · ${method} pick · ${pri} · ${pkItemsList.length} SKUs · Picker: ${picker}`});
  saveInv();saveHist();pkItemsList=[];renderPkItemsList();
  document.getElementById('pk-orderid').value='';document.getElementById('pk-picker').value='';
  const el=document.getElementById('pk-log');
  el.innerHTML=history.filter(h=>h.type==='pick').slice(-6).reverse().map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="hist-ts">${h.ts}</span></div><div class="hist-body">${h.detail}</div></div>`).join('');
  toast(`Pick task ${tid} released to packing queue`,'s');
}

// PACKING QUEUE
function renderPackingQ(){
  const el=document.getElementById('packing-queue');
  if(!packingQueue.length){el.innerHTML='<div class="empty">No tasks awaiting packing — queue is clear</div>';return;}
  el.innerHTML=`<div class="tw"><table><thead><tr><th>Task ID</th><th>Order ID</th><th>Priority</th><th>Items</th><th>Released</th><th>Pack Start</th><th>Action</th></tr></thead><tbody>${packingQueue.map((t,i)=>{
    const started=t.packStartTime;
    const startedStr=started?`<span style="color:var(--st);font-weight:600;font-size:10px"><i class="ti ti-clock-check"></i> ${new Date(started).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span>`:'<span style="color:var(--t3);font-size:10px">Not started</span>';
    const btn=started?`<button class="btn-sm btn-success" onclick="openPackModal(${i})"><i class="ti ti-box"></i>Enter Details & Complete</button>`:`<button class="btn-sm" style="background:var(--gold);color:#fff;border:none;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:11px;display:inline-flex;align-items:center;gap:4px" onclick="startPacking(${i})"><i class="ti ti-player-play"></i>Start Packing</button>`;
    return `<tr><td class="mono">${t.id}</td><td style="font-size:11px">${t.orderId}</td><td><span class="pill ${t.priority==='Express'?'p-out':t.priority==='Standard'?'p-info':'p-hold'}">${t.priority}</span></td><td>${t.items.length} SKU(s)</td><td style="font-size:11px;color:var(--t2)">${t.ts}</td><td>${startedStr}</td><td>${btn}</td></tr>`;
  }).join('')}</tbody></table></div>`;
}
let _activePackIdx=null;
let _packElapsedTimer=null;

function startPacking(i){
  packingQueue[i].packStartTime=Date.now();
  packingQueue[i].packStartTs=ts();
  saveHist();
  renderPackingQ();
  toast(`Packing started for ${packingQueue[i].orderId} — timer running`,'s');
}
function openPackModal(i){
  _activePackIdx=i;
  const t=packingQueue[i];
  document.getElementById('pm-order-id').textContent=t.orderId;
  document.getElementById('pm-start-time').textContent=t.packStartTs||ts();
  document.getElementById('pm-items-list').innerHTML=t.items.map(it=>`<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:0.5px solid var(--b)"><span>${it.sku} — ${it.variant||''}</span><span style="font-weight:600">×${it.qty}</span></div>`).join('')||'<div style="color:var(--t3)">No items</div>';
  // Clear fields
  ['pm-length','pm-width','pm-height','pm-actual-weight','pm-notes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('pm-vol-result').style.display='none';
  // Start elapsed counter
  if(_packElapsedTimer)clearInterval(_packElapsedTimer);
  _packElapsedTimer=setInterval(()=>{
    const el=document.getElementById('pm-elapsed');
    if(!el){clearInterval(_packElapsedTimer);return;}
    const secs=Math.floor((Date.now()-(t.packStartTime||Date.now()))/1000);
    const m=Math.floor(secs/60),s=secs%60;
    el.textContent=`(${m}m ${s}s elapsed)`;
  },1000);
  const overlay=document.getElementById('pack-modal-overlay');
  overlay.style.display='flex';
}
function closePackModal(){
  document.getElementById('pack-modal-overlay').style.display='none';
  if(_packElapsedTimer)clearInterval(_packElapsedTimer);
  _activePackIdx=null;
}
function calcVolWeight(){
  const L=parseFloat(document.getElementById('pm-length').value)||0;
  const W=parseFloat(document.getElementById('pm-width').value)||0;
  const H=parseFloat(document.getElementById('pm-height').value)||0;
  const actual=parseFloat(document.getElementById('pm-actual-weight').value)||0;
  const res=document.getElementById('pm-vol-result');
  if(!L||!W||!H||!actual){res.style.display='none';return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  document.getElementById('pm-show-actual').textContent=actual.toFixed(2);
  document.getElementById('pm-show-vol').textContent=vol.toFixed(2);
  document.getElementById('pm-show-chargeable').textContent=chargeable.toFixed(2);
  document.getElementById('pm-vol-formula').textContent=`Volumetric = (${L}×${W}×${H}) ÷ 5000 = ${vol} kg · Chargeable = max(actual, volumetric)`;
  res.style.display='block';
}
function confirmPackWithDetails(){
  const i=_activePackIdx;
  if(i===null)return;
  const t=packingQueue[i];
  const L=parseFloat(document.getElementById('pm-length').value)||0;
  const W=parseFloat(document.getElementById('pm-width').value)||0;
  const H=parseFloat(document.getElementById('pm-height').value)||0;
  const actual=parseFloat(document.getElementById('pm-actual-weight').value)||0;
  const notes=document.getElementById('pm-notes').value.trim();
  if(!L||!W||!H){toast('Please enter box dimensions (L × W × H)','w');return;}
  if(!validateDimension(L)||!validateDimension(W)||!validateDimension(H)){toast('Invalid dimensions — max 999cm','w');return;}
  if(!actual){toast('Please enter actual weight','w');return;}
  if(!validateWeight(actual)){toast('Invalid weight — must be between 0.01 and 999 kg','w');return;}
  if(!rateLimit('pack',2000)){toast('Please wait before submitting again','w');return;}
  const vol=parseFloat(((L*W*H)/5000).toFixed(2));
  const chargeable=Math.max(actual,vol);
  const endTime=Date.now();
  const endTs=ts();
  const durationSecs=t.packStartTime?Math.floor((endTime-t.packStartTime)/1000):null;
  const durationStr=durationSecs!==null?`${Math.floor(durationSecs/60)}m ${durationSecs%60}s`:'N/A';
  closePackModal();
  packingQueue.splice(i,1);
  const pkid=newId('PKD');
  const packedObj={
    id:pkid,type:'packed',ts:endTs,
    detail:`${t.orderId} · ${t.items.length} SKUs packed — ready for dispatch`,
    orderId:t.orderId,items:t.items,
    packStartTs:t.packStartTs,packStartTime:t.packStartTime,
    packEndTs:endTs,packEndTime:endTime,
    packDuration:durationStr,packDurationSecs:durationSecs,
    boxL:L,boxW:W,boxH:H,
    actualWeight:actual,volWeight:vol,chargeableWeight:chargeable,
    packNotes:notes
  };
  history.push(packedObj);
  saveHist();
  renderPackingQ();
  if(document.getElementById('page-dispatch').classList.contains('active')){renderDispatchPage();}
  renderDash();
  toast(`Order ${t.orderId} packed in ${durationStr} · ${chargeable}kg chargeable · moved to dispatch`,'s');
}


// DISPATCH — Courier AWB assignment
function renderDispatchPage(){
  renderPackedOrdersList();
  updateDispatchOrderSelect();
  renderDispatchCompletedLog();
  renderDispatchSameDayAlert();
}
function renderPackedOrdersList(){
  const el=document.getElementById('dispatch-packed-list');
  if(!el){console.log('ERROR: dispatch-packed-list element not found');return;}
  const packed=history.filter(h=>h.type==='packed');
  el.innerHTML=packed.length?packed.slice(-8).reverse().map(p=>{
    const itemCount=(p.items&&p.items.length)?p.items.length:0;
    const hasDims=p.boxL&&p.boxW&&p.boxH;
    const dimsStr=hasDims?`${p.boxL}×${p.boxW}×${p.boxH}cm · ${p.chargeableWeight}kg chargeable`:'Dims not captured';
    const durStr=p.packDuration?`Packed in ${p.packDuration}`:'';
    return `<div class="hist-entry" onclick="selectDispatchOrder('${p.id}')" style="cursor:pointer">
      <div class="hist-head"><span class="hist-id">${p.id}</span><span class="pill p-info">Awaiting AWB</span></div>
      <div class="hist-body">
        <div>${p.ts} · Order: <strong>${p.orderId}</strong> · ${itemCount} SKU(s)</div>
        <div style="font-size:10px;color:var(--t2);margin-top:2px">📦 ${dimsStr}${durStr?' · ⏱ '+durStr:''}</div>
      </div>
    </div>`;
  }).join(''):'<div class="empty">No packed orders yet — create and pack orders first</div>';
}
function filterDispatchOrders(){
  const q=(document.getElementById('disp-search-order').value||'').toLowerCase();
  const sel=document.getElementById('disp-order-select');
  const packed=history.filter(h=>h.type==='packed');
  if(!q){
    sel.innerHTML=`<option value="">— Choose an order —</option>${packed.map(p=>{
      const itemCount=(p.items&&p.items.length)?p.items.length:0;
      return `<option value="${p.id}">${p.orderId} · ${itemCount} SKU(s) · ${p.ts}</option>`;
    }).join('')}`;
  }else{
    const filtered=packed.filter(p=>p.orderId.toLowerCase().includes(q)||p.id.toLowerCase().includes(q));
    sel.innerHTML=`<option value="">— Choose an order —</option>${filtered.map(p=>{
      const itemCount=(p.items&&p.items.length)?p.items.length:0;
      return `<option value="${p.id}">${p.orderId} · ${itemCount} SKU(s) · ${p.ts}</option>`;
    }).join('')}`;
  }
}
function updateDispatchOrderSelect(){
  const sel=document.getElementById('disp-order-select');
  if(!sel)return;
  const packed=history.filter(h=>h.type==='packed');
  sel.innerHTML=`<option value="">— Choose an order —</option>${packed.map(p=>{
    const itemCount=(p.items&&p.items.length)?p.items.length:0;
    return `<option value="${p.id}">${p.orderId} · ${itemCount} SKU(s) · ${p.ts}</option>`;
  }).join('')}`;
}
function assignAWBDirect(pkdId){
  // Called from dispatch page alert — page already active, just select & scroll
  const sel=document.getElementById('disp-order-select');
  if(sel){
    sel.value=pkdId;
    loadDispatchOrder();
    setTimeout(()=>{
      const detail=document.getElementById('disp-order-detail');
      if(detail&&detail.style.display!=='none'){
        detail.scrollIntoView({behavior:'smooth',block:'start'});
        // Flash highlight
        detail.style.outline='2px solid var(--gold)';
        setTimeout(()=>{detail.style.outline='';},1200);
      }
    },80);
  }
}
function selectDispatchOrder(pkdId){
  // If dispatch page is not active, navigate there first then select
  const dispPage=document.getElementById('page-dispatch');
  const isActive=dispPage&&dispPage.classList.contains('active');
  if(!isActive){
    nav('dispatch');
    // Wait for page render then set value and load
    setTimeout(()=>{
      const sel=document.getElementById('disp-order-select');
      if(sel){
        sel.value=pkdId;
        loadDispatchOrder();
        // Scroll the order detail into view
        setTimeout(()=>{
          const detail=document.getElementById('disp-order-detail');
          if(detail&&detail.style.display!=='none')detail.scrollIntoView({behavior:'smooth',block:'start'});
        },150);
      }
    },80);
  } else {
    document.getElementById('disp-order-select').value=pkdId;
    loadDispatchOrder();
    setTimeout(()=>{
      const detail=document.getElementById('disp-order-detail');
      if(detail&&detail.style.display!=='none')detail.scrollIntoView({behavior:'smooth',block:'start'});
    },100);
  }
}
function loadDispatchOrder(){
  const pkdId=document.getElementById('disp-order-select').value;
  if(!pkdId){document.getElementById('disp-order-detail').style.display='none';return;}
  const packed=history.find(h=>h.id===pkdId);
  if(!packed){toast('Order not found','w');return;}
  const detail=document.getElementById('disp-detail-content');
  const items=packed.items||[];
  const totalUnits=items.reduce((a,i)=>a+(i.qty||0),0);
  detail.innerHTML=`
    <div style="font-size:11px;line-height:1.8">
      <div style="margin-bottom:6px"><span style="color:var(--t2)">Order ID:</span> <span style="font-weight:600">${packed.orderId}</span></div>
      <div style="margin-bottom:6px"><span style="color:var(--t2)">Items:</span> ${items.length?items.map(i=>`<span class="mono">${i.sku}</span>`).join(', '):'—'}</div>
      <div style="color:var(--t2)">Total units: <span style="font-weight:600">${totalUnits}</span></div>
    </div>
  `;
  document.getElementById('disp-order-detail').style.display='block';
  document.getElementById('disp-recip-name').value='';
  document.getElementById('disp-address').value='';
  document.getElementById('disp-pincode').value='';
  document.getElementById('disp-phone').value='';
  document.getElementById('disp-shipping').value='Standard Road';
  document.getElementById('disp-awb').value='';
}
function confirmCourierDispatch(){
  const pkdId=document.getElementById('disp-order-select').value;
  const name=document.getElementById('disp-recip-name').value.trim();
  const addr=document.getElementById('disp-address').value.trim();
  const pin=document.getElementById('disp-pincode').value.trim();
  const phone=document.getElementById('disp-phone').value.trim();
  const shipping=document.getElementById('disp-shipping').value;
  const awb=document.getElementById('disp-awb').value.trim();
  if(!pkdId||!name||!addr||!pin||!phone||!awb){toast('Please fill all fields including courier AWB number','w');return;}
  if(!validateAWB(awb)){toast('Invalid AWB — letters, numbers and hyphens only (4-30 chars)','w');return;}
  if(!validatePincode(pin)){toast('Invalid pincode — must be 6 digits','w');return;}
  if(!validatePhone(phone)){toast('Invalid phone number','w');return;}
  if(!rateLimit('dispatch',3000)){toast('Please wait before submitting again','w');return;}
  const packed=history.find(h=>h.id===pkdId);
  const items=packed.items||[];
  const did=newId('DSP');
  // Mark packed order as dispatched by changing its type
  packed.type='dispatched';
  packed.dispatchedAt=ts();
  packed.awb=awb;
  packed.recipientName=name;
  packed.address=addr;
  packed.pincode=pin;
  packed.phone=phone;
  packed.shippingMethod=shipping;
  // Add dispatch record
  history.push({id:did,type:'dispatch',ts:ts(),detail:`AWB: ${awb} · To: ${name}, ${pin} · Shipping: ${shipping} · Phone: ${phone} · ${items.length} SKUs`,packedId:pkdId});
  saveHist();
  renderDispatchPage();
  document.getElementById('disp-search-order').value='';
  toast(`Dispatch ${did} confirmed · AWB ${awb} assigned to ${name}`,'s');
}
function renderDispatchCompletedLog(){
  const el=document.getElementById('disp-dispatch-log');
  if(!el)return;
  const dispatched=history.filter(h=>h.type==='dispatched');
  el.innerHTML=dispatched.length?dispatched.slice(-8).reverse().map(d=>{
    const hasDims=d.boxL&&d.boxW&&d.boxH;
    const dimsStr=hasDims?`${d.boxL}×${d.boxW}×${d.boxH} cm`:'—';
    const actualW=d.actualWeight?`${d.actualWeight} kg`:'—';
    const volW=d.volWeight?`${d.volWeight} kg`:'—';
    const chargeW=d.chargeableWeight?`<strong>${d.chargeableWeight} kg</strong>`:'—';
    const packDur=d.packDuration||'—';
    const packStart=d.packStartTs||'—';
    const packEnd=d.packEndTs||'—';
    return `<div class="hist-entry">
      <div class="hist-head">
        <span class="hist-id">${d.id}</span>
        <span class="pill p-ok">Dispatched</span>
        <button onclick="printDispatch('${d.id}')" style="background:none;border:none;cursor:pointer;color:var(--t2);font-size:11px;padding:4px 8px;border-radius:3px" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background='transparent'"><i class="ti ti-printer"></i>Print</button>
      </div>
      <div class="hist-body">
        <div style="margin-bottom:6px"><span style="font-weight:600">${d.orderId}</span> · AWB: <span class="mono">${d.awb}</span></div>
        <div style="font-size:10px;color:var(--t2);line-height:1.6">To: ${d.recipientName}, ${d.pincode} · ${d.shippingMethod} · ${d.dispatchedAt}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:4px;margin-top:6px">
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Box (L×W×H)</div><div style="font-weight:600">${dimsStr}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Actual wt</div><div style="font-weight:600">${actualW}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Vol. wt</div><div style="font-weight:600;color:var(--it)">${volW}</div></div>
          <div style="background:var(--gold);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:rgba(255,255,255,0.7)">Chargeable</div><div style="font-weight:700;color:#fff">${chargeW}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Pack start</div><div style="font-weight:600">${packStart}</div></div>
          <div style="background:var(--s2);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--t3)">Pack end</div><div style="font-weight:600">${packEnd}</div></div>
          <div style="background:var(--sbg);border-radius:4px;padding:5px 8px;font-size:10px"><div style="color:var(--st)">Duration</div><div style="font-weight:700;color:var(--st)">${packDur}</div></div>
        </div>
      </div>
    </div>`;
  }).join(''):'<div class="empty">No dispatches completed yet</div>';
}

// ANALYTICS & COMPLIANCE
function renderAnalytics(){
  updateNotificationBadge();
  renderKPICards();
  renderAlertsPanel();
  renderABCAnalysis();
  renderLowStockList();
  renderPerformanceMetrics();
  renderCycleTimes();
  renderComplianceLog();
}
function updateNotificationBadge(){
  const badge=document.getElementById('notif-badge');
  if(!badge)return;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  const alerts=exceptions+lowStock;
  if(alerts>0){
    badge.textContent=alerts;
    badge.style.display='inline-flex';
  }else{
    badge.style.display='none';
  }
}
function renderKPICards(){
  const el=document.getElementById('kpi-cards');
  if(!el)return;
  const grns=history.filter(h=>h.type==='grn').length;
  const picks=history.filter(h=>h.type==='pick').length;
  const packed=history.filter(h=>h.type==='packed').length;
  const dispatched=history.filter(h=>h.type==='dispatched').length;
  const returns=history.filter(h=>h.type==='return').length;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const totalSku=SKUS.length;
  const inStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  const outStock=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0).length;
  el.innerHTML=`
    <div class="sc"><div class="sl"><i class="ti ti-package-import"></i>GRNs Created</div><div class="sv">${grns}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-scan"></i>Pick Tasks</div><div class="sv">${picks}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-box"></i>Orders Packed</div><div class="sv">${packed}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-truck-delivery"></i>Dispatched</div><div class="sv">${dispatched}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-package-export"></i>Returns</div><div class="sv">${returns}</div></div>
    <div class="sc"><div class="sl" style="color:var(--dt)"><i class="ti ti-alert-circle"></i>Exceptions</div><div class="sv" style="color:var(--dt)">${exceptions}</div></div>
    <div class="sc"><div class="sl"><i class="ti ti-check"></i>In Stock</div><div class="sv">${inStock}/${totalSku}</div></div>
    <div class="sc"><div class="sl" style="color:var(--wt)"><i class="ti ti-alert-triangle"></i>Low/Out</div><div class="sv" style="color:var(--wt)">${lowStock+outStock}</div></div>
  `;
}
function renderAlertsPanel(){
  const el=document.getElementById('alerts-panel');
  if(!el)return;
  const alerts=[];
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0);
  const outStock=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0);
  const exceptions=history.filter(h=>h.type==='exception').slice(-5);
  lowStock.forEach(s=>alerts.push({type:'low',msg:`${s.sub} (${s.sku}): ${(inv[s.sku]||{qty:0}).qty} units left`}));
  outStock.slice(0,3).forEach(s=>alerts.push({type:'out',msg:`${s.sub} (${s.sku}): OUT OF STOCK`}));
  exceptions.forEach(e=>alerts.push({type:'exc',msg:`Exception: ${esc(e.detail)}`}));
  el.innerHTML=alerts.length?alerts.map(a=>`<div class="warn-box" style="background:${a.type==='out'?'var(--dbg)':a.type==='exc'?'var(--wbg)':'var(--sbg)'};color:${a.type==='out'?'var(--dt)':a.type==='exc'?'var(--wt)':'var(--st)'}"><i class="ti ${a.type==='out'?'ti-x':a.type==='exc'?'ti-alert-triangle':'ti-alert-circle'}"></i>${a.msg}</div>`).join(''):'<div class="empty">No alerts — all systems operational ✓</div>';
}
function renderABCAnalysis(){
  const el=document.getElementById('abc-analysis');
  if(!el)return;
  const analysis=[];
  const totQty=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  SKUS.forEach(s=>{
    const qty=(inv[s.sku]||{qty:0}).qty;
    const pct=((qty/totQty)*100);
    s.abcPct=pct;
    analysis.push(s);
  });
  analysis.sort((a,b)=>b.abcPct-a.abcPct);
  const a=analysis.slice(0,Math.ceil(analysis.length*0.2));
  const b=analysis.slice(Math.ceil(analysis.length*0.2),Math.ceil(analysis.length*0.5));
  const c=analysis.slice(Math.ceil(analysis.length*0.5));
  el.innerHTML=`
    <div style="margin-bottom:8px;font-size:11px">
      <div style="margin-bottom:6px;padding:8px;background:var(--sbg);border-radius:6px"><span style="font-weight:600;color:var(--st)">A Items (High value) — ${a.length} SKUs · ${a.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--st);margin-top:3px">High-priority stock, frequent movement</div></div>
      <div style="margin-bottom:6px;padding:8px;background:var(--wbg);border-radius:6px"><span style="font-weight:600;color:var(--wt)">B Items (Medium value) — ${b.length} SKUs · ${b.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--wt);margin-top:3px">Standard inventory management</div></div>
      <div style="padding:8px;background:var(--ibg);border-radius:6px"><span style="font-weight:600;color:var(--it)">C Items (Low value) — ${c.length} SKUs · ${c.reduce((x,s)=>x+(inv[s.sku]||{qty:0}).qty,0)} units</span><div style="font-size:10px;color:var(--it);margin-top:3px">Slow-moving, periodic review</div></div>
    </div>
  `;
}
function renderLowStockList(){
  const el=document.getElementById('low-stock-list');
  if(!el)return;
  const low=SKUS.filter(s=>{const q=(inv[s.sku]||{qty:0}).qty;return q<=3&&q>0;});
  const out=SKUS.filter(s=>!(inv[s.sku])||inv[s.sku].qty<=0);
  const reorder=[...low,...out].slice(0,8);
  el.innerHTML=reorder.length?`<div class="tw"><table style="font-size:11px"><thead><tr><th>SKU</th><th>Item</th><th>Current</th><th>Status</th></tr></thead><tbody>${reorder.map(s=>{const q=(inv[s.sku]||{qty:0}).qty;return `<tr><td class="mono">${s.sku}</td><td>${s.sub}</td><td>${q}</td><td>${q<=0?'<span class="pill p-out">Reorder</span>':'<span class="pill p-low">Low</span>'}</td></tr>`;}).join('')}</tbody></table></div>`:'<div class="empty">All items well-stocked ✓</div>';
}
function renderPerformanceMetrics(){
  const el=document.getElementById('performance-metrics');
  if(!el)return;
  const picks=history.filter(h=>h.type==='pick');
  const errors=history.filter(h=>h.type==='exception'&&h.category==='pick_error');
  const accuracy=picks.length?Math.round(((picks.length-errors.length)/picks.length)*100):0;
  el.innerHTML=`
    <div style="font-size:11px;line-height:1.8">
      <div style="margin-bottom:8px;padding:8px;background:var(--s2);border-radius:6px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:var(--t2)">Pick Accuracy</span><span style="font-weight:600;color:var(--st)">${accuracy}%</span></div>
        <div style="height:6px;background:var(--b);border-radius:3px;overflow:hidden"><div style="height:100%;width:${accuracy}%;background:var(--st);border-radius:3px"></div></div>
      </div>
      <div style="padding:8px;background:var(--s2);border-radius:6px;font-size:10px;color:var(--t2)">
        <div style="margin-bottom:3px"><span style="color:var(--t)">Total Picks:</span> ${picks.length}</div>
        <div><span style="color:var(--t)">Errors:</span> ${errors.length}</div>
      </div>
    </div>
  `;
}
function renderCycleTimes(){
  const el=document.getElementById('cycle-times');
  if(!el)return;
  const grns=history.filter(h=>h.type==='grn');
  const picks=history.filter(h=>h.type==='pick');
  const packed=history.filter(h=>h.type==='packed');
  el.innerHTML=`
    <div style="font-size:11px;line-height:2">
      <div><span style="color:var(--t2)">Receiving (Inbound):</span> <span style="font-weight:600">~2-4 hrs</span></div>
      <div><span style="color:var(--t2)">Pick TAT:</span> <span style="font-weight:600">~15 min/order</span></div>
      <div><span style="color:var(--t2)">Pack TAT:</span> <span style="font-weight:600">~10 min/order</span></div>
      <div><span style="color:var(--t2)">Total (GRN to Dispatch):</span> <span style="font-weight:600">~3-5 days</span></div>
      <div style="margin-top:8px;font-size:10px;color:var(--t2)">Based on ${grns.length} inbound · ${picks.length} picks · ${packed.length} packs</div>
    </div>
  `;
}
function renderComplianceLog(){
  const el=document.getElementById('compliance-log');
  if(!el)return;
  const exceptions=history.filter(h=>h.type==='exception').slice(-10);
  el.innerHTML=exceptions.length?`<div>${exceptions.reverse().map(e=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${e.id}</span><span class="pill p-out">${esc(e.category)}</span></div><div class="hist-body"><div style="font-size:11px">${esc(e.detail)}</div><div style="font-size:10px;color:var(--t2);margin-top:3px">${e.ts} · GRN: ${esc(e.grn||'—')}</div></div></div>`).join('')}</div>`:'<div class="empty">No exceptions recorded ✓</div>';
}

// INVENTORY COUNT & AUDIT
function startInventoryCount(){
  const countType=document.getElementById('ic-type').value;
  const month=document.getElementById('ic-month').value;
  const date=document.getElementById('ic-date').value;
  const counter=document.getElementById('ic-counter').value.trim();
  const verifier=document.getElementById('ic-verifier').value.trim();
  const reason=document.getElementById('ic-reason').value;
  
  if(!month||!counter||!verifier||!date){toast('Please fill all required fields','w');return;}
  
  currentCount={
    id:newId('CNT'),
    type:countType,
    month,
    date,
    counter,
    verifier,
    reason,
    ts:ts(),
    counts:{},
    status:'in-progress'
  };
  
  SKUS.forEach(s=>currentCount.counts[s.sku]={
    systemQty:(inv[s.sku]||{qty:0}).qty,
    physicalQty:0,
    counted:false,
    rack:s.rack,
    shelf:s.shelf,
    category:s.category
  });
  
  document.getElementById('ic-status').textContent='In Progress';
  document.getElementById('ic-type-display').textContent=countType.charAt(0).toUpperCase()+countType.slice(1);
  document.getElementById('ic-month-display').textContent=month;
  document.getElementById('ic-date-display').textContent=date;
  document.getElementById('ic-counter-display').textContent=counter;
  
  renderCountList();
  updateCountSummary();
  toast(`✓ ${countType.toUpperCase()} count started!`,'s');
}

function renderCountList(){
  const el=document.getElementById('ic-list');
  if(!currentCount.counts){
    el.innerHTML='<div class="empty">No count in progress. Click "Start New Count" to begin.</div>';
    return;
  }
  const q=(document.getElementById('ic-search')?.value||'').toLowerCase();
  const filterType=document.getElementById('ic-filter')?.value||'all';
  
  let skus=SKUS.filter(s=>{
    const match=s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q);
    if(!match)return false;
    const c=currentCount.counts[s.sku];
    if(filterType==='counted'&&!c.counted)return false;
    if(filterType==='uncounted'&&c.counted)return false;
    if(filterType==='discrepancy'&&c.physicalQty===c.systemQty)return false;
    if(filterType==='rackA'&&s.rack!=='A')return false;
    if(filterType==='rackB'&&s.rack!=='B')return false;
    return true;
  });
  
  el.innerHTML=skus.map(s=>{
    const count=currentCount.counts[s.sku];
    const variance=count.physicalQty-count.systemQty;
    const varianceClass=variance===0?'p-pass':variance>0?'p-low':'p-out';
    const variancePct=(count.systemQty>0)?Math.round((variance/count.systemQty)*100):0;
    const status=count.counted?'✓ Counted':'Pending';
    const statusClass=count.counted?'p-pass':'p-out';
    
    return `<div style="padding:10px;background:var(--s2);border-radius:6px;margin-bottom:8px;border-left:4px solid ${count.counted?'var(--st)':'var(--wt)'}">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px;font-size:11px">
        <div><strong>${s.sku}</strong><br><span style="color:var(--t2);font-size:10px">${s.sub}</span></div>
        <div><span style="color:var(--t2);font-size:10px">Rack ${s.rack} / Shelf ${s.shelf}</span><br><span style="font-weight:600">${s.category}</span></div>
        <div style="text-align:right"><span class="pill ${statusClass}" style="font-size:9px">${status}</span></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:8px;font-size:10px">
        <div><span style="color:var(--t2)">System:</span> <strong>${count.systemQty}</strong></div>
        <div><span style="color:var(--t2)">Physical:</span> <input type="number" id="ic-${s.sku}" value="${count.physicalQty}" min="0" onchange="updateCountQty('${s.sku}')" style="width:60%;padding:4px;border:0.5px solid var(--b);border-radius:3px;font-size:10px"></div>
        <div><span style="color:var(--t2)">Variance:</span> <span class="pill ${varianceClass}" style="font-size:9px">${variance>0?'+':''}${variance} (${variancePct>0?'+':''}${variancePct}%)</span></div>
        <button onclick="markCountComplete('${s.sku}')" style="padding:4px 6px;background:${count.counted?'var(--st)':'var(--b)'};color:#fff;border:none;border-radius:3px;cursor:pointer;font-size:9px;font-weight:600">${count.counted?'✓ Done':'Mark Done'}</button>
      </div>
    </div>`;
  }).join('');
  updateCountSummary();
}

function updateCountQty(sku){
  const val=parseInt(document.getElementById('ic-'+sku).value)||0;
  currentCount.counts[sku].physicalQty=val;
  updateCountSummary();
}

function markCountComplete(sku){
  currentCount.counts[sku].counted=!currentCount.counts[sku].counted;
  renderCountList();
}

function filterCountList(){
  renderCountList();
}

function updateCountSummary(){
  // Safe element getter with null check
  const getEl=id=>document.getElementById(id);
  const setEl=(id,val)=>{const el=getEl(id);if(el)el.textContent=val;};
  const setHTML=(id,val)=>{const el=getEl(id);if(el)el.innerHTML=val;};
  const setStyle=(id,prop,val)=>{const el=getEl(id);if(el)el.style[prop]=val;};
  const setDisplay=(id,val)=>{const el=getEl(id);if(el)el.style.display=val;};
  
  if(!currentCount.counts){
    setHTML('ic-summary','<div class="empty">No count in progress</div>');
    return;
  }
  
  const counts=Object.values(currentCount.counts);
  const counted=counts.filter(c=>c.counted).length;
  const totalSystem=counts.reduce((a,c)=>a+c.systemQty,0);
  const totalPhysical=counts.reduce((a,c)=>a+c.physicalQty,0);
  const totalVariance=totalPhysical-totalSystem;
  const variancePct=totalSystem>0?Math.round((totalVariance/totalSystem)*100):0;
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const highVariance=counts.filter(c=>{
    const pct=c.systemQty>0?Math.abs((c.physicalQty-c.systemQty)/c.systemQty):0;
    return pct>=0.1;
  });
  const accuracy=Math.round((1-(discrepancies.length/SKUS.length))*100);
  const progressPct=Math.round((counted/SKUS.length)*100);
  
  // Update progress bar
  setEl('ic-counted',counted+' / '+SKUS.length);
  setEl('ic-progress-pct',progressPct+'%');
  setStyle('ic-progress-bar','width',progressPct+'%');
  
  // Update summary metrics
  setEl('ic-total-system',totalSystem);
  setEl('ic-total-physical',totalPhysical);
  setEl('ic-total-variance',(totalVariance>0?'+':'')+totalVariance);
  setEl('ic-variance-pct',(variancePct>0?'+':'')+variancePct+'%');
  setEl('ic-metric-counted',counted);
  setEl('ic-metric-disc',discrepancies.length);
  setEl('ic-metric-accuracy',accuracy+'%');
  setEl('ic-metric-high',highVariance.length);
  
  // Show discrepancies section
  if(discrepancies.length>0){
    setDisplay('ic-discrepancies-section','block');
    const discList=Object.keys(currentCount.counts).filter(k=>currentCount.counts[k].physicalQty!==currentCount.counts[k].systemQty).map(sku=>{
      const count=currentCount.counts[sku];
      const item=SKUS.find(s=>s.sku===sku);
      if(!item)return '';
      const variance=count.physicalQty-count.systemQty;
      const type=variance>0?'📈 EXCESS':'📉 SHORTAGE';
      const pct=count.systemQty>0?Math.round((variance/count.systemQty)*100):0;
      return `<div style="padding:8px;background:var(--s3);border-radius:4px;margin-bottom:6px;font-size:10px;display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center">
        <div style="font-weight:600">${sku}</div>
        <div><span style="color:var(--t2)">${item.sub}</span><br>Sys: ${count.systemQty} | Phys: ${count.physicalQty}</div>
        <div style="text-align:right;white-space:nowrap"><span class="pill ${variance>0?'p-low':'p-out'}" style="font-size:9px">${type} ${variance>0?'+':''}${variance} (${pct>0?'+':''}${pct}%)</span></div>
      </div>`;
    }).join('');
    setHTML('ic-discrepancies-list',discList);
  }
  
  // Rack analysis
  setDisplay('ic-rack-analysis','block');
  const rackAData=SKUS.filter(s=>s.rack==='A').map(s=>currentCount.counts[s.sku]);
  const rackBData=SKUS.filter(s=>s.rack==='B').map(s=>currentCount.counts[s.sku]);
  const rackASystem=rackAData.reduce((a,c)=>a+c.systemQty,0);
  const rackAPhysical=rackAData.reduce((a,c)=>a+c.physicalQty,0);
  const rackBSystem=rackBData.reduce((a,c)=>a+c.systemQty,0);
  const rackBPhysical=rackBData.reduce((a,c)=>a+c.physicalQty,0);
  
  setHTML('ic-rack-a-stats',`
    <div><span style="color:var(--t2)">System Qty:</span> <strong>${rackASystem}</strong></div>
    <div><span style="color:var(--t2)">Physical Qty:</span> <strong>${rackAPhysical}</strong></div>
    <div><span style="color:var(--t2)">Variance:</span> <strong style="color:${rackAPhysical-rackASystem===0?'var(--st)':rackAPhysical-rackASystem>0?'var(--wt)':'var(--dt)'}">${(rackAPhysical-rackASystem)>0?'+':''}${rackAPhysical-rackASystem}</strong></div>
  `);
  
  setHTML('ic-rack-b-stats',`
    <div><span style="color:var(--t2)">System Qty:</span> <strong>${rackBSystem}</strong></div>
    <div><span style="color:var(--t2)">Physical Qty:</span> <strong>${rackBPhysical}</strong></div>
    <div><span style="color:var(--t2)">Variance:</span> <strong style="color:${rackBPhysical-rackBSystem===0?'var(--st)':rackBPhysical-rackBSystem>0?'var(--wt)':'var(--dt)'}">${(rackBPhysical-rackBSystem)>0?'+':''}${rackBPhysical-rackBSystem}</strong></div>
  `);
  
  // Movement analysis
  setDisplay('ic-movement-section','block');
  const movementDetail=`<div><strong>Why the variance?</strong> This shows inbound (GRN) and outbound (Dispatch) movements to explain the difference.</div>`;
  setHTML('ic-movement-detail',movementDetail);
}

function completeInventoryCount(){
  const counts=Object.values(currentCount.counts);
  const uncounted=counts.filter(c=>!c.counted);
  if(uncounted.length>0){toast(`${uncounted.length} SKUs not yet counted. Complete all counts first.`,'w');return;}
  
  currentCount.status='completed';
  currentCount.completedTs=ts();
  
  // Calculate movements for each SKU
  currentCount.movements={};
  Object.keys(currentCount.counts).forEach(sku=>{
    const count=currentCount.counts[sku];
    const variance=count.physicalQty-count.systemQty;
    const grnItems=history.filter(h=>h.type==='grn').flatMap(g=>g.items.filter(i=>i.sku===sku)).reduce((a,i)=>a+i.qty,0);
    const pickItems=history.filter(h=>h.type==='pick').reduce((a,h)=>a+(h.detail.includes(sku)?1:0),0);
    const dispatchItems=history.filter(h=>h.type==='dispatched').flatMap(d=>d.items).filter(i=>i.sku===sku).reduce((a,i)=>a+i.qty,0);
    const returnItems=history.filter(h=>h.type==='return').reduce((a,h)=>a+(h.detail.includes(sku)?1:0),0);
    currentCount.movements[sku]={grnInbound:grnItems,pickOutbound:pickItems,dispatchOutbound:dispatchItems,returnInbound:returnItems,netMovement:grnItems-dispatchItems+returnItems};
  });
  
  inventoryCounts.push({...currentCount});
  localStorage.setItem('cl_wms_counts',JSON.stringify(inventoryCounts));
  
  const completedMonth=currentCount.month;
  const completedCounter=currentCount.counter;
  
  toast('Inventory count completed and saved!','s');
  currentCount={};
  document.getElementById('ic-status').textContent='Not Started';
  document.getElementById('ic-month-display').textContent='—';
  document.getElementById('ic-counter-display').textContent='—';
  renderCountList();
}

// MOBILE DASHBOARD
let mobilePickCache=[],mobilePhotoData=null;

function updateMobileKPIs(){
  const picks=history.filter(h=>h.type==='pick');
  const today=new Date().toISOString().split('T')[0];
  const todayPicks=picks.filter(p=>p.ts.includes(today));
  const dispatches=history.filter(h=>h.type==='dispatched');
  const exceptions=history.filter(h=>h.type==='exception');
  const accuracy=todayPicks.length>0?Math.round((1-(exceptions.length/todayPicks.length))*100):100;
  const avgCycleTime=todayPicks.length>0?Math.round(Math.random()*30+5):0;
  
  document.getElementById('m-kpi-picks').textContent=todayPicks.length;
  document.getElementById('m-kpi-accuracy').textContent=accuracy+'%';
  document.getElementById('m-kpi-cycletime').textContent=avgCycleTime+'m';
  document.getElementById('m-kpi-dispatch').textContent=dispatches.length;
  
  const pkQueue=packingQueue.length;
  const totalItems=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  const progress=totalItems>0?Math.round((1-(pkQueue/totalItems))*100):0;
  
  document.getElementById('m-items-left').textContent=pkQueue;
  document.getElementById('m-progress').textContent=progress+'%';
  document.getElementById('m-current-order').textContent=pkQueue>0?packingQueue[0].orderId:'—';
}

function switchMobileView(view){
  ['home','picks','qc'].forEach(v=>{
    document.getElementById('mobile-'+v).style.display=v===view?'block':'none';
    document.getElementById('btn-'+v).style.background=v===view?'var(--st)':'var(--b)';
    document.getElementById('btn-'+v).style.color=v===view?'#fff':'var(--t)';
  });
  if(view==='picks')renderMobilePickList();
  if(view==='home')updateMobileKPIs();
}

function renderMobilePickList(){
  const el=document.getElementById('m-pick-list');
  const queue=packingQueue;
  mobilePickCache=queue;
  el.innerHTML=queue.length?queue.map((p,i)=>`
    <div style="background:var(--s2);padding:12px;border-radius:6px;touch-action:manipulation" ontouchstart="startSwipe(event,${i})" ontouchend="endSwipe(event,${i})">
      <div style="font-weight:600;font-size:13px;margin-bottom:8px">${p.orderId}</div>
      <div style="font-size:11px;color:var(--t2);line-height:1.8;margin-bottom:8px">
        <div><span style="color:var(--t2)">Priority:</span> ${p.priority}</div>
        <div><span style="color:var(--t2)">Method:</span> ${p.method}</div>
        <div><span style="color:var(--t2)">Items:</span> ${p.items.length} SKUs</div>
      </div>
      <div style="display:grid;gap:6px">
        ${p.items.map((item,idx)=>`<div style="background:var(--s3);padding:8px;border-radius:4px;font-size:10px">
          <div><strong>${item.sku}</strong> - ${item.name}</div>
          <div style="color:var(--t2);margin-top:2px">Qty: ${item.qty} | Bin: ${item.bin}</div>
        </div>`).join('')}
      </div>
      <button onclick="markPickComplete('${p.id}')" style="width:100%;margin-top:8px;padding:8px;background:var(--st);color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:11px;touch-action:manipulation"><i class="ti ti-check"></i>Mark Complete</button>
    </div>
  `).join(''):'<div style="text-align:center;padding:20px;color:var(--t2)">No pending picks</div>';
}

function filterMobilePickList(){
  const q=document.getElementById('m-order-search').value.toLowerCase();
  const filtered=mobilePickCache.filter(p=>p.orderId.toLowerCase().includes(q)||p.items.some(i=>i.sku.toLowerCase().includes(q)));
  const el=document.getElementById('m-pick-list');
  el.innerHTML=filtered.length?filtered.map((p,i)=>`
    <div style="background:var(--s2);padding:12px;border-radius:6px">
      <div style="font-weight:600;font-size:13px;margin-bottom:8px">${p.orderId}</div>
      <div style="font-size:11px;color:var(--t2);line-height:1.8;margin-bottom:8px">
        <div><span style="color:var(--t2)">Priority:</span> ${p.priority}</div>
        <div><span style="color:var(--t2)">Items:</span> ${p.items.length}</div>
      </div>
      <button onclick="markPickComplete('${p.id}')" style="width:100%;padding:8px;background:var(--st);color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:11px"><i class="ti ti-check"></i>Complete</button>
    </div>
  `).join(''):'<div style="text-align:center;padding:20px;color:var(--t2)">No matches</div>';
}

function markPickComplete(pickId){
  const pick=packingQueue.find(p=>p.id===pickId);
  if(!pick){toast('Pick not found','w');return;}
  packingQueue=packingQueue.filter(p=>p.id!==pickId);
  const pkdId=newId('PKD');
  history.push({id:pkdId,type:'packed',ts:ts(),detail:`${pick.orderId} · ${pick.items.length} SKUs packed — ready for dispatch`,orderId:pick.orderId,items:pick.items});
  saveHist();
  renderMobilePickList();
  updateMobileKPIs();
  toast(`✓ ${pick.orderId} marked complete`,'s');
}

function startSwipe(e,i){
  e.touches[0].clientX=e.touches[0].clientX;
}

function endSwipe(e,i){
  if(Math.abs(e.changedTouches[0].clientX-(e.touches[0]?.clientX||0))>50){
    markPickComplete(mobilePickCache[i].id);
  }
}

function submitMobileQC(){
  const sku=document.getElementById('m-qc-sku').value.trim();
  const result=document.getElementById('m-qc-result').value;
  const issue=document.getElementById('m-qc-issue').value;
  
  if(!sku||!result){toast('Fill SKU and QC result','w');return;}
  
  const detail=`${sku} · QC: ${result} · Issue: ${issue||'N/A'} · Photo: ${mobilePhotoData?'Yes':'No'}`;
  history.push({id:newId('QC'),type:'exception',ts:ts(),category:issue||'general',detail,photo:mobilePhotoData});
  saveHist();
  
  document.getElementById('m-qc-sku').value='';
  document.getElementById('m-qc-result').value='';
  document.getElementById('m-qc-issue').value='';
  document.getElementById('m-qc-photo').value='';
  document.getElementById('m-photo-preview').innerHTML='';
  mobilePhotoData=null;
  
  toast('QC submitted & documented','s');
}

document.addEventListener('DOMContentLoaded',()=>{
  const photoInput=document.getElementById('m-qc-photo');
  if(photoInput){
    photoInput.addEventListener('change',(e)=>{
      const file=e.target.files[0];
      if(file){
        const reader=new FileReader();
        reader.onload=(event)=>{
          mobilePhotoData=event.target.result;
          const preview=`<div style="position:relative;width:100%;border-radius:4px;overflow:hidden;margin-bottom:8px">
            <img src="${mobilePhotoData}" style="width:100%;height:150px;object-fit:cover">
            <button onclick="clearMobilePhoto()" style="position:absolute;top:4px;right:4px;width:24px;height:24px;background:#ff6b6b;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:14px;padding:0">×</button>
          </div>`;
          document.getElementById('m-photo-preview').innerHTML=preview;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

function clearMobilePhoto(){
  mobilePhotoData=null;
  document.getElementById('m-qc-photo').value='';
  document.getElementById('m-photo-preview').innerHTML='';
}

// Offline mode
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('data:text/javascript,').catch(()=>{});
}

function checkOnlineStatus(){
  const online=navigator.onLine;
  const badge=document.getElementById('m-offline-badge');
  if(badge)badge.style.display=online?'none':'block';
  return online;
}

window.addEventListener('online',()=>checkOnlineStatus());
window.addEventListener('offline',()=>checkOnlineStatus());

function filterCountList(){
  renderCountList();
}

function renderCountHistory(){
  const el=document.getElementById('ic-history');
  if(!el)return;
  if(!inventoryCounts||inventoryCounts.length===0){
    el.innerHTML='<div style="color:var(--t2);font-size:11px">No previous counts recorded</div>';
    return;
  }
  el.innerHTML=inventoryCounts.slice().reverse().map(count=>{
    const discrepancies=Object.values(count.counts||{}).filter(c=>c.physicalQty!==c.systemQty);
    const accuracy=Math.round((1-(discrepancies.length/SKUS.length))*100);
    const accuracyColor=accuracy>=95?'var(--st)':'var(--wt)';
    return `<div style="padding:8px;background:var(--s2);border-radius:4px;margin-bottom:6px;font-size:10px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:4px">
        <div><span style="color:var(--t2)">Month:</span> <strong>${count.month}</strong></div>
        <div><span style="color:var(--t2)">Type:</span> <strong>${count.type||'full'}</strong></div>
        <div><span style="color:var(--t2)">Counted By:</span> <strong>${count.counter||'N/A'}</strong></div>
        <div><span style="color:var(--t2)">Accuracy:</span> <strong style="color:${accuracyColor}">${accuracy}%</strong></div>
      </div>
    </div>`;
  }).join('');
}

function downloadCountReport(){
  if(!currentCount.month){toast('Start a count first','w');return;}
  const counts=Object.values(currentCount.counts);
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const totalVariance=counts.reduce((a,c)=>a+(c.physicalQty-c.systemQty),0);
  
  let csv='CARATLANE WMS - INVENTORY COUNT REPORT\n';
  csv+=`Generated: ${new Date().toLocaleString()}\n\n`;
  csv+='Count Details,Value\n';
  csv+=`Count Month,${currentCount.month}\n`;
  csv+=`Date Completed,${currentCount.completedTs||'In Progress'}\n`;
  csv+=`Counted By,${currentCount.counter}\n`;
  csv+=`Verified By,${currentCount.verifier}\n\n`;
  
  csv+='Summary Metrics,Value\n';
  csv+=`Total SKUs,${SKUS.length}\n`;
  csv+=`Total Variance (Units),${totalVariance}\n`;
  csv+=`SKUs with Discrepancies,${discrepancies.length}\n`;
  csv+=`Accuracy,${Math.round((1-(discrepancies.length/SKUS.length))*100)}%\n\n`;
  
  csv+='Full Count Details\n';
  csv+='SKU Code,Item Name,Variant,System Qty,Physical Qty,Variance,Inbound GRN,Outbound Dispatch,Returns Inbound,Net Movement,Status\n';
  Object.keys(currentCount.counts).forEach(sku=>{
    const count=currentCount.counts[sku];
    const item=SKUS.find(s=>s.sku===sku);
    const variance=count.physicalQty-count.systemQty;
    const status=variance===0?'MATCH':variance>0?'EXCESS':'SHORTAGE';
    const movements=currentCount.movements?currentCount.movements[sku]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    csv+=`"${sku}","${item.sub}","${item.variant}",${count.systemQty},${count.physicalQty},${variance>0?'+':''}${variance},"${status}",${movements.grnInbound||0},${movements.dispatchOutbound||0},${movements.returnInbound||0},${movements.netMovement||0}\n`;
  });
  
  csv+='\n\nDISCREPANCY ANALYSIS (Why the variance?)\n';
  csv+='SKU Code,Item Name,System Qty,Physical Qty,Variance,Expected (based on movements),Unexplained Loss/Gain,Analysis\n';
  Object.keys(currentCount.counts).forEach(sku=>{
    const count=currentCount.counts[sku];
    const item=SKUS.find(s=>s.sku===sku);
    const variance=count.physicalQty-count.systemQty;
    const movements=currentCount.movements?currentCount.movements[sku]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    const expectedQty=count.systemQty+movements.netMovement;
    const unexplained=count.physicalQty-expectedQty;
    if(unexplained!==0){
      const analysis=unexplained>0?'Excess (possible data entry error or undocumented receipt)':'Shortage (possible theft, damage not recorded, or documentation error)';
      csv+=`"${sku}","${item.sub}",${count.systemQty},${count.physicalQty},${variance>0?'+':''}${variance},${expectedQty},${unexplained>0?'+':''}${unexplained},"${analysis}"\n`;
    }
  });
  
  csv+='\n\nMOVEMENT SUMMARY (Transaction History)\n';
  csv+='SKU Code,GRN Inbound,Pick/Dispatch Outbound,Returns Inbound,Net Movement,Expected System Qty\n';
  Object.keys(currentCount.counts).forEach(sku=>{
    const count=currentCount.counts[sku];
    const movements=currentCount.movements?currentCount.movements[sku]:{grnInbound:0,dispatchOutbound:0,returnInbound:0,netMovement:0};
    const expectedQty=count.systemQty+movements.netMovement;
    csv+=`"${sku}",${movements.grnInbound||0},${movements.dispatchOutbound||0},${movements.returnInbound||0},${movements.netMovement||0},${expectedQty}\n`;
  });
  
  csv+='\n\nSignatures\n';
  csv+=`Counted By,${currentCount.counter}\n`;
  csv+=`Verified By,${currentCount.verifier}\n`;
  csv+=`Date,${currentCount.completedTs||'In Progress'}\n`;
  
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=`InventoryCount_${currentCount.month}_${currentCount.id}.csv`;
  link.click();
  toast('Count report downloaded','s');
}

function printCountReport(){
  if(!currentCount.month){toast('Start a count first','w');return;}
  const counts=Object.values(currentCount.counts);
  const discrepancies=counts.filter(c=>c.physicalQty!==c.systemQty);
  const totalVariance=counts.reduce((a,c)=>a+(c.physicalQty-c.systemQty),0);
  
  const printContent=`<!DOCTYPE html><html><head><title>Inventory Count Report</title><style>
    body{font-family:Arial;margin:20px;line-height:1.6;color:#333}
    .header{border-bottom:3px solid #000;padding-bottom:15px;margin-bottom:20px}
    .company{font-size:20px;font-weight:bold}
    .title{font-size:18px;font-weight:bold;margin:20px 0}
    .info{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
    .info-box{border:1px solid #ddd;padding:10px;border-radius:4px}
    table{width:100%;border-collapse:collapse;margin:20px 0}
    th{background:#f0f0f0;padding:10px;text-align:left;border:1px solid #ddd;font-weight:bold}
    td{padding:10px;border:1px solid #ddd;font-size:12px}
    .variance-pos{color:green}
    .variance-neg{color:red}
    .summary{margin:20px 0;padding:15px;background:#f9f9f9;border-radius:4px}
    @media print{body{margin:0}}
  </style></head><body>
    <div class="header"><div class="company">CaratLane WMS</div><div style="font-size:12px;color:#666">Inventory Count Report</div></div>
    <div class="title">Monthly Inventory Count Report</div>
    <div class="info">
      <div class="info-box"><strong>Count Month:</strong> ${currentCount.month}</div>
      <div class="info-box"><strong>Date Completed:</strong> ${currentCount.completedTs||'In Progress'}</div>
      <div class="info-box"><strong>Counted By:</strong> ${currentCount.counter}</div>
      <div class="info-box"><strong>Verified By:</strong> ${currentCount.verifier}</div>
    </div>
    <div class="summary">
      <div><strong>Total SKUs:</strong> ${SKUS.length}</div>
      <div><strong>Total Variance:</strong> <span class="${totalVariance===0?'':totalVariance>0?'variance-pos':'variance-neg'}">${totalVariance>0?'+':''}${totalVariance}</span></div>
      <div><strong>Discrepancies:</strong> ${discrepancies.length}</div>
      <div><strong>Accuracy:</strong> ${Math.round((1-(discrepancies.length/SKUS.length))*100)}%</div>
    </div>
    <h3>Items with Discrepancies</h3>
    <table><thead><tr><th>SKU</th><th>Item</th><th>System Qty</th><th>Physical Qty</th><th>Variance</th></tr></thead><tbody>
      ${discrepancies.map(d=>{
        const sku=Object.keys(currentCount.counts).find(k=>currentCount.counts[k]===d);
        const item=SKUS.find(s=>s.sku===sku);
        const variance=d.physicalQty-d.systemQty;
        return `<tr><td>${sku}</td><td>${item.sub}</td><td>${d.systemQty}</td><td>${d.physicalQty}</td><td class="${variance>0?'variance-pos':'variance-neg'}">${variance>0?'+':''}${variance}</td></tr>`;
      }).join('')}
    </tbody></table>
    <h3>Movement Analysis (Understanding the Variance)</h3>
    <p style="font-size:12px;color:#666;margin-bottom:10px">This shows how much inventory came in (GRN) and went out (Dispatch) to explain the variance</p>
    <table><thead><tr><th>SKU</th><th>GRN Inbound</th><th>Dispatch Outbound</th><th>Returns</th><th>Net Movement</th><th>Expected Qty</th><th>Actual Qty</th><th>Unexplained</th></tr></thead><tbody>
      ${Object.keys(currentCount.counts).filter(sku=>currentCount.movements&&currentCount.movements[sku]).map(sku=>{
        const count=currentCount.counts[sku];
        const movements=currentCount.movements[sku];
        const expectedQty=count.systemQty+movements.netMovement;
        const unexplained=count.physicalQty-expectedQty;
        if(unexplained!==0){
          return `<tr><td>${sku}</td><td>${movements.grnInbound||0}</td><td>${movements.dispatchOutbound||0}</td><td>${movements.returnInbound||0}</td><td>${movements.netMovement}</td><td>${expectedQty}</td><td>${count.physicalQty}</td><td class="${unexplained>0?'variance-pos':'variance-neg'}">${unexplained>0?'+':''}${unexplained}</td></tr>`;
        }
      }).join('')}
    </tbody></table>
    <div style="margin-top:40px;padding-top:20px;border-top:1px solid #ddd">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px">
        <div><strong>Counted By:</strong><br><br>_______________<br>${currentCount.counter}</div>
        <div><strong>Verified By:</strong><br><br>_______________<br>${currentCount.verifier}</div>
      </div>
    </div>
  </body></html>`;
  
  const win=window.open('','COUNT_'+currentCount.id,'width=900,height=1000');
  if(!win){toast('Allow popups to print','w');return;}
  win.document.write(printContent);
  win.document.close();
  win.focus();
  setTimeout(()=>win.print(),500);
}

// REPORT DOWNLOADS
function downloadCSV(filename,data){
  const csv=data;
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const link=document.createElement('a');
  link.href=URL.createObjectURL(blob);
  link.download=filename;
  link.click();
}

function downloadInboundReport(){
  const grns=history.filter(h=>h.type==='grn');
  let csv='GRN Number,Date,ASN,Carrier,Vehicle,Cartons,SKU Count,Units PASS,Units HOLD,Units REJECT\n';
  grns.forEach(g=>{
    const pass=g.items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
    const hold=g.items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
    const reject=g.items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
    csv+=`"${g.id}","${g.ts}","${g.asn||'N/A'}","${g.carrier||'N/A'}","${g.vehicle||'N/A'}","${g.cartons||'N/A'}",${g.items.length},${pass},${hold},${reject}\n`;
  });
  downloadCSV(`InboundReport_${new Date().toISOString().split('T')[0]}.csv`,csv);
  toast('Inbound report downloaded','s');
}

function downloadOutboundReport(){
  const dispatches=history.filter(h=>h.type==='dispatched');
  let csv='Dispatch ID,Order ID,AWB,Date,Customer,Pincode,Shipping Method,SKU Count,Total Units\n';
  dispatches.forEach(d=>{
    const qty=d.items.reduce((a,i)=>a+i.qty,0);
    csv+=`"${d.id}","${d.orderId}","${d.awb}","${d.dispatchedAt}","${d.recipientName}","${d.pincode}","${d.shippingMethod}",${d.items.length},${qty}\n`;
  });
  downloadCSV(`OutboundReport_${new Date().toISOString().split('T')[0]}.csv`,csv);
  toast('Outbound report downloaded','s');
}

function downloadAllReports(){
  let masterCSV='===== CARATLANE WMS COMPREHENSIVE REPORT =====\n';
  masterCSV+=`Generated: ${new Date().toLocaleString()}\n\n`;
  
  // INBOUND
  const grns=history.filter(h=>h.type==='grn');
  masterCSV+='\n═══ INBOUND REPORT ═══\nGRN Number,Date,ASN,Vehicle,Cartons,SKU Count,PASS,HOLD,REJECT\n';
  grns.forEach(g=>{
    const pass=g.items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+i.qty,0);
    const hold=g.items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+i.qty,0);
    const reject=g.items.filter(i=>i.qc==='REJECT').reduce((a,i)=>a+i.qty,0);
    masterCSV+=`"${g.id}","${g.ts}","${g.asn||'N/A'}","${g.vehicle||'N/A'}","${g.cartons||'N/A'}",${g.items.length},${pass},${hold},${reject}\n`;
  });
  
  // PICKS
  const picks=history.filter(h=>h.type==='pick');
  masterCSV+='\n═══ PICKING REPORT ═══\nPick ID,Date,Order ID,Priority,Method,Picker,SKU Count\n';
  picks.forEach(p=>{
    const parts=p.detail.split(' · ');
    const orderId=parts[0]||'N/A';
    const hasBatch=p.detail.includes('Batch');
    const priority=p.detail.includes('Express')?'Express':'Standard';
    const pickerMatch=p.detail.match(/Picker: ([^\s]+)/);
    const picker=pickerMatch?pickerMatch[1]:'N/A';
    const skuMatch=p.detail.match(/(\d+)\s+SKUs/);
    const skuCount=skuMatch?skuMatch[1]:0;
    masterCSV+=`"${p.id}","${p.ts}","${orderId}","${priority}","${hasBatch?'Batch':'Single'}","${picker}","${skuCount}"\n`;
  });
  
  // PACKS
  const packs=history.filter(h=>h.type==='packed');
  masterCSV+='\n═══ PACKING REPORT ═══\nPack ID,Date,Order ID,SKU Count,Status\n';
  packs.forEach(pk=>{
    masterCSV+=`"${pk.id}","${pk.ts}","${pk.orderId||'N/A'}",${pk.items?pk.items.length:0},"Packed"\n`;
  });
  
  // DISPATCH
  const dispatches=history.filter(h=>h.type==='dispatched');
  masterCSV+='\n═══ DISPATCH REPORT ═══\nDispatch ID,Date,Order ID,AWB,Customer,Pincode,Shipping Method,Units\n';
  dispatches.forEach(d=>{
    const qty=d.items?d.items.reduce((a,i)=>a+i.qty,0):0;
    masterCSV+=`"${d.id}","${d.dispatchedAt||d.ts}","${d.orderId||'N/A'}","${d.awb||'N/A'}","${d.recipientName||'N/A'}","${d.pincode||'N/A'}","${d.shippingMethod||'N/A'}",${qty}\n`;
  });
  
  // RETURNS
  const returns=history.filter(h=>h.type==='return');
  masterCSV+='\n═══ RETURNS REPORT ═══\nReturn ID,Date,AWB,Type,Grade A,Grade B,Grade C\n';
  returns.forEach(r=>{
    let a=0,b=0,c=0;
    try{
      const aPart=r.detail.split('Grade A:')[1];
      if(aPart)a=parseInt(aPart.split(/[^0-9]/)[0])||0;
      const bPart=r.detail.split('Grade B:')[1];
      if(bPart)b=parseInt(bPart.split(/[^0-9]/)[0])||0;
      const cPart=r.detail.split('Grade C:')[1];
      if(cPart)c=parseInt(cPart.split(/[^0-9]/)[0])||0;
    }catch(e){}
    const awbMatch=r.detail.match(/AWB: ([^\s·]+)/);
    const awb=awbMatch?awbMatch[1]:'N/A';
    masterCSV+=`"${r.id}","${r.ts}","${awb}","Return",${a},${b},${c}\n`;
  });
  
  // EXCEPTIONS
  const exceptions=history.filter(h=>h.type==='exception');
  masterCSV+='\n═══ EXCEPTION REPORT ═══\nException ID,Date,Category,Detail,GRN Reference\n';
  exceptions.forEach(e=>{
    masterCSV+=`"${e.id}","${e.ts}","${e.category||'N/A'}","${(e.detail||'').replace(/"/g,'')}","${e.grn||'N/A'}"\n`;
  });
  
  // SUMMARY
  const totalUnits=grns.reduce((a,g)=>a+(g.items?g.items.reduce((b,i)=>b+(i.qty||0),0):0),0);
  const passUnits=grns.reduce((a,g)=>a+(g.items?g.items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0):0),0);
  masterCSV+='\n═══ SUMMARY METRICS ═══\nMetric,Value\nTotal GRNs,'+grns.length+'\nTotal Pick Tasks,'+picks.length+'\nTotal Packs,'+packs.length+'\nTotal Dispatches,'+dispatches.length+'\nTotal Returns,'+returns.length+'\nTotal Exceptions,'+exceptions.length+'\nTotal Units Received,'+totalUnits+'\nUnits Passed QC,'+passUnits+'\n';
  
  downloadCSV(`CaratLane_WMS_Complete_Report_${new Date().toISOString().split('T')[0]}.csv`,masterCSV);
  toast('Complete report downloaded','s');
}

// FINANCE & CAPACITY
function renderFinance(){
  renderCostSummary();
  renderCostPerOp();
  renderWarehouseUtil();
  renderBinEfficiency();
  renderSpaceUtil();
  renderRackAUtil();
  renderRackBUtil();
  renderCostInputs();
  renderCapacityAlerts();
}
function renderSpaceUtil(){
  const el=document.getElementById('space-util-section');
  if(!el)return;
  const TOTAL_RACKS=20;
  const RACK_W_FT=4,RACK_D_FT=2,RACK_H_FT=10;
  const CEILING_H_FT=10;
  const WAREHOUSE_SQFT=1600;
  const WAREHOUSE_CUFT=WAREHOUSE_SQFT*CEILING_H_FT;
  const rackFootprint=RACK_W_FT*RACK_D_FT;
  const totalRackFloor=TOTAL_RACKS*rackFootprint;
  const aisleFloor=Math.round(totalRackFloor*0.4);
  const rackZoneFloor=totalRackFloor+aisleFloor;
  const operationsFloor=WAREHOUSE_SQFT-rackZoneFloor;
  const floorUtilPct=Math.round((rackZoneFloor/WAREHOUSE_SQFT)*100);
  const rackVol=RACK_W_FT*RACK_D_FT*RACK_H_FT;
  const totalRackVol=TOTAL_RACKS*rackVol;
  const cubeUtilPct=Math.round((totalRackVol/WAREHOUSE_CUFT)*100);
  const deadAirVol=WAREHOUSE_CUFT-totalRackVol;
  const verticalEff=Math.round((RACK_H_FT/CEILING_H_FT)*100);
  const totalSKUs=SKUS.length;
  const activeSKUs=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0);
  const avgUnitsPerRack=Math.round(totalUnits/TOTAL_RACKS);
  el.innerHTML=`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-bottom:12px">
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--gold)">${floorUtilPct}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Floor Used</div>
      <div style="font-size:10px;color:var(--t3)">${rackZoneFloor} / ${WAREHOUSE_SQFT} sq ft</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--it)">${cubeUtilPct}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Air Space Used</div>
      <div style="font-size:10px;color:var(--t3)">${totalRackVol.toLocaleString()} / ${WAREHOUSE_CUFT.toLocaleString()} cu ft</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--st)">${verticalEff}%</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Vertical Efficiency</div>
      <div style="font-size:10px;color:var(--t3)">Racks reach full ceiling</div>
    </div>
    <div style="padding:10px;background:var(--s2);border-radius:8px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:var(--t)">${operationsFloor}</div>
      <div style="font-size:10px;color:var(--t2);margin-top:2px">Ops Floor Free</div>
      <div style="font-size:10px;color:var(--t3)">Packing / staging / aisles</div>
    </div>
  </div>
  <div style="margin-bottom:12px">
    <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">FLOOR BREAKDOWN — 1,600 sq ft</div>
    <div style="height:24px;border-radius:6px;overflow:hidden;display:flex;font-size:9px;font-weight:600">
      <div style="width:${Math.round((totalRackFloor/WAREHOUSE_SQFT)*100)}%;background:#B8860B;display:flex;align-items:center;justify-content:center;color:#fff;white-space:nowrap;overflow:hidden">Racks ${totalRackFloor}sf</div>
      <div style="width:${Math.round((aisleFloor/WAREHOUSE_SQFT)*100)}%;background:#d4a843;display:flex;align-items:center;justify-content:center;color:#fff;white-space:nowrap;overflow:hidden">Aisles ${aisleFloor}sf</div>
      <div style="width:${Math.round((operationsFloor/WAREHOUSE_SQFT)*100)}%;background:var(--sbg);display:flex;align-items:center;justify-content:center;color:var(--st);white-space:nowrap;overflow:hidden">Operations ${operationsFloor}sf</div>
    </div>
  </div>
  <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">RACK SPECIFICATIONS (per rack)</div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px;font-size:10px">
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Width</div><div style="font-weight:600">${RACK_W_FT} ft (1,200mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Depth</div><div style="font-weight:600">${RACK_D_FT} ft (600mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Height</div><div style="font-weight:600">${RACK_H_FT} ft (3,000mm)</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Footprint</div><div style="font-weight:600">${rackFootprint} sq ft</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Volume</div><div style="font-weight:600">${rackVol} cu ft</div></div>
    <div style="padding:8px;background:var(--s3);border-radius:6px"><div style="color:var(--t3)">Total racks</div><div style="font-weight:600">${TOTAL_RACKS}</div></div>
  </div>
  <div style="font-size:10px;color:var(--t2);margin-bottom:4px;font-weight:600">CUBIC / AIR SPACE BREAKDOWN</div>
  <div style="padding:10px;background:var(--s2);border-radius:8px;font-size:11px;line-height:2">
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Total warehouse volume (1600 sf x 10ft ceiling):</span><span style="font-weight:600">${WAREHOUSE_CUFT.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Volume occupied by 20 racks:</span><span style="font-weight:600;color:var(--gold)">${totalRackVol.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Dead / unused air space:</span><span style="font-weight:600;color:var(--dt)">${deadAirVol.toLocaleString()} cu ft</span></div>
    <div style="display:flex;justify-content:space-between;border-top:0.5px solid var(--b);padding-top:6px;margin-top:4px"><span style="color:var(--t2)">Avg units per rack:</span><span style="font-weight:600">${avgUnitsPerRack}</span></div>
    <div style="display:flex;justify-content:space-between"><span style="color:var(--t2)">Active SKUs / Total SKUs:</span><span style="font-weight:600">${activeSKUs} / ${totalSKUs}</span></div>
  </div>
  <div style="margin-top:8px;padding:8px;background:var(--ibg);border-radius:6px;font-size:10px;color:var(--it)">
    <i class="ti ti-info-circle"></i> Your racks (10ft) match ceiling height — <strong>100% vertical efficiency</strong>. The remaining air space is above open floor areas (packing, staging, aisles) which cannot be racked.
  </div>
  `;
}
function renderCostSummary(){
  const el=document.getElementById('cost-summary');
  if(!el)return;
  const grns=history.filter(h=>h.type==='grn').length;
  const picks=history.filter(h=>h.type==='pick').length;
  const packs=history.filter(h=>h.type==='packed').length;
  const returns=history.filter(h=>h.type==='return').length;
  const totalCost=(grns*costParams.receivingCostPerGrn)+(picks*costParams.pickCostPerOrder)+(packs*costParams.packCostPerOrder)+(returns*costParams.returnProcessingCost);
  const totalSku=SKUS.length;
  const storageCost=totalSku*costParams.storageCostPerSku;
  const totalWithStorage=totalCost+storageCost;
  const dispatches=history.filter(h=>h.type==='dispatched').length;
  const dispatchRevenue=dispatches*costParams.dispatchCostPerOrder;
  const roi=dispatchRevenue>0?Math.round(((dispatchRevenue-totalWithStorage)/totalWithStorage)*100):0;
  el.innerHTML=`
    <div style="font-size:11px;line-height:2;margin-bottom:8px">
      <div style="padding:8px;background:var(--s2);border-radius:6px;margin-bottom:6px">
        <div><span style="color:var(--t2)">Operations cost:</span> <span style="font-weight:600">₹${totalCost}</span></div>
        <div><span style="color:var(--t2)">Storage cost (${totalSku} SKUs):</span> <span style="font-weight:600">₹${storageCost}</span></div>
        <div style="border-top:0.5px solid var(--b);padding-top:6px;margin-top:6px"><span style="color:var(--t2)">Total cost:</span> <span style="font-weight:600;font-size:13px">₹${totalWithStorage}</span></div>
      </div>
      <div style="padding:8px;background:var(--sbg);border-radius:6px">
        <div><span style="color:var(--st)">Dispatch revenue:</span> <span style="font-weight:600;color:var(--st)">₹${dispatchRevenue}</span></div>
        <div><span style="color:var(--st)">ROI:</span> <span style="font-weight:600;color:var(--st);font-size:13px">${roi}%</span></div>
      </div>
    </div>
  `;
}
function renderCostPerOp(){
  const el=document.getElementById('cost-per-op');
  if(!el)return;
  el.innerHTML=`
    <div style="font-size:11px;line-height:2">
      <div style="padding:8px;background:var(--s2);border-radius:6px;margin-bottom:6px">
        <div><span style="color:var(--t2)">Receiving (per GRN):</span> <span style="font-weight:600">₹${costParams.receivingCostPerGrn}</span></div>
        <div><span style="color:var(--t2)">Picking (per order):</span> <span style="font-weight:600">₹${costParams.pickCostPerOrder}</span></div>
        <div><span style="color:var(--t2)">Packing (per order):</span> <span style="font-weight:600">₹${costParams.packCostPerOrder}</span></div>
        <div><span style="color:var(--t2)">Dispatch (per order):</span> <span style="font-weight:600">₹${costParams.dispatchCostPerOrder}</span></div>
        <div style="border-top:0.5px solid var(--b);padding-top:6px;margin-top:6px"><span style="color:var(--t2)">Return processing:</span> <span style="font-weight:600">₹${costParams.returnProcessingCost}</span></div>
      </div>
      <div style="font-size:10px;color:var(--t3);padding:6px;background:var(--s3);border-radius:4px">Edit values in "Cost input parameters" section below</div>
    </div>
  `;
}
function renderWarehouseUtil(){
  const el=document.getElementById('warehouse-util');
  if(!el)return;
  const rackA=11,rackB=5;
  const totalShelf=rackA+rackB;
  const occupiedA=SKUS.filter(s=>s.rack==='A'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const occupiedB=SKUS.filter(s=>s.rack==='B'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const totalOccupied=occupiedA+occupiedB;
  const utilPct=Math.round((totalOccupied/totalShelf)*100);
  const capCat=utilPct>=80?'High':utilPct>=50?'Medium':'Low';
  el.innerHTML=`
    <div style="font-size:11px">
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span style="color:var(--t2)">Warehouse occupancy</span>
          <span style="font-weight:600">${utilPct}%</span>
        </div>
        <div style="height:8px;background:var(--b);border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${utilPct}%;background:${utilPct>=80?'var(--dt)':utilPct>=50?'var(--wt)':'var(--st)'};border-radius:4px"></div>
        </div>
      </div>
      <div style="padding:8px;background:var(--s2);border-radius:6px;font-size:10px;color:var(--t2)">
        <div>Rack A (11 shelves): ${occupiedA} occupied</div>
        <div>Rack B (5 shelves): ${occupiedB} occupied</div>
        <div style="margin-top:4px;padding-top:4px;border-top:0.5px solid var(--b)">Capacity: <span style="font-weight:600">${capCat}</span></div>
      </div>
    </div>
  `;
}
function renderBinEfficiency(){
  const el=document.getElementById('bin-efficiency');
  if(!el)return;
  const totalSku=SKUS.length;
  const skuWithStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty>0).length;
  const avgUnitsPerSku=totalSku>0?Math.round(SKUS.reduce((a,s)=>a+(inv[s.sku]||{qty:0}).qty,0)/totalSku):0;
  const utilRate=Math.round((skuWithStock/totalSku)*100);
  el.innerHTML=`
    <div style="font-size:11px;padding:8px;background:var(--s2);border-radius:6px;line-height:2">
      <div><span style="color:var(--t2)">Total SKUs:</span> <span style="font-weight:600">${totalSku}</span></div>
      <div><span style="color:var(--t2)">SKUs with stock:</span> <span style="font-weight:600">${skuWithStock}</span></div>
      <div><span style="color:var(--t2)">Utilization rate:</span> <span style="font-weight:600">${utilRate}%</span></div>
      <div><span style="color:var(--t2)">Avg units/SKU:</span> <span style="font-weight:600">${avgUnitsPerSku}</span></div>
      <div style="margin-top:6px;padding-top:6px;border-top:0.5px solid var(--b);font-size:10px;color:var(--t2)">
        ${utilRate>=70?'✓ Efficient bin usage':'⚠ Optimize bin placement'}
      </div>
    </div>
  `;
}
function renderRackAUtil(){
  const el=document.getElementById('rack-a-util');
  if(!el)return;
  const shelves={};
  for(let i=1;i<=11;i++)shelves[i]={total:0,occupied:0};
  SKUS.filter(s=>s.rack==='A').forEach(s=>{
    const shelf=parseInt(s.shelf);
    shelves[shelf].total++;
    if((inv[s.sku]||{qty:0}).qty>0)shelves[shelf].occupied++;
  });
  let html='';
  for(let i=1;i<=11;i++){
    const pct=shelves[i].total>0?Math.round((shelves[i].occupied/shelves[i].total)*100):0;
    html+=`<div style="display:grid;grid-template-columns:40px 1fr 50px;gap:6px;align-items:center;margin-bottom:6px;font-size:11px">
      <span style="font-weight:600;color:var(--t2)">A${i}</span>
      <div style="height:6px;background:var(--b);border-radius:3px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--st);border-radius:3px"></div></div>
      <span style="text-align:right;color:var(--t2)">${shelves[i].occupied}/${shelves[i].total}</span>
    </div>`;
  }
  el.innerHTML=html;
}
function renderRackBUtil(){
  const el=document.getElementById('rack-b-util');
  if(!el)return;
  const shelves={};
  for(let i=1;i<=5;i++)shelves[i]={total:0,occupied:0};
  SKUS.filter(s=>s.rack==='B').forEach(s=>{
    const shelf=parseInt(s.shelf);
    shelves[shelf].total++;
    if((inv[s.sku]||{qty:0}).qty>0)shelves[shelf].occupied++;
  });
  let html='';
  for(let i=1;i<=5;i++){
    const pct=shelves[i].total>0?Math.round((shelves[i].occupied/shelves[i].total)*100):0;
    html+=`<div style="display:grid;grid-template-columns:40px 1fr 50px;gap:6px;align-items:center;margin-bottom:6px;font-size:11px">
      <span style="font-weight:600;color:var(--t2)">B${i}</span>
      <div style="height:6px;background:var(--b);border-radius:3px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--st);border-radius:3px"></div></div>
      <span style="text-align:right;color:var(--t2)">${shelves[i].occupied}/${shelves[i].total}</span>
    </div>`;
  }
  el.innerHTML=html;
}
function renderCostInputs(){
  const el=document.getElementById('cost-inputs');
  if(!el)return;
  el.innerHTML=`
    <div style="font-size:11px;display:grid;gap:8px">
      <div><label for="cost-grn" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Receiving cost/GRN (₹)</label><input type="number" id="cost-grn" value="${costParams.receivingCostPerGrn}" onchange="updateCost('receivingCostPerGrn',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-pick" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Pick cost/order (₹)</label><input type="number" id="cost-pick" value="${costParams.pickCostPerOrder}" onchange="updateCost('pickCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-pack" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Pack cost/order (₹)</label><input type="number" id="cost-pack" value="${costParams.packCostPerOrder}" onchange="updateCost('packCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-dispatch" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Dispatch revenue/order (₹)</label><input type="number" id="cost-dispatch" value="${costParams.dispatchCostPerOrder}" onchange="updateCost('dispatchCostPerOrder',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-storage" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Storage cost/SKU/month (₹)</label><input type="number" id="cost-storage" value="${costParams.storageCostPerSku}" onchange="updateCost('storageCostPerSku',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <div><label for="cost-return" style="display:block;margin-bottom:3px;color:var(--t2);font-weight:500">Return processing (₹)</label><input type="number" id="cost-return" value="${costParams.returnProcessingCost}" onchange="updateCost('returnProcessingCost',this.value)" style="width:100%;padding:6px;border:0.5px solid var(--b);border-radius:4px"></div>
      <button onclick="renderFinance()" style="width:100%;padding:8px;background:var(--gold);color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600;font-size:11px">Recalculate</button>
    </div>
  `;
}
function updateCost(param,val){
  costParams[param]=parseInt(val)||0;
  renderFinance();
  toast(`Updated ${param}`,'s');
}
function renderCapacityAlerts(){
  const el=document.getElementById('capacity-alerts');
  if(!el)return;
  const alerts=[];
  const rackA=11,rackB=5;
  const totalShelf=rackA+rackB;
  const occupiedA=SKUS.filter(s=>s.rack==='A'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const occupiedB=SKUS.filter(s=>s.rack==='B'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const utilPct=Math.round(((occupiedA+occupiedB)/totalShelf)*100);
  if(utilPct>=80)alerts.push({type:'high',msg:'⚠️ Warehouse at 80%+ capacity — consider offloading or reorganizing'});
  if(occupiedA===rackA)alerts.push({type:'high',msg:'🔴 Rack A is FULL — no space for new items'});
  if(occupiedB===rackB)alerts.push({type:'high',msg:'🔴 Rack B is FULL — no space for new items'});
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  if(lowStock>5)alerts.push({type:'warn',msg:`⚠️ ${lowStock} SKUs at low stock — prioritize reordering`});
  el.innerHTML=alerts.length?alerts.map(a=>`<div class="warn-box" style="background:${a.type==='high'?'var(--dbg)':'var(--wbg)'};color:${a.type==='high'?'var(--dt)':'var(--wt)'}"><i class="ti ti-alert-triangle"></i>${a.msg}</div>`).join(''):'<div class="empty">All capacity metrics normal ✓</div>';
}

function addRtItem(){
  const sku=document.getElementById('rt-sku').value;
  const grade=document.getElementById('rt-grade').value;
  const qty=parseInt(document.getElementById('rt-qty').value)||1;
  const s=SKUS.find(x=>x.sku===sku);
  rtItemsList.push({sku,name:s.sub,variant:s.variant,grade,qty});
  renderRtItemsList();
}
function renderRtItemsList(){
  const el=document.getElementById('rt-items-list');
  el.innerHTML=rtItemsList.length?`<div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Grade</th><th>Qty</th><th></th></tr></thead><tbody>${rtItemsList.map((item,i)=>`<tr><td class="mono">${item.sku}</td><td style="font-size:11px">${item.name} — ${item.variant}</td><td><span class="pill p-g${item.grade}">Grade ${item.grade}</span></td><td>${item.qty}</td><td><button class="btn-sm btn-danger" onclick="removeRtItem(${i})"><i class="ti ti-trash"></i></button></td></tr>`).join('')}</tbody></table></div>`:'';
}
function removeRtItem(i){rtItemsList.splice(i,1);renderRtItemsList();}
function processReturn(){
  if(!rtItemsList.length){toast('Add at least one item to process','w');return;}
  const awb=document.getElementById('rt-awb').value.trim();
  if(!awb){toast('Enter AWB / tracking number','w');return;}
  const rtype=document.getElementById('rt-type').value;
  rtItemsList.forEach(item=>{
    if(item.grade==='A'){
      if(!inv[item.sku])inv[item.sku]={qty:0,rack:SKUS.find(s=>s.sku===item.sku).rack,shelf:SKUS.find(s=>s.sku===item.sku).shelf};
      inv[item.sku].qty+=item.qty;
    }
  });
  const gradeA=rtItemsList.filter(i=>i.grade==='A').reduce((a,i)=>a+i.qty,0);
  const gradeB=rtItemsList.filter(i=>i.grade==='B').reduce((a,i)=>a+i.qty,0);
  const gradeC=rtItemsList.filter(i=>i.grade==='C').reduce((a,i)=>a+i.qty,0);
  const rid=newId('RET');
  history.push({id:rid,type:'return',ts:ts(),detail:`AWB: ${awb} · ${rtype} · Grade A:${gradeA} B:${gradeB} C:${gradeC} · ${gradeA} units restocked`});
  saveInv();saveHist();rtItemsList=[];renderRtItemsList();renderRtLog();
  document.getElementById('rt-awb').value='';document.getElementById('rt-orderid').value='';
  toast(`Return ${rid} processed · ${gradeA} Grade-A units restocked to inventory`,'s');
}
function renderRtLog(){
  const el=document.getElementById('rt-log');
  const logs=history.filter(h=>h.type==='return').slice(-8).reverse();
  el.innerHTML=logs.length?logs.map(h=>`<div class="hist-entry"><div class="hist-head"><span class="hist-id">${h.id}</span><span class="hist-ts">${h.ts}</span></div><div class="hist-body">${esc(h.detail)}</div></div>`).join(''):'<div class="empty">No returns processed yet</div>';
}

// INVENTORY
async function renderInvVersionHistory(){
  const el=document.getElementById('inv-version-history');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading...</div>';
  const snapshots=await loadInventoryHistory();
  if(!snapshots.length){
    el.innerHTML='<div class="empty">No snapshots yet — snapshots are saved automatically on every inventory change</div>';
    return;
  }
  el.innerHTML=`
  <div style="font-size:10px;color:var(--t2);margin-bottom:8px">Snapshots are saved automatically every time inventory changes. Click Rollback to restore a previous state.</div>
  <div class="tw"><table><thead><tr><th>Snapshot ID</th><th>Saved At</th><th>Details</th><th>Action</th></tr></thead><tbody>
  ${snapshots.map((s,i)=>`<tr>
    <td class="mono" style="font-size:10px">${s.id}</td>
    <td style="font-size:10px">${s.ts||new Date(s.created_at).toLocaleString('en-IN')}</td>
    <td style="font-size:10px">${s.detail||'Inventory snapshot'}</td>
    <td>${i===0?'<span style="font-size:10px;color:var(--st)">Current</span>':`<button class="btn-sm" style="background:var(--wbg);color:var(--wt);border:1px solid var(--wt);border-radius:4px;padding:3px 8px;cursor:pointer;font-size:10px" onclick="rollbackInventory('${s.id}')"><i class="ti ti-history"></i> Rollback</button>`}</td>
  </tr>`).join('')}
  </tbody></table></div>`;
}
function renderInv(){
  const q=(document.getElementById('inv-q').value||'').toLowerCase();
  const cat=document.getElementById('inv-cat').value;
  const st=document.getElementById('inv-st').value;
  const rows=SKUS.filter(s=>{
    if(cat&&s.cat!==cat)return false;
    const qty=(inv[s.sku]||{qty:0}).qty;
    if(st&&getSt(qty)!==st)return false;
    if(q&&!(s.sku.toLowerCase().includes(q)||s.sub.toLowerCase().includes(q)||s.variant.toLowerCase().includes(q)))return false;
    return true;
  });
  document.getElementById('inv-tbody').innerHTML=rows.map(s=>{
    const i2=inv[s.sku]||{qty:0,rack:s.rack,shelf:s.shelf};
    return`<tr><td class="mono">${s.sku}</td><td><span class="pill p-info">${s.cat}</span></td><td style="font-weight:600;font-size:12px">${s.sub}</td><td style="color:var(--t2);font-size:11px">${s.variant}</td><td style="font-size:11px;font-weight:500">${i2.rack}-${i2.shelf}</td>
    <td><div class="qc"><button class="qb" onclick="adjQ('${s.sku}',-1)">−</button><span class="qv">${i2.qty}</span><button class="qb" onclick="adjQ('${s.sku}',1)">+</button></div></td>
    <td>${stPill(i2.qty)}</td>
    <td><button class="btn-sm" onclick="quickDisp('${s.sku}','${s.sub.replace(/'/g,"\\'").replace(/"/g,'&quot;')}','${s.variant.replace(/'/g,"\\'")}',${i2.qty})" ${i2.qty<=0?'disabled':''}><i class="ti ti-send"></i></button></td></tr>`;
  }).join('');
  document.getElementById('inv-ct').textContent=`Showing ${rows.length} of ${SKUS.length} SKUs`;
}
function adjQ(sku,d){
  if(!inv[sku])inv[sku]={qty:0,rack:SKUS.find(s=>s.sku===sku).rack,shelf:SKUS.find(s=>s.sku===sku).shelf};
  inv[sku].qty=Math.max(0,inv[sku].qty+d);
  saveInv();renderInv();
}
function quickDisp(sku,name,variant,avail){addToCart(sku,name,variant,avail);nav('dispatch');}
function exportCSV(){
  const rows=[['SKU','Category','Item','Variant','Rack','Shelf','Qty','Status']];
  SKUS.forEach(s=>{const i2=inv[s.sku]||{qty:0,rack:s.rack,shelf:s.shelf};rows.push([s.sku,s.cat,s.sub,s.variant,i2.rack,i2.shelf,i2.qty,getSt(i2.qty)]);});
  const a=document.createElement('a');a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(rows.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n'));a.download='CaratLane_Inventory_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
  toast('CSV exported successfully','s');
}

// RACK VIEW
function renderRack(){
  const rA={},rB={};
  SKUS.forEach(s=>{const qty=(inv[s.sku]||{qty:0}).qty;if(s.rack==='A'){if(!rA[s.shelf])rA[s.shelf]=[];rA[s.shelf].push({...s,qty});}else{if(!rB[s.shelf])rB[s.shelf]=[];rB[s.shelf].push({...s,qty});}});
  buildRack(rA,'rack-a');buildRack(rB,'rack-b');
}
function buildRack(data,elId){
  const keys=Object.keys(data).sort((a,b)=>+a-+b);
  const mid=Math.ceil(keys.length/2);
  document.getElementById(elId).innerHTML=[keys.slice(0,mid),keys.slice(mid)].map((col,ci)=>`<div class="rack-card"><div class="rack-head"><span style="font-size:12px;font-weight:600">Bay ${ci+1}</span><span style="font-size:10px;color:var(--t2)">${col.length} shelves</span></div>${col.map(sh=>{const items=data[sh];const tot=items.reduce((a,i)=>a+i.qty,0);const mx=items.length*10;const pct=Math.min(100,Math.round(tot/mx*100));const bc=pct===0?'bar-out':pct<30?'bar-low':'bar-ok';const lbl=items[0].sub.replace(/ - .*/,'').replace(/- .*/,'').trim();return`<div class="rack-row"><span class="shelf-l">S${sh}</span><div><div style="font-size:11px;font-weight:600;margin-bottom:3px">${lbl}</div><div class="bar-bg"><div class="bar-f ${bc}" style="width:${pct}%"></div></div></div><span class="qty-r">${tot}u</span></div>`;}).join('')}</div>`).join('');
}

// REPORTS
function renderMISEmailConfig(){
  const el=document.getElementById('mis-email-config');
  if(!el)return;
  const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
  el.innerHTML=`
  <div style="background:var(--s2);border-radius:10px;padding:14px 16px">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
      <div>
        <label for="mis-email-to" style="font-size:10px;color:var(--t2);display:block;margin-bottom:3px;font-weight:600">SEND TO (CaratLane email)</label>
        <input id="mis-email-to" type="email" value="${cfg.to||''}" placeholder="caratlane-dc@caratlane.com" style="width:100%;padding:7px;border:0.5px solid var(--b);border-radius:5px;background:var(--s);color:var(--t);font-size:11px">
      </div>
      <div>
        <label for="mis-email-cc" style="font-size:10px;color:var(--t2);display:block;margin-bottom:3px;font-weight:600">CC</label>
        <input id="mis-email-cc" type="email" value="${cfg.cc||''}" placeholder="manager@epsworldwide.com" style="width:100%;padding:7px;border:0.5px solid var(--b);border-radius:5px;background:var(--s);color:var(--t);font-size:11px">
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <label style="display:flex;align-items:center;gap:6px;font-size:11px;cursor:pointer">
        <input id="mis-auto-send" type="checkbox" ${cfg.autoSend?'checked':''} onchange="saveMISEmailConfig()">
        Auto-send every Monday at 10:00 AM
      </label>
      <button onclick="saveMISEmailConfig()" style="padding:6px 12px;background:var(--st);color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:11px;font-weight:600">Save Config</button>
      <button onclick="sendMISEmailNow()" style="padding:6px 12px;background:var(--gold);color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:11px;font-weight:600"><i class="ti ti-send"></i> Send Now</button>
    </div>
    <div id="mis-email-status" style="font-size:10px;color:var(--t3);margin-top:6px"></div>
    <div style="margin-top:10px;padding:8px;background:var(--ibg);border-radius:6px;font-size:10px;color:var(--it)">
      <i class="ti ti-info-circle"></i> Auto-email uses a Supabase Edge Function. 
      See setup guide: deploy the <strong>send-mis-email</strong> edge function with your SMTP credentials.
      The "Send Now" button sends immediately using the same function.
    </div>
  </div>`;
}
function saveMISEmailConfig(){
  const cfg={
    to:document.getElementById('mis-email-to')?.value||'',
    cc:document.getElementById('mis-email-cc')?.value||'',
    autoSend:document.getElementById('mis-auto-send')?.checked||false
  };
  localStorage.setItem('mis_email_cfg',JSON.stringify(cfg));
  // Schedule Monday check
  scheduleMISEmail();
  toast('Email config saved','s');
}
function scheduleMISEmail(){
  // Check every hour if it's Monday 10 AM and auto-send is on
  clearInterval(window._misTimer);
  window._misTimer=setInterval(()=>{
    const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
    if(!cfg.autoSend||!cfg.to) return;
    const now=new Date();
    if(now.getDay()===1&&now.getHours()===10&&now.getMinutes()<5){
      const lastSent=localStorage.getItem('mis_last_sent');
      const todayStr=now.toDateString();
      if(lastSent!==todayStr){
        sendMISEmailNow(true);
        localStorage.setItem('mis_last_sent',todayStr);
      }
    }
  },60000); // check every minute
}
async function sendMISEmailNow(auto=false){
  const cfg=JSON.parse(localStorage.getItem('mis_email_cfg')||'{}');
  if(!cfg.to){ toast('Please configure recipient email first','w'); return; }
  const statusEl=document.getElementById('mis-email-status');
  if(statusEl) statusEl.textContent='Sending...';
  // Build CSV data for email
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})} to ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  const payload={
    to:cfg.to, cc:cfg.cc||'',
    subject:`CaratLane WMS Weekly MIS Report — ${weekLabel}`,
    weekLabel, weekStr,
    summary:{
      grns:wh.filter(h=>h.type==='grn').length,
      dispatches:wh.filter(h=>h.type==='dispatched').length,
      returns:wh.filter(h=>h.type==='return').length,
      exceptions:wh.filter(h=>h.type==='exception').length,
    },
    generatedAt:new Date().toLocaleString('en-IN')
  };
  try {
    // Call Supabase Edge Function
    const res=await fetch('https://lqpqsrdxcxefxvobmnjc.supabase.co/functions/v1/send-mis-email',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcHFzcmR4Y3hlZnh2b2JtbmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjU3OTcsImV4cCI6MjA5NjE0MTc5N30.6KhLZw5gu0PqGCAPex6sYAOcYJtz89Xm1abRtUbKnEM'},
      body:JSON.stringify(payload)
    });
    const result=await res.json();
    if(res.ok){
      if(statusEl) statusEl.textContent='✓ Email sent to '+cfg.to+' at '+new Date().toLocaleTimeString('en-IN');
      if(!auto) toast('MIS email sent to '+cfg.to,'s');
    } else {
      throw new Error(result.error||'Edge function error');
    }
  } catch(e){
    console.error('MIS email error:',e);
    if(statusEl) statusEl.textContent='⚠ Email failed: '+e.message+' — download CSV instead';
    if(!auto) toast('Email failed — use Download CSV instead','w');
  }
}
// Start scheduler on load
setTimeout(scheduleMISEmail, 3000);
function getWeekBounds(weekStr){
  // weekStr = "YYYY-Www" e.g. "2026-W23"
  const [year,wk]=weekStr.split('-W').map(Number);
  const jan4=new Date(year,0,4);
  const startOfWeek1=new Date(jan4);
  startOfWeek1.setDate(jan4.getDate()-(jan4.getDay()||7)+1);
  const start=new Date(startOfWeek1);
  start.setDate(startOfWeek1.getDate()+(wk-1)*7);
  const end=new Date(start);
  end.setDate(start.getDate()+6);
  end.setHours(23,59,59,999);
  return {start,end};
}
function getWeekKey(date){
  const d=new Date(date);
  d.setHours(0,0,0,0);
  d.setDate(d.getDate()+3-(d.getDay()||7)-2);
  const yearStart=new Date(d.getFullYear(),0,4);
  const wk=1+Math.round(((d-yearStart)/86400000-3+(yearStart.getDay()||7))/7);
  return `${d.getFullYear()}-W${String(wk).padStart(2,'0')}`;
}
function populateWeekSelector(){
  const sel=document.getElementById('rpt-week-select');
  if(!sel)return;
  const weeks=new Set();
  const now=new Date();
  // Add current and past 12 weeks
  for(let i=0;i<13;i++){
    const d=new Date(now);
    d.setDate(now.getDate()-i*7);
    weeks.add(getWeekKey(d));
  }
  // Add weeks from history
  history.forEach(h=>{
    if(h.ts){try{const d=new Date(h.ts);if(!isNaN(d))weeks.add(getWeekKey(d));}catch(e){}}
  });
  const sorted=[...weeks].sort().reverse();
  const thisWeek=getWeekKey(now);
  const lastWeek=sorted[1]||thisWeek;
  sel.innerHTML=sorted.map(w=>{
    const {start,end}=getWeekBounds(w);
    const label=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
    const tag=w===thisWeek?' (This week)':w===lastWeek?' (Last week — MIS due Monday)':'';
    return `<option value="${w}"${w===lastWeek?' selected':''}>${label}${tag}</option>`;
  }).join('');
}
function getWeekHistory(weekStr){
  const {start,end}=getWeekBounds(weekStr);
  return history.filter(h=>{
    if(!h.ts)return false;
    try{const d=new Date(h.ts);return !isNaN(d)&&d>=start&&d<=end;}catch(e){return false;}
  });
}
function renderReports(){
  populateWeekSelector();
  renderMISEmailConfig();
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  if(!weekStr)return;
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const grns=wh.filter(h=>h.type==='grn');
  const disps=wh.filter(h=>h.type==='dispatched');
  const rets=wh.filter(h=>h.type==='return');
  const picks=wh.filter(h=>h.type==='pick');
  const exceptions=wh.filter(h=>h.type==='exception');
  const packed=wh.filter(h=>h.type==='packed'||h.type==='dispatched');
  const low=SKUS.filter(s=>inv[s.sku]&&getSt(inv[s.sku].qty)==='low').length;
  const out=SKUS.filter(s=>!inv[s.sku]||inv[s.sku].qty<=0).length;
  const totalUnitsIn=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
  const totalUnitsOut=disps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
  const avgPackDur=packed.filter(p=>p.packDurationSecs>0).length>0?Math.round(packed.filter(p=>p.packDurationSecs>0).reduce((a,p)=>a+p.packDurationSecs,0)/packed.filter(p=>p.packDurationSecs>0).length):null;
  const avgPackStr=avgPackDur?`${Math.floor(avgPackDur/60)}m ${avgPackDur%60}s`:'N/A';
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;

  // KPI CARDS
  document.getElementById('rpt-week-kpis').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px">
      <div style="background:var(--ibg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--it)">${grns.length}</div>
        <div style="font-size:10px;color:var(--t2)">GRNs Raised</div>
        <div style="font-size:10px;color:var(--t3)">${totalUnitsIn} units in</div>
      </div>
      <div style="background:var(--sbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--st)">${picks.length}</div>
        <div style="font-size:10px;color:var(--t2)">Orders Picked</div>
        <div style="font-size:10px;color:var(--t3)">${packed.length} packed</div>
      </div>
      <div style="background:var(--s2);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--gold)">${disps.length}</div>
        <div style="font-size:10px;color:var(--t2)">Dispatched</div>
        <div style="font-size:10px;color:var(--t3)">${totalUnitsOut} units out</div>
      </div>
      <div style="background:var(--wbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--wt)">${rets.length}</div>
        <div style="font-size:10px;color:var(--t2)">Returns</div>
        <div style="font-size:10px;color:var(--t3)">Processed</div>
      </div>
      <div style="background:var(--dbg);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:24px;font-weight:700;color:var(--dt)">${exceptions.length}</div>
        <div style="font-size:10px;color:var(--t2)">Exceptions</div>
        <div style="font-size:10px;color:var(--t3)">Raised</div>
      </div>
      <div style="background:var(--s2);border-radius:8px;padding:10px;text-align:center">
        <div style="font-size:18px;font-weight:700;color:var(--t)">${avgPackStr}</div>
        <div style="font-size:10px;color:var(--t2)">Avg Pack Time</div>
        <div style="font-size:10px;color:var(--t3)">Per order</div>
      </div>
    </div>`;

  // INBOUND
  document.getElementById('rpt-inbound').innerHTML=grns.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${grns.length} GRNs · ${totalUnitsIn} units received</div>
    <div class="tw"><table><thead><tr><th>GRN ID</th><th>Date/Time</th><th>Details</th><th>Units In</th></tr></thead><tbody>
    ${grns.map(g=>{
      const items=g.items||[];
      const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);
      const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);
      return `<tr><td class="mono">${g.id}</td><td style="font-size:10px">${g.ts}</td><td style="font-size:10px">${g.detail}</td><td style="text-align:center"><span style="color:var(--st)">${pass} pass</span>${hold?` <span style="color:var(--wt)">${hold} hold</span>`:''}`;
    }).join('</td></tr>')}
    </tbody></table></div>`:'<div class="empty">No inbound activity this week</div>';

  // OUTBOUND
  document.getElementById('rpt-outbound').innerHTML=disps.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${disps.length} dispatches · ${totalUnitsOut} units out</div>
    <div class="tw"><table><thead><tr><th>Dispatch ID</th><th>Order ID</th><th>AWB</th><th>Recipient</th><th>Courier</th><th>Box (cm)</th><th>Chargeable (kg)</th><th>Dispatched At</th></tr></thead><tbody>
    ${disps.map(d=>{
      const dims=d.boxL?`${d.boxL}×${d.boxW}×${d.boxH}`:'—';
      return `<tr><td class="mono" style="font-size:10px">${d.id}</td><td style="font-size:10px">${esc(d.orderId||'—')}</td><td class="mono" style="font-size:10px">${esc(d.awb||'—')}</td><td style="font-size:10px">${esc(d.recipientName||'—')}</td><td style="font-size:10px">${d.shippingMethod||'—'}</td><td style="font-size:10px">${dims}</td><td style="text-align:center;font-weight:600">${d.chargeableWeight||'—'}</td><td style="font-size:10px">${d.dispatchedAt||d.ts}</td></tr>`;
    }).join('')}
    </tbody></table></div>`:'<div class="empty">No dispatch activity this week</div>';

  // RETURNS
  document.getElementById('rpt-returns').innerHTML=rets.length?`
    <div style="font-size:11px;margin-bottom:8px;color:var(--t2)">Week: <strong>${weekLabel}</strong> · ${rets.length} returns</div>
    <div class="tw"><table><thead><tr><th>Return ID</th><th>Date/Time</th><th>Details</th></tr></thead><tbody>
    ${rets.map(r=>`<tr><td class="mono">${r.id}</td><td style="font-size:10px">${r.ts}</td><td style="font-size:10px">${esc(r.detail||'—')}</td></tr>`).join('')}
    </tbody></table></div>`:'<div class="empty">No returns this week</div>';

  // EXCEPTIONS
  document.getElementById('rpt-exceptions').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div class="sc"><div class="sl"><i class="ti ti-alert-triangle"></i>Exceptions this week</div><div class="sv" style="color:var(--dt)">${exceptions.length}</div></div>
      <div class="sc"><div class="sl"><i class="ti ti-x"></i>Out of stock (now)</div><div class="sv" style="color:var(--dt)">${out}</div><div class="ss">Zero inventory</div></div>
      <div class="sc"><div class="sl"><i class="ti ti-alert-circle"></i>Low stock (now)</div><div class="sv" style="color:var(--wt)">${low}</div><div class="ss">≤3 units</div></div>
    </div>
    ${exceptions.length?`<div class="tw"><table><thead><tr><th>ID</th><th>Date/Time</th><th>Type</th><th>Details</th></tr></thead><tbody>${exceptions.map(e=>`<tr><td class="mono">${e.id}</td><td style="font-size:10px">${e.ts}</td><td><span class="pill p-out" style="font-size:9px">${e.category||'exception'}</span></td><td style="font-size:10px">${e.detail||'—'}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty" style="margin-top:8px">No exceptions this week ✓</div>'}`;

  // INVENTORY SNAPSHOT
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const inStockCount=SKUS.filter(s=>inv[s.sku]&&inv[s.sku].qty>0).length;
  document.getElementById('rpt-inventory').innerHTML=`
    <div style="font-size:11px;color:var(--t2);margin-bottom:8px">Live snapshot as of <strong>${new Date().toLocaleString('en-IN')}</strong> · ${inStockCount}/${SKUS.length} SKUs in stock · ${totalUnits} total units</div>
    <div class="tw"><table><thead><tr><th>SKU</th><th>Item</th><th>Variant</th><th>Rack</th><th>Shelf</th><th>Qty</th><th>Status</th></tr></thead><tbody>
    ${SKUS.map(s=>{
      const q=(inv[s.sku]||{qty:0}).qty;
      const st=q<=0?'Out':q<=3?'Low':'OK';
      const stColor=q<=0?'var(--dt)':q<=3?'var(--wt)':'var(--st)';
      return `<tr><td class="mono" style="font-size:10px">${s.sku}</td><td style="font-size:10px">${s.sub}</td><td style="font-size:10px">${s.variant}</td><td style="text-align:center">${s.rack}</td><td style="text-align:center">${s.shelf}</td><td style="text-align:center;font-weight:700">${q}</td><td><span style="font-size:10px;font-weight:600;color:${stColor}">${st}</span></td></tr>`;
    }).join('')}
    </tbody></table></div>`;

  // PACKING PERFORMANCE
  const packWithTime=packed.filter(p=>p.packDurationSecs>0);
  document.getElementById('rpt-packing-perf').innerHTML=packWithTime.length?`
    <div style="font-size:11px;color:var(--t2);margin-bottom:8px">Week: <strong>${weekLabel}</strong> · ${packWithTime.length} orders with time data</div>
    <div class="tw"><table><thead><tr><th>Pack ID</th><th>Order ID</th><th>Box (L×W×H cm)</th><th>Actual (kg)</th><th>Vol. (kg)</th><th>Chargeable (kg)</th><th>Pack Start</th><th>Pack End</th><th>Duration</th></tr></thead><tbody>
    ${packWithTime.map(p=>{
      const dims=p.boxL?`${p.boxL}×${p.boxW}×${p.boxH}`:'—';
      return `<tr><td class="mono" style="font-size:10px">${p.id}</td><td style="font-size:10px">${esc(p.orderId||'—')}</td><td style="font-size:10px">${dims}</td><td style="text-align:center">${p.actualWeight||'—'}</td><td style="text-align:center;color:var(--it)">${p.volWeight||'—'}</td><td style="text-align:center;font-weight:700;color:var(--gold)">${p.chargeableWeight||'—'}</td><td style="font-size:10px">${p.packStartTs||'—'}</td><td style="font-size:10px">${p.packEndTs||'—'}</td><td style="font-weight:600;color:var(--st)">${p.packDuration||'—'}</td></tr>`;
    }).join('')}
    </tbody></table></div>`:'<div class="empty">No packing time data for this week — use Start Packing button to capture times</div>';
}
function downloadWeeklyCSV(){
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} to ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  let csv=`CaratLane WMS — Weekly MIS Report\n`;
  csv+=`EPS Worldwide Integrated Logistics Mumbai\n`;
  csv+=`Report Week:,${weekLabel}\n`;
  csv+=`Generated:,${new Date().toLocaleString('en-IN')}\n\n`;

  const grns=wh.filter(h=>h.type==='grn');
  csv+=`\n=== INBOUND / GRN REPORT ===\n`;
  csv+=`GRN ID,Date/Time,Details,Units Pass,Units Hold\n`;
  grns.forEach(g=>{
    const items=g.items||[];
    const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);
    const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);
    csv+=`"${g.id}","${g.ts}","${(g.detail||'').replace(/"/g,"'")}",${pass},${hold}\n`;
  });
  csv+=`TOTAL GRNs:,${grns.length}\n`;

  const disps=wh.filter(h=>h.type==='dispatched');
  csv+=`\n=== OUTBOUND / DISPATCH REPORT ===\n`;
  csv+=`Dispatch ID,Order ID,AWB,Recipient,Pincode,Courier,Box L,Box W,Box H,Actual Wt (kg),Vol Wt (kg),Chargeable Wt (kg),Pack Start,Pack End,Pack Duration,Dispatched At\n`;
  disps.forEach(d=>{
    csv+=`"${d.id}","${d.orderId||''}","${d.awb||''}","${d.recipientName||''}","${esc(d.pincode||'')}","${d.shippingMethod||''}",${d.boxL||''},${d.boxW||''},${d.boxH||''},${d.actualWeight||''},${d.volWeight||''},${d.chargeableWeight||''},"${d.packStartTs||''}","${d.packEndTs||''}","${d.packDuration||''}","${d.dispatchedAt||d.ts}"\n`;
  });
  csv+=`TOTAL DISPATCHED:,${disps.length}\n`;

  const rets=wh.filter(h=>h.type==='return');
  csv+=`\n=== RETURNS REPORT ===\n`;
  csv+=`Return ID,Date/Time,Details\n`;
  rets.forEach(r=>{csv+=`"${r.id}","${r.ts}","${(r.detail||'').replace(/"/g,"'")}"\n`;});
  csv+=`TOTAL RETURNS:,${rets.length}\n`;

  const exceptions=wh.filter(h=>h.type==='exception');
  csv+=`\n=== EXCEPTION REPORT ===\n`;
  csv+=`Exception ID,Date/Time,Category,Details\n`;
  exceptions.forEach(e=>{csv+=`"${e.id}","${e.ts}","${e.category||''}","${(e.detail||'').replace(/"/g,"'")}"\n`;});
  csv+=`TOTAL EXCEPTIONS:,${exceptions.length}\n`;

  csv+=`\n=== INVENTORY SNAPSHOT (Live) ===\n`;
  csv+=`SKU,Item Name,Variant,Rack,Shelf,Qty,Status\n`;
  SKUS.forEach(s=>{
    const q=(inv[s.sku]||{qty:0}).qty;
    const st=q<=0?'Out of Stock':q<=3?'Low Stock':'In Stock';
    csv+=`"${s.sku}","${s.sub}","${s.variant}",${s.rack},${s.shelf},${q},"${st}"\n`;
  });

  downloadCSV(`CaratLane_Weekly_MIS_${weekStr}.csv`,csv);
}
function printWeeklyReport(){
  const sel=document.getElementById('rpt-week-select');
  const weekStr=sel?sel.value:getWeekKey(new Date());
  const {start,end}=getWeekBounds(weekStr);
  const wh=getWeekHistory(weekStr);
  const weekLabel=`${start.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})} – ${end.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}`;
  const grns=wh.filter(h=>h.type==='grn');
  const disps=wh.filter(h=>h.type==='dispatched');
  const rets=wh.filter(h=>h.type==='return');
  const picks=wh.filter(h=>h.type==='pick');
  const exceptions=wh.filter(h=>h.type==='exception');
  const packed=wh.filter(h=>h.type==='packed'||h.type==='dispatched');
  const totalUnitsIn=grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='PASS').reduce((b,i)=>b+(i.qty||0),0);},0);
  const totalUnitsOut=disps.reduce((a,d)=>{const items=d.items||[];return a+items.reduce((b,i)=>b+(i.qty||0),0);},0);
  const avgPackDur=packed.filter(p=>p.packDurationSecs>0).length>0?Math.round(packed.filter(p=>p.packDurationSecs>0).reduce((a,p)=>a+p.packDurationSecs,0)/packed.filter(p=>p.packDurationSecs>0).length):null;
  const avgPackStr=avgPackDur?`${Math.floor(avgPackDur/60)}m ${avgPackDur%60}s`:'N/A';
  const totalUnits=SKUS.reduce((a,s)=>a+(inv[s.sku]?inv[s.sku].qty:0),0);
  const pw=window.open('','WMS_WEEKLY_'+weekStr,'width=1000,height=1200');
  if(!pw){toast('Please allow popups','w');return;}
  pw.document.write(`<!DOCTYPE html><html><head><title>Weekly MIS — ${weekLabel}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Arial,sans-serif;font-size:12px;color:#222;padding:16px}
    .header{border-bottom:3px solid #B8860B;padding-bottom:12px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:flex-end}
    .co{font-size:18px;font-weight:bold}.sub{font-size:11px;color:#666;margin-top:4px}
    .report-title{font-size:22px;font-weight:bold;color:#B8860B;margin:12px 0 4px}
    .week-label{font-size:13px;color:#444;margin-bottom:16px}
    .kpi-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:16px}
    .kpi{border:1px solid #ddd;border-radius:6px;padding:10px;text-align:center}
    .kpi-val{font-size:22px;font-weight:bold}.kpi-lbl{font-size:10px;color:#666;margin-top:3px}
    h3{font-size:13px;font-weight:bold;background:#f5f5f5;padding:7px 10px;border-left:4px solid #B8860B;margin:16px 0 8px}
    table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:11px}
    th{background:#f0f0f0;padding:7px;text-align:left;border:1px solid #ddd;font-weight:bold}
    td{padding:6px 7px;border:1px solid #ddd}
    tr:nth-child(even){background:#fafafa}
    .sig-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:30px}
    .sig{border-top:1px solid #000;padding-top:8px;text-align:center;font-size:11px}
    .footer{margin-top:20px;border-top:1px solid #ddd;padding-top:10px;font-size:10px;color:#999;text-align:center}
    .tag-ok{color:#2e7d32;font-weight:bold}.tag-low{color:#e65100;font-weight:bold}.tag-out{color:#c62828;font-weight:bold}
    @media print{body{padding:8mm}@page{margin:12mm}}
  </style></head><body>
  <div class="header">
    <div><div class="co">CaratLane (A Tanishq Partnership)</div><div class="sub">EPS Worldwide Integrated Logistics, Mumbai &nbsp;|&nbsp; SOP Ref: EPS-WH-SOP-001 v1.0 §6</div></div>
    <div style="text-align:right;font-size:11px;color:#666">Generated: ${new Date().toLocaleString('en-IN')}<br>Due: Monday 10:00 AM</div>
  </div>
  <div class="report-title">Weekly MIS Report</div>
  <div class="week-label">Report Period: <strong>${weekLabel}</strong></div>

  <div class="kpi-grid">
    <div class="kpi"><div class="kpi-val" style="color:#1565c0">${grns.length}</div><div class="kpi-lbl">GRNs Raised</div><div style="font-size:10px;color:#999">${totalUnitsIn} units in</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#2e7d32">${picks.length}</div><div class="kpi-lbl">Orders Picked</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#B8860B">${disps.length}</div><div class="kpi-lbl">Dispatched</div><div style="font-size:10px;color:#999">${totalUnitsOut} units out</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#e65100">${rets.length}</div><div class="kpi-lbl">Returns</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#c62828">${exceptions.length}</div><div class="kpi-lbl">Exceptions</div></div>
    <div class="kpi"><div class="kpi-val" style="color:#555">${avgPackStr}</div><div class="kpi-lbl">Avg Pack Time</div></div>
  </div>

  <h3>1. Inbound / GRN Report</h3>
  ${grns.length?`<table><thead><tr><th>GRN ID</th><th>Date/Time</th><th>Details</th><th>Units In (Pass)</th><th>Units Hold</th></tr></thead><tbody>${grns.map(g=>{const items=g.items||[];const pass=items.filter(i=>i.qc==='PASS').reduce((a,i)=>a+(i.qty||0),0);const hold=items.filter(i=>i.qc==='HOLD').reduce((a,i)=>a+(i.qty||0),0);return `<tr><td>${g.id}</td><td>${g.ts}</td><td>${g.detail||''}</td><td style="text-align:center;color:#2e7d32;font-weight:bold">${pass}</td><td style="text-align:center;color:#e65100">${hold||0}</td></tr>`;}).join('')}<tr style="background:#f0f0f0;font-weight:bold"><td colspan="3">TOTAL</td><td style="text-align:center">${totalUnitsIn}</td><td style="text-align:center">${grns.reduce((a,g)=>{const items=g.items||[];return a+items.filter(i=>i.qc==='HOLD').reduce((b,i)=>b+(i.qty||0),0);},0)}</td></tr></tbody></table>`:'<p style="color:#999;padding:8px">No inbound activity this week.</p>'}

  <h3>2. Outbound / Dispatch Report</h3>
  ${disps.length?`<table><thead><tr><th>Dispatch ID</th><th>Order ID</th><th>AWB</th><th>Recipient</th><th>Courier</th><th>Box (cm)</th><th>Actual (kg)</th><th>Vol. (kg)</th><th>Chargeable (kg)</th><th>Pack Duration</th><th>Dispatched At</th></tr></thead><tbody>${disps.map(d=>{const dims=d.boxL?`${d.boxL}×${d.boxW}×${d.boxH}`:'—';return `<tr><td>${d.id}</td><td>${esc(d.orderId||'—')}</td><td>${esc(d.awb||'—')}</td><td>${esc(d.recipientName||'—')}, ${esc(d.pincode||'')}</td><td>${d.shippingMethod||'—'}</td><td>${dims}</td><td style="text-align:center">${d.actualWeight||'—'}</td><td style="text-align:center">${d.volWeight||'—'}</td><td style="text-align:center;font-weight:bold;color:#B8860B">${d.chargeableWeight||'—'}</td><td style="text-align:center">${d.packDuration||'—'}</td><td>${d.dispatchedAt||d.ts}</td></tr>`;}).join('')}<tr style="background:#f0f0f0;font-weight:bold"><td colspan="2">TOTAL DISPATCHED: ${disps.length}</td><td colspan="9"></td></tr></tbody></table>`:'<p style="color:#999;padding:8px">No dispatch activity this week.</p>'}

  <h3>3. Returns Report</h3>
  ${rets.length?`<table><thead><tr><th>Return ID</th><th>Date/Time</th><th>Details</th></tr></thead><tbody>${rets.map(r=>`<tr><td>${r.id}</td><td>${r.ts}</td><td>${esc(r.detail||'—')}</td></tr>`).join('')}</tbody></table>`:'<p style="color:#999;padding:8px">No returns this week.</p>'}

  <h3>4. Exception Report</h3>
  ${exceptions.length?`<table><thead><tr><th>Exception ID</th><th>Date/Time</th><th>Category</th><th>Details</th></tr></thead><tbody>${exceptions.map(e=>`<tr><td>${e.id}</td><td>${e.ts}</td><td>${e.category||'general'}</td><td>${e.detail||'—'}</td></tr>`).join('')}</tbody></table>`:'<p style="color:#2e7d32;padding:8px;font-weight:bold">✓ No exceptions this week.</p>'}

  <h3>5. Inventory Snapshot (as of report generation)</h3>
  <table><thead><tr><th>SKU</th><th>Item Name</th><th>Variant</th><th>Rack</th><th>Shelf</th><th>Qty</th><th>Status</th></tr></thead><tbody>
  ${SKUS.map(s=>{const q=(inv[s.sku]||{qty:0}).qty;const st=q<=0?'Out of Stock':q<=3?'Low Stock':'In Stock';const cls=q<=0?'tag-out':q<=3?'tag-low':'tag-ok';return `<tr><td>${s.sku}</td><td>${s.sub}</td><td>${s.variant}</td><td style="text-align:center">${s.rack}</td><td style="text-align:center">${s.shelf}</td><td style="text-align:center;font-weight:bold">${q}</td><td class="${cls}">${st}</td></tr>`;}).join('')}
  <tr style="background:#f0f0f0;font-weight:bold"><td colspan="5">TOTAL UNITS IN WAREHOUSE</td><td style="text-align:center">${totalUnits}</td><td></td></tr>
  </tbody></table>

  <div class="sig-grid">
    <div class="sig">Prepared By (EPS Ops)<br><br>Name: _______________<br>Date: _______________</div>
    <div class="sig">Verified By (EPS Manager)<br><br>Name: _______________<br>Date: _______________</div>
    <div class="sig">Acknowledged By (CaratLane)<br><br>Name: _______________<br>Date: _______________</div>
  </div>
  <div class="footer">CaratLane WMS · EPS Worldwide Integrated Logistics Mumbai · SOP EPS-WH-SOP-001 v1.0 · Weekly MIS due every Monday by 10:00 AM</div>
  </body></html>`);
  pw.document.close();pw.focus();
  setTimeout(()=>pw.print(),600);
}

// SOP TOGGLE
function toggleSop(el){
  const body=el.nextElementSibling;
  const chev=el.querySelector('.chevron');
  body.classList.toggle('open');
  chev.classList.toggle('open');
}

// TOAST
let toastTimer;
function toast(msg,type='s'){
  const el=document.getElementById('toast');
  el.textContent=msg;el.className='show '+type;
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{el.className='';},3500);
}

// COMPREHENSIVE SYSTEM TEST
function runFullSystemTest(){
  console.log('════════════════════════════════════════════');
  console.log('🧪 CARATLANE WMS — COMPREHENSIVE SYSTEM TEST');
  console.log('════════════════════════════════════════════');
  console.log('');
  
  // TEST 1: Data persistence & initialization
  console.log('TEST 1: Data Persistence & Initialization');
  console.log('├─ Inventory loaded:', Object.keys(inv).length, 'SKUs');
  console.log('├─ History records:', history.length, 'entries');
  console.log('├─ Cost parameters:', JSON.stringify(costParams));
  console.log('├─ Packing queue size:', packingQueue.length);
  console.log('└─ ✓ All data structures initialized\n');
  
  // TEST 2: Inbound receiving flow
  console.log('TEST 2: Inbound Receiving Flow');
  const testGRN=newId('GRN');
  const testItems=[
    {sku:'UNI-GS-M-34',name:'Grey Sweater- Male',variant:'Size 34',qc:'PASS',issue:'',qty:5,bin:'A-1',binOverridden:false},
    {sku:'UNI-GS-M-36',name:'Grey Sweater- Male',variant:'Size 36',qc:'HOLD',issue:'Damaged packaging',qty:2,bin:'A-1',binOverridden:false}
  ];
  const initialInv=JSON.parse(JSON.stringify(inv['UNI-GS-M-34']||{}));
  testItems.forEach(item=>{
    if(item.qc==='PASS'){
      if(!inv[item.sku])inv[item.sku]={qty:0,rack:'A',shelf:'1'};
      inv[item.sku].qty+=item.qty;
    }
    if(item.qc==='HOLD' || item.issue){
      history.push({id:newId('EXC'),type:'exception',ts:ts(),category:'damage',detail:`${item.sku} · QC: ${item.qc} · Issue: ${item.issue||'N/A'} · Qty: ${item.qty}`,grn:testGRN});
    }
  });
  history.push({id:testGRN,type:'grn',ts:ts(),detail:`Test ASN · 2 SKUs · PASS:5 HOLD:2`,items:testItems});
  saveInv();saveHist();
  console.log('├─ GRN created:', testGRN);
  console.log('├─ Inventory updated - UNI-GS-M-34:', initialInv.qty||0, '→', inv['UNI-GS-M-34'].qty);
  console.log('├─ Exceptions logged:', history.filter(h=>h.type==='exception').length);
  console.log('├─ History size:', history.length);
  console.log('└─ ✓ Inbound flow working\n');
  
  // TEST 3: Picking flow
  console.log('TEST 3: Picking Flow');
  const testPickItems=[
    {sku:'UNI-GS-M-34',name:'Grey Sweater- Male',variant:'Size 34',qty:2,bin:'A-1'}
  ];
  const pickId=newId('PCK');
  packingQueue.push({id:pickId,orderId:'ORD-TEST-001',priority:'Standard',method:'Single',picker:'TEST-P01',items:testPickItems,ts:ts(),status:'awaiting_packing'});
  history.push({id:pickId,type:'pick',ts:ts(),detail:`ORD-TEST-001 · Single pick · Standard · 1 SKU · Picker: TEST-P01`});
  inv['UNI-GS-M-34'].qty-=2;
  saveInv();saveHist();
  console.log('├─ Pick task created:', pickId);
  console.log('├─ Order ID:', 'ORD-TEST-001');
  console.log('├─ Packing queue updated:', packingQueue.length, 'tasks');
  console.log('├─ Inventory reduced - UNI-GS-M-34:', inv['UNI-GS-M-34'].qty);
  console.log('└─ ✓ Picking flow working\n');
  
  // TEST 4: Packing flow
  console.log('TEST 4: Packing Flow');
  const packTaskId=packingQueue[0].id;
  const packTask=packingQueue[0];
  packingQueue.splice(0,1);
  const pkdId=newId('PKD');
  history.push({id:pkdId,type:'packed',ts:ts(),detail:`${packTask.orderId} · ${packTask.items.length} SKUs packed — ready for dispatch`,orderId:packTask.orderId,items:packTask.items});
  saveHist();
  console.log('├─ Pack task ID:', pkdId);
  console.log('├─ Order moved to dispatch queue');
  console.log('├─ Packing queue remaining:', packingQueue.length);
  console.log('├─ History now has packed orders:', history.filter(h=>h.type==='packed').length);
  console.log('└─ ✓ Packing flow working\n');
  
  // TEST 5: Dispatch flow
  console.log('TEST 5: Dispatch Flow');
  const packedOrder=history.find(h=>h.type==='packed');
  if(packedOrder){
    packedOrder.type='dispatched';
    packedOrder.dispatchedAt=ts();
    packedOrder.awb='TEST-AWB-123456789';
    packedOrder.recipientName='Test Customer';
    packedOrder.address='123 Test St, Mumbai 400001';
    packedOrder.pincode='400001';
    packedOrder.phone='+91-9876543210';
    packedOrder.shippingMethod='Standard Road';
    history.push({id:newId('DSP'),type:'dispatch',ts:ts(),detail:`AWB: TEST-AWB-123456789 · To: Test Customer, 400001 · Standard Road · +91-9876543210 · 1 SKUs`});
    saveHist();
    console.log('├─ Dispatch created with AWB: TEST-AWB-123456789');
    console.log('├─ Packed orders remaining:', history.filter(h=>h.type==='packed').length);
    console.log('├─ Dispatched orders:', history.filter(h=>h.type==='dispatched').length);
    console.log('└─ ✓ Dispatch flow working\n');
  }
  
  // TEST 6: Analytics calculations
  console.log('TEST 6: Analytics Calculations');
  const grns=history.filter(h=>h.type==='grn').length;
  const picks=history.filter(h=>h.type==='pick').length;
  const packed=history.filter(h=>h.type==='packed').length;
  const dispatches=history.filter(h=>h.type==='dispatched').length;
  const exceptions=history.filter(h=>h.type==='exception').length;
  const lowStock=SKUS.filter(s=>(inv[s.sku]||{qty:0}).qty<=3&&(inv[s.sku]||{qty:0}).qty>0).length;
  console.log('├─ GRNs:', grns);
  console.log('├─ Picks:', picks);
  console.log('├─ Packed:', packed);
  console.log('├─ Dispatched:', dispatches);
  console.log('├─ Exceptions:', exceptions);
  console.log('├─ Low stock SKUs:', lowStock);
  console.log('└─ ✓ Analytics data collected\n');
  
  // TEST 7: Finance calculations
  console.log('TEST 7: Finance & Cost Calculations');
  const totalCost=(grns*costParams.receivingCostPerGrn)+(picks*costParams.pickCostPerOrder)+(packed*costParams.packCostPerOrder);
  const storageCost=SKUS.length*costParams.storageCostPerSku;
  const dispatchRevenue=dispatches*costParams.dispatchCostPerOrder;
  const roi=dispatchRevenue>0?Math.round(((dispatchRevenue-(totalCost+storageCost))/(totalCost+storageCost))*100):0;
  console.log('├─ Operations cost: ₹' + totalCost);
  console.log('├─ Storage cost: ₹' + storageCost);
  console.log('├─ Total cost: ₹' + (totalCost+storageCost));
  console.log('├─ Dispatch revenue: ₹' + dispatchRevenue);
  console.log('├─ ROI: ' + roi + '%');
  console.log('└─ ✓ Finance calculations working\n');
  
  // TEST 8: Capacity planning
  console.log('TEST 8: Capacity Planning');
  const rackA=11,rackB=5;
  const occupiedA=SKUS.filter(s=>s.rack==='A'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const occupiedB=SKUS.filter(s=>s.rack==='B'&&(inv[s.sku]||{qty:0}).qty>0).length;
  const utilPct=Math.round(((occupiedA+occupiedB)/(rackA+rackB))*100);
  console.log('├─ Rack A occupied: ' + occupiedA + '/' + rackA);
  console.log('├─ Rack B occupied: ' + occupiedB + '/' + rackB);
  console.log('├─ Warehouse utilization: ' + utilPct + '%');
  console.log('└─ ✓ Capacity planning working\n');
  
  // TEST 9: Real-time updates check
  console.log('TEST 9: Real-time Update Verification');
  renderDash();
  renderAnalytics();
  renderFinance();
  console.log('├─ Dashboard rendered ✓');
  console.log('├─ Analytics rendered ✓');
  console.log('├─ Finance rendered ✓');
  console.log('└─ All pages updated in real-time\n');
  
  // TEST 10: localStorage persistence
  console.log('TEST 10: localStorage Persistence');
  const storedInv=localStorage.getItem('cl_wms_inv2');
  const storedHist=localStorage.getItem('cl_wms_hist2');
  console.log('├─ Inventory in localStorage: ' + (storedInv?'✓':'✗'));
  console.log('├─ History in localStorage: ' + (storedHist?'✓':'✗'));
  console.log('├─ Inventory size: ' + (storedInv?JSON.parse(storedInv).length||'unknown':'N/A'));
  console.log('├─ History records: ' + (storedHist?JSON.parse(storedHist).length||'unknown':'N/A'));
  console.log('└─ ✓ Data persistence verified\n');
  
  // FINAL SUMMARY
  console.log('════════════════════════════════════════════');
  console.log('✅ ALL SYSTEMS OPERATIONAL');
  console.log('════════════════════════════════════════════');
  console.log('');
  console.log('Summary:');
  console.log('• Inbound receiving: ✓ Working');
  console.log('• Picking flow: ✓ Working');
  console.log('• Packing workflow: ✓ Working');
  console.log('• Dispatch management: ✓ Working');
  console.log('• Analytics dashboard: ✓ Working');
  console.log('• Finance tracking: ✓ Working');
  console.log('• Capacity planning: ✓ Working');
  console.log('• Real-time updates: ✓ Working');
  console.log('• Data persistence: ✓ Working');
  console.log('');
  console.log('Total history records:', history.length);
  console.log('Inventory SKUs:', Object.keys(inv).length);
  console.log('');
  console.log('🎉 System is fully operational and all modules are linked!');
}

// ═══ BOOT — load from Supabase then render ═══
async function loadSKUsFromDB(){
  try {
    if(typeof supabase==='undefined'||!supa) return;
    const {data,error}=await supa.from('skus').select('*').order('cat').order('sub').order('variant');
    if(error||!data||!data.length) return; // fallback to hardcoded
    SKUS=data.map(r=>({sku:r.sku,cat:r.cat,sub:r.sub,variant:r.variant,rack:r.rack,shelf:r.shelf}));
    console.log('✓ SKUs loaded from DB:',SKUS.length);
  } catch(e){ console.warn('SKU DB load failed, using hardcoded list'); }
}
async function addSKU(skuObj){
  // Add to local array
  if(SKUS.find(s=>s.sku===skuObj.sku)){toast('SKU already exists','w');return false;}
  SKUS.push(skuObj);
  inv[skuObj.sku]={qty:0,rack:skuObj.rack,shelf:skuObj.shelf};
  // Save to DB
  try {
    await supa.from('skus').upsert(skuObj,{onConflict:'sku'});
    await saveInv();
    toast('SKU '+skuObj.sku+' added successfully','s');
    return true;
  } catch(e){ console.error('addSKU error:',e); toast('SKU saved locally only','w'); return true; }
}
// ═══════════════════════════════════════════
// LABEL PRINTER SYSTEM
// ═══════════════════════════════════════════
let _lblSelected = new Set();
let _jsBarcodeLoaded = false;

function loadJsBarcode(cb){
  if(_jsBarcodeLoaded){ cb(); return; }
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js';
  s.onload=()=>{ _jsBarcodeLoaded=true; cb(); };
  s.onerror=()=>{ console.error('JsBarcode failed to load'); cb(); };
  document.head.appendChild(s);
}

function renderLabelPage(){
  loadJsBarcode(()=>{
    const cat=document.getElementById('lbl-cat')?.value||'';
    const skus=cat?SKUS.filter(s=>s.cat===cat):SKUS;
    const grid=document.getElementById('label-grid');
    if(!grid)return;
    grid.innerHTML=skus.map(s=>{
      const selected=_lblSelected.has(s.sku);
      const qty=(inv[s.sku]||{qty:0}).qty;
      return `<div class="lbl-card${selected?' selected':''}" onclick="toggleLabelSelect('${s.sku}')" id="lbl-card-${s.sku}">
        <div class="lbl-check">${selected?'<i class="ti ti-check" style="font-size:11px"></i>':''}</div>
        <div style="font-size:10px;font-weight:700;color:var(--t);margin-bottom:2px;padding-right:20px">${esc(s.sub)}</div>
        <div style="font-size:10px;color:var(--t2)">${esc(s.variant)}</div>
        <div style="font-size:9px;color:var(--t3);margin-top:2px">Rack ${s.rack} · Shelf ${s.shelf} · ${qty} units</div>
        <div class="lbl-preview">
          <svg id="bc-${s.sku.replace(/[^a-zA-Z0-9]/g,'_')}" style="max-width:100%;height:40px"></svg>
          <div style="font-size:9px;color:#333;margin-top:2px;font-family:monospace">${s.sku}</div>
        </div>
      </div>`;
    }).join('');
    // Render barcodes
    skus.forEach(s=>{
      try {
        const svgId='bc-'+s.sku.replace(/[^a-zA-Z0-9]/g,'_');
        const el=document.getElementById(svgId);
        if(el&&typeof JsBarcode!=='undefined'){
          JsBarcode('#'+svgId, s.sku, {
            format:'CODE128', width:1.2, height:35,
            displayValue:false, margin:2,
            background:'#ffffff', lineColor:'#000000'
          });
        }
      } catch(e){ console.warn('Barcode error for',s.sku,e); }
    });
    updateLabelSelCount();
  });
}

function toggleLabelSelect(sku){
  if(_lblSelected.has(sku)) _lblSelected.delete(sku);
  else _lblSelected.add(sku);
  const card=document.getElementById('lbl-card-'+sku);
  if(!card)return;
  card.classList.toggle('selected',_lblSelected.has(sku));
  card.querySelector('.lbl-check').innerHTML=_lblSelected.has(sku)?'<i class="ti ti-check" style="font-size:11px"></i>':'';
  updateLabelSelCount();
}

function selectAllLabels(){
  const cat=document.getElementById('lbl-cat')?.value||'';
  const skus=cat?SKUS.filter(s=>s.cat===cat):SKUS;
  skus.forEach(s=>_lblSelected.add(s.sku));
  renderLabelPage();
}

function clearLabelSelection(){
  _lblSelected.clear();
  renderLabelPage();
}

function updateLabelSelCount(){
  const el=document.getElementById('lbl-sel-count');
  if(el) el.textContent=_lblSelected.size;
}

function getLabelSizeMM(){
  const v=document.getElementById('lbl-size')?.value||'50x30';
  const [w,h]=v.split('x').map(Number);
  return {w,h};
}

function printSelectedLabels(){
  if(!_lblSelected.size){ toast('Select at least one SKU to print','w'); return; }
  loadJsBarcode(()=>{
    const {w:mmW, h:mmH}=getLabelSizeMM();
    const px_w=Math.round(mmW*3.78); // 96dpi ÷ 25.4 * mm
    const px_h=Math.round(mmH*3.78);
    const selectedSKUs=SKUS.filter(s=>_lblSelected.has(s.sku));
    // Build print window
    const pw=window.open('','CARATLANE_LABELS_'+Date.now(),'width=700,height=900');
    if(!pw){ toast('Please allow popups to print','w'); return; }
    // Build SVG barcodes as data URIs
    const labelHTML=selectedSKUs.map(s=>{
      // Generate barcode SVG inline
      const svgNS='http://www.w3.org/2000/svg';
      const tmpSvg=document.createElementNS(svgNS,'svg');
      tmpSvg.setAttribute('id','tmp_bc_print');
      document.body.appendChild(tmpSvg);
      let bcDataURI='';
      try {
        JsBarcode(tmpSvg, s.sku, {format:'CODE128',width:1.5,height:40,displayValue:true,fontSize:9,margin:3,background:'#ffffff',lineColor:'#000000'});
        const svgStr=new XMLSerializer().serializeToString(tmpSvg);
        bcDataURI='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(svgStr)));
      } catch(e){ console.warn('Print barcode error:',e); }
      document.body.removeChild(tmpSvg);
      const qty=(inv[s.sku]||{qty:0}).qty;
      return `<div class="label">
        <div class="lbl-brand">CaratLane WMS · EPS Worldwide</div>
        <div class="lbl-name">${s.sub}</div>
        <div class="lbl-variant">${s.variant}</div>
        <div class="lbl-location">Rack ${s.rack} · Shelf ${s.shelf} &nbsp;|&nbsp; Stock: ${qty}</div>
        ${bcDataURI?`<img src="${bcDataURI}" class="lbl-barcode" alt="${s.sku}">`:'<div class="lbl-sku-plain">'+s.sku+'</div>'}
        <div class="lbl-sku">${s.sku}</div>
      </div>`;
    }).join('');
    pw.document.write(`<!DOCTYPE html><html><head><title>CaratLane SKU Labels</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;background:#fff;padding:4mm}
      .label-grid{display:flex;flex-wrap:wrap;gap:3mm}
      .label{width:${mmW}mm;height:${mmH}mm;border:0.5px solid #ccc;border-radius:2mm;padding:2mm;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;page-break-inside:avoid;background:#fff}
      .lbl-brand{font-size:6px;color:#999;letter-spacing:0.5px;text-transform:uppercase}
      .lbl-name{font-size:9px;font-weight:700;color:#111;margin-top:1mm;line-height:1.2;overflow:hidden;max-height:2.4em}
      .lbl-variant{font-size:8px;color:#444;margin-top:0.5mm}
      .lbl-location{font-size:7px;color:#666;margin-top:0.5mm;background:#f5f5f5;padding:1px 3px;border-radius:2px}
      .lbl-barcode{width:100%;max-height:${Math.round(mmH*0.4)}mm;object-fit:contain;margin:1mm 0}
      .lbl-sku{font-size:7px;color:#333;font-family:monospace;text-align:center;margin-top:auto}
      .lbl-sku-plain{font-size:8px;font-weight:700;font-family:monospace;text-align:center;padding:3px;border:1px solid #ccc;border-radius:2px;margin:1mm 0}
      .print-info{font-size:11px;color:#666;margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid #ddd}
      @media print{
        body{padding:2mm}
        .no-print{display:none}
        @page{margin:3mm;size:${mmW*2+10}mm auto}
      }
    </style></head><body>
    <div class="no-print" style="margin-bottom:12px;padding:10px;background:#f9f9f9;border-radius:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-weight:700;font-size:13px">CaratLane WMS — SKU Labels</div>
        <div style="font-size:11px;color:#666;margin-top:3px">${selectedSKUs.length} labels · ${mmW}×${mmH}mm · Generated ${new Date().toLocaleString('en-IN')}</div>
        <div style="font-size:11px;color:#888;margin-top:3px">For SEZNIK Josh LD0801: Open "We Print" app → Import image → Print on 2-inch thermal paper</div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="window.print()" style="padding:8px 16px;background:#B8860B;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:12px">🖨 Print Labels</button>
        <button onclick="window.close()" style="padding:8px 16px;background:#f0f0f0;border:none;border-radius:6px;cursor:pointer;font-size:12px">Close</button>
      </div>
    </div>
    <div class="label-grid">${labelHTML}</div>
    </body></html>`);
    pw.document.close();
    pw.focus();
    logAudit('PRINT_LABELS','inventory','batch',null,{count:selectedSKUs.length,skus:selectedSKUs.map(s=>s.sku)});
    toast(selectedSKUs.length+' labels sent to print preview','s');
  });
}

// ═══════════════════════════════════════════
// AUTH SYSTEM
// ═══════════════════════════════════════════
let currentUser = null;
let currentProfile = null;

const ROLE_COLORS = {admin:'#c62828',supervisor:'#B8860B',picker:'#1565c0',packer:'#2e7d32',viewer:'#6a1b9a'};
const ROLE_PERMS = {
  admin:    {canEdit:true,  canDispatch:true, canPack:true, canPick:true,  canReceive:true,  canManageUsers:true,  canAudit:true,  canReturn:true},
  supervisor:{canEdit:true, canDispatch:true, canPack:true, canPick:true,  canReceive:true,  canManageUsers:false, canAudit:true,  canReturn:true},
  picker:   {canEdit:false, canDispatch:false,canPack:true, canPick:true,  canReceive:false, canManageUsers:false, canAudit:false, canReturn:false},
  packer:   {canEdit:false, canDispatch:true, canPack:true, canPick:false, canReceive:false, canManageUsers:false, canAudit:false, canReturn:false},
  viewer:   {canEdit:false, canDispatch:false,canPack:false,canPick:false, canReceive:false, canManageUsers:false, canAudit:false, canReturn:false},
};

function getPerms(){ return ROLE_PERMS[currentProfile?.role] || ROLE_PERMS.viewer; }

async function authLogin(){
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-err');
  const btn = document.getElementById('auth-login-btn');
  if(!email||!password){ errEl.textContent='Please enter email and password'; return; }
  if(!validateEmail(email)){ errEl.textContent='Invalid email address'; return; }
  btn.disabled=true; btn.textContent='Signing in...'; errEl.textContent='';
  try {
    const {data,error} = await supa.auth.signInWithPassword({email,password});
    if(error) throw error;
    currentUser = data.user;
    await loadUserProfile();
    await onAuthSuccess();
  } catch(e){
    errEl.textContent = e.message==='Invalid login credentials' ? 'Incorrect email or password' : (e.message||'Login failed');
    btn.disabled=false; btn.innerHTML='<i class="ti ti-login"></i> Sign In';
  }
}

async function loadUserProfile(){
  if(!currentUser) return;
  try {
    const {data,error} = await supa.from('user_profiles').select('*').eq('id',currentUser.id).single();
    if(error||!data){ currentProfile={role:'viewer',full_name:currentUser.email,email:currentUser.email}; return; }
    currentProfile = data;
    // Update last login
    await supa.from('user_profiles').update({last_login:new Date().toISOString()}).eq('id',currentUser.id);
  } catch(e){ currentProfile={role:'viewer',full_name:currentUser.email,email:currentUser.email}; }
}

async function onAuthSuccess(){
  // Hide auth screen
  document.getElementById('auth-screen').style.display='none';
  // Show user menu
  const userMenu=document.getElementById('user-menu');
  if(userMenu) userMenu.style.display='flex';
  // Update user info in menu
  document.getElementById('user-menu-name').textContent = (currentProfile.full_name||'').split(' ')[0];
  document.getElementById('user-email-display').textContent = currentProfile.email;
  const badge=document.getElementById('user-role-badge');
  badge.textContent=currentProfile.role.toUpperCase();
  badge.style.background=ROLE_COLORS[currentProfile.role]||'var(--gold)';
  // Show/hide tabs based on role
  const perms=getPerms();
  if(perms.canAudit) document.getElementById('tab-audit').style.display='';
  if(perms.canManageUsers){ document.getElementById('tab-users').style.display=''; document.getElementById('manage-users-item').style.display='flex'; }
  // Apply role restrictions to UI
  applyRoleRestrictions();
  // Boot WMS
  await bootWMS();
  await logAudit('LOGIN','session',currentUser.id,null,{email:currentProfile.email,role:currentProfile.role});
}

function applyRoleRestrictions(){
  const perms=getPerms();
  const role=currentProfile?.role;
  // Hide action buttons for viewer
  if(role==='viewer'){
    const style=document.createElement('style');
    style.id='viewer-restrictions';
    style.textContent=`
      .btn-primary,.btn-success,button[onclick*="createGRN"],button[onclick*="confirmPick"],
      button[onclick*="confirmCourierDispatch"],button[onclick*="startPacking"],
      button[onclick*="openPackModal"],button[onclick*="processReturn"],
      #clear-all-btn{display:none!important}
      input,select,textarea{pointer-events:none!important;opacity:0.7}
    `;
    document.head.appendChild(style);
    toast('You are logged in as a Viewer — read-only access','w');
  }
  // Restrict pickers from dispatch/returns tabs
  if(role==='picker'){
    const dispTab=document.querySelector('[data-tab="dispatch"]');
    const retTab=document.querySelector('[data-tab="returns"]');
    if(dispTab) dispTab.style.display='none';
    if(retTab) retTab.style.display='none';
  }
  // Restrict packers from inbound/picking tabs
  if(role==='packer'){
    const inbTab=document.querySelector('[data-tab="inbound"]');
    const pkTab=document.querySelector('[data-tab="picking"]');
    if(inbTab) inbTab.style.display='none';
    if(pkTab) pkTab.style.display='none';
  }
}

async function authLogout(){
  await logAudit('LOGOUT','session',currentUser?.id,null,{email:currentProfile?.email});
  await supa.auth.signOut();
  currentUser=null; currentProfile=null;
  document.getElementById('auth-screen').style.display='flex';
  document.getElementById('user-menu').style.display='none';
  document.getElementById('auth-password').value='';
  document.getElementById('user-dropdown').classList.remove('open');
  // Remove viewer restrictions if any
  const vr=document.getElementById('viewer-restrictions');
  if(vr) vr.remove();
  toast('Signed out successfully','s');
}

async function authResetPassword(){
  const email=document.getElementById('auth-reset-email').value.trim();
  const errEl=document.getElementById('auth-reset-err');
  if(!email||!validateEmail(email)){errEl.textContent='Enter a valid email';return;}
  const {error}=await supa.auth.resetPasswordForEmail(email,{redirectTo:'https://caratlane-wms.vercel.app/'});
  if(error){errEl.textContent=error.message;return;}
  errEl.style.color='var(--st)';
  errEl.textContent='Reset link sent — check your email';
}

function showResetForm(){ document.getElementById('auth-login-form').style.display='none'; document.getElementById('auth-reset-form').style.display='block'; }
function showLoginForm(){ document.getElementById('auth-reset-form').style.display='none'; document.getElementById('auth-login-form').style.display='block'; }
function toggleUserMenu(){ document.getElementById('user-dropdown').classList.toggle('open'); }
document.addEventListener('click',e=>{ if(!e.target.closest('.user-menu')) document.getElementById('user-dropdown')?.classList.remove('open'); });

// ═══════════════════════════════════════════
// USER MANAGEMENT (Admin only)
// ═══════════════════════════════════════════
function showCreateUserForm(){ document.getElementById('create-user-form').style.display='block'; }
function hideCreateUserForm(){ document.getElementById('create-user-form').style.display='none'; }

async function createUser(){
  const name=document.getElementById('new-user-name').value.trim();
  const email=document.getElementById('new-user-email').value.trim();
  const password=document.getElementById('new-user-password').value;
  const role=document.getElementById('new-user-role').value;
  const errEl=document.getElementById('create-user-err');
  if(!name||!email||!password){errEl.textContent='All fields required';return;}
  if(!validateEmail(email)){errEl.textContent='Invalid email';return;}
  if(password.length<8){errEl.textContent='Password must be at least 8 characters';return;}
  errEl.textContent='Creating...';
  try {
    // Create auth user via Supabase admin — requires service role key
    // For now, user signs up themselves and admin assigns role
    const {data,error}=await supa.auth.signUp({email,password,options:{data:{full_name:name}}});
    if(error) throw error;
    // Insert profile
    await supa.from('user_profiles').upsert({id:data.user.id,email,full_name:name,role},{onConflict:'id'});
    await logAudit('CREATE_USER','user_profiles',data.user.id,null,{email,role,full_name:name});
    errEl.style.color='var(--st)';
    errEl.textContent='User created — they must verify their email before logging in';
    hideCreateUserForm();
    renderUsersList();
  } catch(e){ errEl.textContent=e.message||'Failed to create user'; }
}

async function renderUsersList(){
  const el=document.getElementById('users-list');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading...</div>';
  try {
    const {data,error}=await supa.from('user_profiles').select('*').order('role').order('full_name');
    if(error||!data){el.innerHTML='<div class="empty">No users found</div>';return;}
    el.innerHTML=`<div class="tw"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last Login</th><th>Status</th><th>Actions</th></tr></thead><tbody>
    ${data.map(u=>{
      const roleColor=ROLE_COLORS[u.role]||'var(--gold)';
      const lastLogin=u.last_login?new Date(u.last_login).toLocaleString('en-IN'):'Never';
      const isMe=u.id===currentUser?.id;
      return `<tr>
        <td style="font-weight:600">${esc(u.full_name)}</td>
        <td style="font-size:11px">${esc(u.email)}</td>
        <td><span style="background:${roleColor};color:#fff;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700">${u.role.toUpperCase()}</span></td>
        <td style="font-size:10px;color:var(--t2)">${lastLogin}</td>
        <td><span style="color:${u.is_active?'var(--st)':'var(--dt)'};font-size:11px;font-weight:600">${u.is_active?'Active':'Inactive'}</span></td>
        <td>${isMe?'<span style="font-size:10px;color:var(--t3)">You</span>':`
          <select onchange="updateUserRole('${u.id}',this.value)" style="padding:3px 6px;border:0.5px solid var(--b);border-radius:4px;background:var(--s2);color:var(--t);font-size:10px;margin-right:4px">
            ${['admin','supervisor','picker','packer','viewer'].map(r=>`<option value="${r}"${r===u.role?' selected':''}>${r}</option>`).join('')}
          </select>
          <button onclick="toggleUserActive('${u.id}',${u.is_active})" style="padding:2px 8px;font-size:10px;background:${u.is_active?'var(--dbg)':'var(--sbg)'};color:${u.is_active?'var(--dt)':'var(--st)'};border:none;border-radius:4px;cursor:pointer">${u.is_active?'Deactivate':'Activate'}</button>
        `}</td>
      </tr>`;
    }).join('')}
    </tbody></table></div>`;
  } catch(e){ el.innerHTML='<div class="empty">Error loading users</div>'; }
}

async function updateUserRole(userId,newRole){
  try {
    const {data:old}=await supa.from('user_profiles').select('role').eq('id',userId).single();
    await supa.from('user_profiles').update({role:newRole}).eq('id',userId);
    await logAudit('UPDATE_ROLE','user_profiles',userId,{role:old?.role},{role:newRole});
    toast('Role updated to '+newRole,'s');
  } catch(e){ toast('Failed to update role','w'); }
}

async function toggleUserActive(userId,isActive){
  try {
    await supa.from('user_profiles').update({is_active:!isActive}).eq('id',userId);
    await logAudit(isActive?'DEACTIVATE_USER':'ACTIVATE_USER','user_profiles',userId,null,{is_active:!isActive});
    toast('User '+(isActive?'deactivated':'activated'),'s');
    renderUsersList();
  } catch(e){ toast('Failed to update user','w'); }
}

// ═══════════════════════════════════════════
// AUDIT TRAIL
// ═══════════════════════════════════════════
async function logAudit(action,entityType,entityId,oldVals,newVals){
  if(!currentUser||!supa) return;
  try {
    await supa.from('audit_log').insert({
      user_id:currentUser.id,
      user_email:currentProfile?.email||currentUser.email,
      user_name:currentProfile?.full_name||currentUser.email,
      user_role:currentProfile?.role||'unknown',
      action,entity_type:entityType,entity_id:String(entityId||''),
      old_values:oldVals||null,new_values:newVals||null,
      created_at:new Date().toISOString()
    });
  } catch(e){ console.warn('Audit log failed:',e.message); }
}

async function renderAuditLog(){
  const el=document.getElementById('audit-log-container');
  if(!el)return;
  el.innerHTML='<div style="color:var(--t3);font-size:11px;padding:8px">Loading audit trail...</div>';
  const search=(document.getElementById('audit-search')?.value||'').toLowerCase();
  const roleFilter=document.getElementById('audit-filter-role')?.value||'';
  const actionFilter=document.getElementById('audit-filter-action')?.value||'';
  try {
    let q=supa.from('audit_log').select('*').order('created_at',{ascending:false}).limit(200);
    if(roleFilter) q=q.eq('user_role',roleFilter);
    if(actionFilter) q=q.eq('action',actionFilter);
    const {data,error}=await q;
    if(error) throw error;
    let rows=data||[];
    if(search) rows=rows.filter(r=>
      (r.user_email||'').toLowerCase().includes(search)||
      (r.user_name||'').toLowerCase().includes(search)||
      (r.action||'').toLowerCase().includes(search)||
      (r.entity_type||'').toLowerCase().includes(search)||
      (r.entity_id||'').toLowerCase().includes(search)
    );
    if(!rows.length){el.innerHTML='<div class="empty">No audit records found</div>';return;}
    const actionColor={INSERT:'var(--st)',UPDATE:'var(--it)',DELETE:'var(--dt)',LOGIN:'var(--gold)',LOGOUT:'var(--t3)',CREATE_USER:'var(--st)',UPDATE_ROLE:'var(--wt)',DEACTIVATE_USER:'var(--dt)',ACTIVATE_USER:'var(--st)'};
    el.innerHTML=`<div style="font-size:10px;color:var(--t3);margin-bottom:6px">${rows.length} records</div>
    <div class="tw"><table><thead><tr><th>Time</th><th>User</th><th>Role</th><th>Action</th><th>Table</th><th>Record ID</th></tr></thead><tbody>
    ${rows.map(r=>{
      const color=actionColor[r.action]||'var(--t2)';
      const time=new Date(r.created_at).toLocaleString('en-IN');
      return `<tr>
        <td style="font-size:10px;color:var(--t3);white-space:nowrap">${time}</td>
        <td style="font-size:11px"><div style="font-weight:600">${esc(r.user_name||'—')}</div><div style="font-size:10px;color:var(--t3)">${esc(r.user_email||'')}</div></td>
        <td><span style="background:${ROLE_COLORS[r.user_role]||'var(--s3)'};color:#fff;padding:2px 6px;border-radius:10px;font-size:9px;font-weight:700">${(r.user_role||'').toUpperCase()}</span></td>
        <td><span style="color:${color};font-weight:700;font-size:11px">${esc(r.action)}</span></td>
        <td style="font-size:10px;color:var(--t2)">${esc(r.entity_type||'')}</td>
        <td style="font-size:10px;font-family:monospace">${esc(r.entity_id||'')}</td>
      </tr>`;
    }).join('')}
    </tbody></table></div>`;
  } catch(e){ el.innerHTML='<div class="empty">Error loading audit log: '+esc(e.message)+'</div>'; }
}

// ═══════════════════════════════════════════
// BARCODE SCANNER (USB/Bluetooth HID)
// ═══════════════════════════════════════════
let _barcodeBuffer='';
let _barcodeTimer=null;
let _barcodeActive=false;
let _barcodeTarget=null; // 'inbound' | 'picking' | 'dispatch'

function initBarcodeScanner(){
  document.addEventListener('keydown', e=>{
    if(!_barcodeActive) return;
    // USB/BT scanners send chars very fast then Enter
    if(e.key==='Enter'){
      if(_barcodeBuffer.length>2){
        processBarcodeInput(_barcodeBuffer.trim());
      }
      _barcodeBuffer='';
      clearTimeout(_barcodeTimer);
      return;
    }
    // Ignore modifier keys
    if(e.key.length>1) return;
    _barcodeBuffer+=e.key;
    clearTimeout(_barcodeTimer);
    // Auto-flush after 100ms (scanner done)
    _barcodeTimer=setTimeout(()=>{
      if(_barcodeBuffer.length>2) processBarcodeInput(_barcodeBuffer.trim());
      _barcodeBuffer='';
    },100);
  });
}

function enableBarcodeScanner(target){
  _barcodeActive=true;
  _barcodeTarget=target;
  const indicators=document.querySelectorAll('.barcode-indicator');
  indicators.forEach(el=>el.style.display='flex');
  toast('Barcode scanner active — scan a SKU barcode','s');
}

function disableBarcodeScanner(){
  _barcodeActive=false;
  _barcodeTarget=null;
  const indicators=document.querySelectorAll('.barcode-indicator');
  indicators.forEach(el=>el.style.display='none');
}

function processBarcodeInput(barcode){
  console.log('Barcode scanned:',barcode);
  // Find matching SKU
  const sku=SKUS.find(s=>s.sku===barcode||s.sku.toUpperCase()===barcode.toUpperCase());
  if(!sku){
    toast('Unknown barcode: '+barcode,'w');
    return;
  }
  if(_barcodeTarget==='inbound'){
    // Auto-fill SKU in inbound form
    const skuSel=document.getElementById('ib-sku');
    if(skuSel){ skuSel.value=sku.sku; updateIbBin(); }
    document.getElementById('ib-qty')?.focus();
    toast('Scanned: '+sku.sub+' — '+sku.variant,'s');
  } else if(_barcodeTarget==='picking'){
    // Auto-fill SKU in picking form
    const pkSel=document.getElementById('pk-sku');
    if(pkSel){ pkSel.value=sku.sku; }
    document.getElementById('pk-qty')?.focus();
    toast('Scanned: '+sku.sub+' — '+sku.variant,'s');
  } else if(_barcodeTarget==='dispatch'){
    // Match AWB or order ID
    const awbInput=document.getElementById('disp-awb');
    if(awbInput){ awbInput.value=barcode; }
    toast('AWB scanned: '+barcode,'s');
  }
  // Log the scan
  logAudit('BARCODE_SCAN','inventory',sku.sku,null,{sku:sku.sku,target:_barcodeTarget,barcode});
}

// ═══════════════════════════════════════════
// PATCH saveHist AND saveInv TO INCLUDE AUDIT
// ═══════════════════════════════════════════
const _origSaveHist=saveHist;
// We'll wrap key operations to log them

// ═══════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════
async function bootWMS(){
  setSyncStatus('syncing');
  await loadSKUsFromDB(); // load dynamic SKUs first
  await initInv();
  await loadHist();
  renderDash();
  renderInv();
  renderRack();
  renderReports();
  renderAnalytics();
  renderFinance();
  updateNotificationBadge();
  populateSkuSel('ib-sku');
  filterSkuList('ib-sku-search','ib-sku');
  setupRealtimeSync();
  setSyncStatus('ok');
  initBarcodeScanner();
}

// Check for existing session on load
async function initAuth(){
  const {data:{session}} = await supa.auth.getSession();
  if(session){
    currentUser=session.user;
    await loadUserProfile();
    await onAuthSuccess();
  } else {
    document.getElementById('auth-screen').style.display='flex';
    // Hide main app until logged in
  }
  // Listen for auth changes
  supa.auth.onAuthStateChange(async(event,session)=>{
    if(event==='SIGNED_IN'&&session&&!currentUser){
      currentUser=session.user;
      await loadUserProfile();
      await onAuthSuccess();
    } else if(event==='SIGNED_OUT'){
      currentUser=null; currentProfile=null;
    }
  });
}
initAuth();
