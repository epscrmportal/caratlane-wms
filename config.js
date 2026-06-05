// ═══ SECURITY — HTML SANITIZER ═══
function esc(str){
  if(str===null||str===undefined) return '';
  const s=String(str);
  const map={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'};
  return s.replace(/[&<>"']/g,c=>map[c]||c);
}
function escAttr(str){
  if(str===null||str===undefined) return '';
  const s=String(str);
  const map={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'};
  return s.replace(/[&<>"]/g,c=>map[c]||c);
}
// Input validator
function validateAWB(awb){ return /^[A-Za-z0-9\-]{4,30}$/.test(awb); }
function validateOrderId(id){ return /^[A-Za-z0-9\-_]{3,40}$/.test(id); }
function validateQty(q){ const n=parseInt(q); return !isNaN(n)&&n>0&&n<=9999; }
function validateWeight(w){ const n=parseFloat(w); return !isNaN(n)&&n>0&&n<=999; }
function validateDimension(d){ const n=parseFloat(d); return !isNaN(n)&&n>0&&n<=999; }
function validateEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validatePincode(p){ return /^\d{6}$/.test(p); }
function validatePhone(p){ return /^[+\d\s\-]{7,15}$/.test(p); }
// Rate limiter — prevent rapid repeated saves
const _rateLimits={};
function rateLimit(key,ms=2000){
  const now=Date.now();
  if(_rateLimits[key]&&now-_rateLimits[key]<ms) return false;
  _rateLimits[key]=now; return true;
}

// ═══ SUPABASE CLOUD CONFIG ═══
const SUPA_URL = 'https://lqpqsrdxcxefxvobmnjc.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcHFzcmR4Y3hlZnh2b2JtbmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NjU3OTcsImV4cCI6MjA5NjE0MTc5N30.6KhLZw5gu0PqGCAPex6sYAOcYJtz89Xm1abRtUbKnEM';
const supa = supabase.createClient(SUPA_URL, SUPA_KEY);
let _supaReady = false;
let _pendingSaves = [];

// Show sync status in UI
function setSyncStatus(state) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  const cfg = {
    syncing: {color:'var(--wt)', icon:'ti-cloud-upload', text:'Syncing...'},
    ok:      {color:'var(--st)', icon:'ti-cloud-check',  text:'Cloud synced'},
    error:   {color:'var(--dt)', icon:'ti-cloud-x',      text:'Sync error'},
    offline: {color:'var(--t3)', icon:'ti-cloud-off',    text:'Offline'}
  }[state] || {color:'var(--t3)', icon:'ti-cloud', text:''};
  el.innerHTML = `<i class="ti ${cfg.icon}" style="font-size:13px"></i><span style="font-size:10px">${cfg.text}</span>`;
  el.style.color = cfg.color;
}
