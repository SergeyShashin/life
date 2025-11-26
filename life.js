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
  world: null,
  time: null,
  control: null,

  run() {
    this.init();
    this.setEventHandlers(this.settingsEl);
  },

  init() {
    this.containerEl = document.querySelector('.container');
    this.time = new Time();
    this.containerEl.appendChild(this.time.createTimeHTMLEl());
    this.control = new Control();
    this.containerEl.appendChild(this.control.createControlHTMLEl());

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
        this.control.toggleBtnAutomaticControlOrHandControlEl();
        break;
      case 'btnMap':
        this.world.info.toggleInfoEl();
        break;
      case 'btnSettings':
        this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
        break;
      case 'btnMinusDay':
      case 'btnPlusDay':
        this.time.updateTime(e.target.dataset.dayvalue);
        break;
    }
  },
 
};

window.onload = life.run();