'use strict';

const human = new Human('{new dateBirth}', '{new placeBirth}', '{new firstName}', '{new surname}', '{new patronymic}');
console.log(human);

const life = {
  timeEL: null,
  interval: null,
  worldInfoEl: null,
  settingsEl: null,
  modelingEl: null,
  btnAutomaticControlOrHandControlEl: null,

  run() {
    this.init();
    this.setEventHandlers(this.settingsEl);
  },

  init() {
    this.timeEL = document.querySelector('time');
    this.interval = setInterval(() => timeEL.textContent = new Date(), 1000);
    this.worldInfoEl = document.getElementById('worldInfo');
    this.settingsEl = document.getElementById('settings');
    this.modelingEl = document.getElementById('modeling');
    this.btnAutomaticControlOrHandControlEl = document.getElementById('btnAutomaticControlOrHandControl');
  },

  setEventHandlers() {
    window.addEventListener('click', e => this.handlerClickBtn(e));
  },

  handlerClickBtn(e) {
    switch (e.target.id) {
      case 'btnStartGame':
        this.worldInfoEl.style.display = 'none';
        this.settingsEl.style.display = 'none';
        this.modelingEl.style.display = 'block';
        break;
      case 'btnAutomaticControlOrHandControl':
        this.btnAutomaticControlOrHandControlEl.textContent = this.btnAutomaticControlOrHandControlEl.textContent === 'Ручное' ? 'Автоматическое' : 'Ручное';
        break;
      case 'btnMap':
        this.worldInfoEl.style.display = this.worldInfoEl.style.display === 'none' ? 'flex' : 'none';
        break;
      case 'btnSettings':
        this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
        break;
    }
  }
}

window.onload = life.run();