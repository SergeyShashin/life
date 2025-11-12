'use strict';
let worldInfoEl=document.getElementById('worldInfo');
let settingsEl = document.getElementById('settings');
let modelingEl = document.getElementById('modeling');
let btnAutomaticControlOrHandControlEl = document.getElementById('btnAutomaticControlOrHandControl');

window.addEventListener('click', e => handlerClickBtn(e));

function handlerClickBtn(e) {
  switch (e.target.id) {
    case 'btnStartGame':
      worldInfoEl.style.display = 'none';
      settingsEl.style.display = 'none';
      modelingEl.style.display = 'block';
      break;
    case 'btnAutomaticControlOrHandControl':
      btnAutomaticControlOrHandControlEl.textContent = btnAutomaticControlOrHandControlEl.textContent === 'Ручное' ? 'Автоматическое' : 'Ручное';
      break;
    case 'btnMap':
      worldInfoEl.style.display = worldInfoEl.style.display === 'none' ? 'flex' : 'none';
      break;
    case 'btnSettings':
      settingsEl.style.display = settingsEl.style.display === 'none' ? 'inline-block' : 'none';
      break;
  }

}
