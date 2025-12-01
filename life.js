'use strict';
/**
 * Объект игры
 */
const life = {
  containerEl: null,
  modelingEl: null, //переделать на класс, наверное, с другим названием.
  world: null,
  time: null,
  control: null,
  settings: null,

  /**
   * Запуск игры
   */
  run() {
    //инициализация
    this.init();
    //установка слушателей событий
    this.setEventHandlers(this.settingsEl);
  },

  /**
   * Инициализация при старте игры
   */
  init() {
    //Находит HTML элемент игры
    this.containerEl = document.getElementById('life');

    //Создаёт объект класса Time. Текущая дата с возможностью передвигать день
    this.time = new Time();
    //Создаёт HTML элемент объекта time и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.time.createTimeHTMLEl());

    /*Создаёт объект класса Control. Кнопки: кнопка переключения ручного 
    или автоматического режима игры, кнопка включения/отключения карты, 
    кнопка включения/отключения настроек. В дальнейшем и другие кнопки.*/
    //todo перекинуть в этот блок кнопку старт, которая сейчас в HTML
    this.control = new Control();
    //Создаёт HTML элемент объекта control и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.control.createControlHTMLEl());

    //Создаёт объект класса Settings.    
    this.settings = new Settings();    
    //Создаёт HTML элемент объекта setttings и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.settings.createSettingsHTMLEl());

    //Создаёт объект класса Word.
    this.world = new World();
    //Создаёт HTML элемент объекта world.info и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.world.info.createInfoHTMLEl());

    //переделать на класс. Сделать создание в JS. Сейчас черновик в HTML.
    this.modelingEl = document.getElementById('modeling');
    //Добавляет в HTML элемент settings тэг datlist с данными о профилях семей. Для выбора в инпуте профиля семьи. ('программисты', 'инженеры', 'врачи', 'повара', ...)
    this.settings.getSettingsEl().appendChild(this.settings.createDatalistTypesFamilyHTMLEl());

    //Добавляет в HTML элемент settings тэг datlist с данными о делах. Для выбора в инпуте дела. ('программирование c семьёй и друзьями, ...приём пищи c семьёй и друзьями, ...')
    this.settings.getSettingsEl().appendChild(this.settings.createDatalistInvestingTimeHTMLEl());

    //Создает заданное количество людей для группы и добавляет их параметры в HTML элемент settings.
    this.createHumanForGroup()
  },

  /**
   * Создает заданное количество людей для группы и добавляет их параметры в HTML элемент settings.
   */
  createHumanForGroup() {
    for (let i = 0; i < this.settings.getSizeTeam(); i++) {
      const human = new Human(
        { year: 0, month: 0, day: 1, hour: 0, minute: 0, second: 0 },
        '[00.000000, 00.000000]', '', '', '', i);

      this.settings.getSettingsEl().appendChild(human.createFirtNameHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createNumberDayLifeHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createTypesFamilyHTMLEl());
      this.settings.getSettingsEl().appendChild(human.createHeadEl());

      this.settings.getSettingsEl().appendChild(human.createInvestingTimeHTMLEl(this.settings.getToDoList()));
    }

  },

  /**
   * Устанавливает слушатели событий
   */
  setEventHandlers() {
    window.addEventListener('click', e => this.handlerClickBtn(e));
  },

  /**
   * При клике мышкой вызывает соответствующий обработчики
   * @param {Event} Событие при клике в WINDOW
   */
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

/**
 * Запуск игры
 */
window.onload = life.run();