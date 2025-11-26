'use strict';

const settings = {
  sizeTeam: 14, //120
  getSizeTeam() {
    return this.sizeTeam
  },
};

const life = {
  settings,
  containerEl: null,
  settingsEl: null,
  modelingEl: null,
  btnAutomaticControlOrHandControlEl: null,
  // date: null,
  // interval: null,
  world: null,
  time: null,

  run() {
    this.init();
    this.setEventHandlers(this.settingsEl);
  },

  init() {
    this.containerEl = document.querySelector('.container');
    this.time = new Time();
    this.containerEl.appendChild(this.time.createTimeHTMLEl());
    // this.date = new Date();
    // this.interval = setInterval(() => {
    //   this.date.setSeconds(this.date.getSeconds() + 1);
    //   this.renderTime();
    // }, 1000);

    this.world = new World();
    this.containerEl.appendChild(this.world.info.createInfoHTMLEl());
    this.world.info.renderInfoHTMLEl();

    this.settingsEl = document.getElementById('settings');
    this.modelingEl = document.getElementById('modeling');
    this.btnAutomaticControlOrHandControlEl = document.getElementById('btnAutomaticControlOrHandControl');

    for (let i = 0; i < this.settings.getSizeTeam(); i++) {
      const human = new Human(
        { year: 0, month: 0, day: 1, hour: 0, minute: 0, second: 0 },
        '[00.000000, 00.000000]', '', '', '', i);

      human.createHeadEl(`head${i}`);
      human.renderHead(this.settingsEl);

    }

  },

  setEventHandlers() {
    window.addEventListener('click', e => this.handlerClickBtn(e));
  },

  handlerClickBtn(e) {
    switch (e.target.id) {
      case 'btnStartGame':
        this.world.info.hideInfoEl();
        this.settingsEl.style.display = 'none';
        this.modelingEl.style.display = 'block';
        break;
      case 'btnAutomaticControlOrHandControl':
        this.btnAutomaticControlOrHandControlEl.textContent = this.btnAutomaticControlOrHandControlEl.textContent === 'Ручное' ? 'Автоматическое' : 'Ручное';
        break;
      case 'btnMap':
        // this.worldInfoEl.style.display = this.worldInfoEl.style.display === 'none' ? 'flex' : 'none';
        this.world.info.toggleInfoEl();
        break;
      case 'btnSettings':
        this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
        break;
      case 'btnMinusDay':
      case 'btnPlusDay':
        // this.updateDate(e.target.dataset.dayvalue);
        this.time.updateTime(e.target.dataset.dayvalue);
        break;
    }
  },
  // renderTime() {
  //   this.timeEL.textContent = `${this.date.getFullYear()}:${this.date.getMonth() + 1}:${this.date.getDate()} ${this.date.toTimeString()}`;
  // },
  // updateDate(quantityDay) {
  //   this.date.setDate(this.date.getDate() + Number(quantityDay));
  //   this.renderTime();
  // }
};

window.onload = life.run();