(() => {
  const container = document.getElementById('brevo-form');
  const fallback = document.getElementById('brevo-fallback');
  const link = document.getElementById('brevo-open');
  const url = (window.SAGES_BREVO_FORM_URL || '').trim();
  if (!container || !url) return;
  let parsed;
  try { parsed = new URL(url); } catch { return; }
  if (parsed.protocol !== 'https:' || !(/(^|\.)sibforms\.com$/.test(parsed.hostname) || /(^|\.)brevo\.com$/.test(parsed.hostname))) return;
  const iframe = document.createElement('iframe');
  iframe.src = parsed.href;
  iframe.title = 'Formulaire sécurisé d’inscription à la newsletter du SAGES';
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
  iframe.style.cssText = 'width:100%;min-height:530px;border:0;display:block';
  container.replaceChildren(iframe);
  link.href = parsed.href; fallback.hidden = false;
})();
