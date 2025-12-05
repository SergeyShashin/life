'use strict';
/**
 * Объект игры
 */
const life = {
  containerEl: null,
  modelingEl: null, //переделать на класс, наверное, с другим названием.
  world: null,
  map: null,
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
    this.control = new Control([
      { class: 'btn', id: 'btnAutomaticControlOrHandControl', textRu: 'Ручной' },
      { class: 'btn', id: 'btnResources', textRu: 'Ресурсы' },
      { class: 'btn', id: 'btnMap', textRu: 'Карта' },
      { class: 'btn', id: 'btnSettings', textRu: 'Настройки' },
      { class: 'btn', id: 'btnStartGame', textRu: 'Вжух' },
      // { class: 'btn', id: 'btnChange', textRu: 'Менялка' },
      // { class: 'btn', id: 'btnVote', textRu: 'Голосовалка' },
    ]);
    //Создаёт HTML элемент объекта control и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.control.createControlHTMLEl());

    //Создаёт объект класса Word.
    this.world = new World();
    //Создаёт HTML элемент объекта world.info и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.world.info.createInfoHTMLEl());

    //Создаёт объект класса Settings.    
    this.settings = new Settings();
    //Создаёт HTML элемент объекта setttings и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.settings.createSettingsHTMLEl());

    //переделать на класс. Сделать создание в JS. Сейчас черновик в HTML.
    this.modelingEl = document.getElementById('modeling');
    //Добавляет в HTML элемент settings тэг datlist с данными о профилях семей. Для выбора в инпуте профиля семьи. ('программисты', 'инженеры', 'врачи', 'повара', ...)
    this.settings.getSettingsEl().appendChild(this.settings.createDatalistTypesFamilyHTMLEl());

    //Добавляет в HTML элемент settings тэг datlist с данными о делах. Для выбора в инпуте дела. ('программирование c семьёй и друзьями, ...приём пищи c семьёй и друзьями, ...')
    this.settings.getSettingsEl().appendChild(this.settings.createDatalistInvestingTimeHTMLEl());

    //Создаёт объект класса Map.
    this.map = new Map();
    //Создаёт HTML элемент объекта  и добавляет его в HTML элемент игры
    this.containerEl.appendChild(this.map.createMapHTMLEl());

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
      let headerHTMLEl = document.createElement('h3');
      headerHTMLEl.textContent = `${i + 1} человек`;

      let humanHTMLEl = human.createHumanHTMLEl();

      humanHTMLEl.appendChild(human.createFirtNameHTMLEl());
      humanHTMLEl.appendChild(human.createNumberDayLifeHTMLEl());
      humanHTMLEl.appendChild(human.createCoordinatesStartingPointHTMLEl());
      humanHTMLEl.appendChild(human.createTypesFamilyHTMLEl());

      humanHTMLEl.appendChild(human.createHeadEl());
      humanHTMLEl.appendChild(human.createInvestingTimeHTMLEl(this.settings.getToDoList()));

      this.settings.getSettingsEl().appendChild(headerHTMLEl);
      this.settings.getSettingsEl().appendChild(humanHTMLEl);
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
        this.map.hideMapHTMLEl();

        for (let i = 1; i < this.settings.getSizeTeam() + 2; i++) {
          this.containerEl.appendChild(new Days(i, [
            { day: 1, hour: 0, minute: 0, second: 0, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 1, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 2, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 3, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 4, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 5, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 7, business: 'сон' },
            { day: 1, hour: 0, minute: 0, second: 8, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 9, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 10, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 11, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 12, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 13, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 14, business: 'Программирование с семьёй и друзьями.' },
            { day: 1, hour: 0, minute: 0, second: 15, business: 'Программирование с семьёй и друзьями.' },
            {
              day: 1, hour: 0, minute: 0, second: 16, business: '\
          *создать дефолтные списки под каждого человека life/databases/json/softwareEngineerList.json и др.\
          * при размере группы 14 человек \
          * 86400 секунд в сутках\
          * 43800 суток за 120 лет\
          * \
          * 3 784 320 000 секунд/записей для одного человека\
          * 52 980 480 000 секунд/записей для группы из 14 человек\
          * \
          * для одной записи без заголовка таблицы 5 тегов\
          * 264 902 400 000 тегов для группы из 14 человек\
          * \
          * нет знаний или опыта, как это структурировать\
          */' },
          ]).createDayHTMLEl());
        }

        break;
      case 'btnAutomaticControlOrHandControl':
        this.control.toggleTextBtn(e.target, 'автоматический', 'ручной');
        break;
      case 'btnResources':
        this.world.info.toggleInfoEl();
        break;
      case 'btnMap':
        this.map.toggleMapHTMLEl();
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