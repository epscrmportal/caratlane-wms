-- Diagnostic only — no writes. MOBILE_PICK_COMPLETE audit entries only
-- come from the mobile scan-driven pick flow — checking for their
-- presence tells us whether the broken picks (≤250) and working picks
-- (≥255) went through different code paths (mobile vs desktop).
select entity_id as pick_task_id, action, created_at
from public.audit_log
where entity_id in (
  'PCK-224851','PCK-342063','PCK-972863','PCK-703965','PCK-531077','PCK-468900',
  'PCK-244291','PCK-860486','PCK-473448','PCK-179542','PCK-045058','PCK-942933',
  'PCK-832187','PCK-758229','PCK-595474','PCK-458052',
  'PCK-643420','PCK-360505','PCK-070983','PCK-917160','PCK-775964','PCK-630702','PCK-542874'
)
order by created_at;
