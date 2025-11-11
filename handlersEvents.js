'use strict';
let worldInfoEl=document.getElementById('worldInfo');
let startSettingsEl = document.getElementById('startSettings');
let modelingEl = document.getElementById('modeling');
let btnAutomaticControlOrHandControlEl = document.getElementById('btnAutomaticControlOrHandControl');

window.addEventListener('click', e => handlerClickBtn(e));

function handlerClickBtn(e) {
  switch (e.target.id) {
    case 'btnStartGame':
      worldInfoEl.style.display = 'none';
      startSettingsEl.style.display = 'none';
      modelingEl.style.display = 'block';
      break;
    case 'btnAutomaticControlOrHandControl':
      btnAutomaticControlOrHandControlEl.textContent = btnAutomaticControlOrHandControlEl.textContent === 'Ручное управление' ? 'Автоматическое управление' : 'Ручное управление';
      break;
  }

}
