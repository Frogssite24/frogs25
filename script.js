function scrollToFeatures() {
  document.getElementById('features').scrollIntoView({behavior:'smooth'});
}

const customizerBtn = document.getElementById('customizer');
const customizerPanel = document.getElementById('customizer-panel');

customizerBtn.addEventListener('click', () => {
  customizerPanel.classList.toggle('open');
});

const colorPicker = document.getElementById('colorPicker');
const bgPicker = document.getElementById('bgPicker');
const textPicker = document.getElementById('textPicker');
const radiusPicker = document.getElementById('radiusPicker');
const fontPicker = document.getElementById('fontPicker');

colorPicker.addEventListener('input', e => document.documentElement.style.setProperty('--main-color', e.target.value));
bgPicker.addEventListener('input', e => document.documentElement.style.setProperty('--bg-color', e.target.value));
textPicker.addEventListener('input', e => document.documentElement.style.setProperty('--text-color', e.target.value));
radiusPicker.addEventListener('input', e => document.documentElement.style.setProperty('--radius', e.target.value+'px'));
fontPicker.addEventListener('change', e => document.documentElement.style.setProperty('--font', e.target.value));
