export function toggleDirection() {
  const root = window.document.documentElement;
  const currentDir = root.getAttribute('dir');
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  
  root.setAttribute('dir', newDir);
  root.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
}
