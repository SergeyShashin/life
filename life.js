'use strict';

const life = {
  containerEl: null,
  modelingEl: null, //переделать на класс, наверное, с другим названием.
  world: null,
  time: null,
  control: null,
  settings: null,

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

    this.settings = new Settings();
    this.containerEl.appendChild(this.settings.createSettingsHTMLEl());

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

      this.settings.getSettingsEl().appendChild(human.createFirtNameHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createNumberDayLifeHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createTypesFamilyHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createHeadEl());

    }

  },

  setEventHandlers() {
    window.addEventListener('click', e => this.handlerClickBtn(e));
  },

  handlerClickBtn(e) {
    switch (e.target.id) {
      case 'btnStartGame':
        this.world.info.hideInfoEl();
        this.settings.hideSettingsEl();
        this.modelingEl.style.display = 'block'; // переделать на show после создания класса
        break;
      case 'btnAutomaticControlOrHandControl':
        this.control.toggleBtnAutomaticControlOrHandControlEl();
        break;
      case 'btnMap':
        this.world.info.toggleInfoEl();
        break;
      case 'btnSettings':
        this.settings.toggleSettingsEl();
        break;
      case 'btnMinusDay':
      case 'btnPlusDay':
        this.time.updateTime(e.target.dataset.dayvalue);
        break;
    }
  },

};

window.onload = life.run();