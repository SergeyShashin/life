'use strict';

/**
 * Настройки игры
 */
class Settings {
  //размер гуппы
  sizeTeam = 14; //120
  //HTML элемент настроек
  settingsEl;
  //HTML элемент с заголовком и инпутом для просмотра и редактирования размера группы
  sizeTeamEl;
  //HTML элемент input с для просмотра и редактирования размера группы
  inputSizeTeamEl;
  //Часто используемые сочетания слов
  frequentlyUsedPhrases = [' c семьёй и друзьями'];
  //Профили семей
  typesFamily = [
    'программисты', 'инженеры', 'врачи', 'повара', 'дизайнеры', 'парикмахеры',
    'агрономы', 'ветеренары', 'cтроители', 'ювелиры', 'писатели', 'музыканты', 'певцы', 'танцоры'
  ];
  //Список возможных дел человека.
  todoList = [
    'программирование' + this.frequentlyUsedPhrases[0], 'программирование',
    'математика' + this.frequentlyUsedPhrases[0], 'математика',
    'русский язык' + this.frequentlyUsedPhrases[0], 'русский язык',
    'латинский язык' + this.frequentlyUsedPhrases[0], 'латинский язык',
    'английский язык' + this.frequentlyUsedPhrases[0], 'английский язык',
    'китайский язык' + this.frequentlyUsedPhrases[0], 'китайский язык',
    'арабский язык' + this.frequentlyUsedPhrases[0], 'арабский язык',
    'французский язык' + this.frequentlyUsedPhrases[0], 'французский язык',
    'анатомия' + this.frequentlyUsedPhrases[0], 'анатомия',
    'биология' + this.frequentlyUsedPhrases[0], 'биология',
    'астрономия' + this.frequentlyUsedPhrases[0], 'астрономия',
    'физика' + this.frequentlyUsedPhrases[0], 'физика',
    'химия' + this.frequentlyUsedPhrases[0], 'химия',
    'география' + this.frequentlyUsedPhrases[0], 'география',
    'история' + this.frequentlyUsedPhrases[0], 'история',
    'живопись' + this.frequentlyUsedPhrases[0], 'живопись',
    'скульптура' + this.frequentlyUsedPhrases[0], 'скульптура',
    'немецкий язык' + this.frequentlyUsedPhrases[0], 'немецкий язык',
    'итальянский язык' + this.frequentlyUsedPhrases[0], 'итальянский язык',
    'японский язык' + this.frequentlyUsedPhrases[0], 'японский язык',
    'иврит' + this.frequentlyUsedPhrases[0], 'иврит',
    'арамейский язык' + this.frequentlyUsedPhrases[0], 'арамейский язык',
    'армянский язык' + this.frequentlyUsedPhrases[0], 'армянский язык',
    'греческий язык' + this.frequentlyUsedPhrases[0], 'греческий язык',
    'хинди' + this.frequentlyUsedPhrases[0], 'хинди',
    'чтение художественной литературы' + this.frequentlyUsedPhrases[0], 'чтение художественной литературы',
    'создание продуктов питания' + this.frequentlyUsedPhrases[0], 'создание продуктов питания',
    'создание одежды' + this.frequentlyUsedPhrases[0], 'создание одежды',
    'создание посуды' + this.frequentlyUsedPhrases[0], 'создание посуды',
    'создание мебели' + this.frequentlyUsedPhrases[0], 'создание мебели',
    'создание инструментов' + this.frequentlyUsedPhrases[0], 'создание инструментов',
    'создание оборудования' + this.frequentlyUsedPhrases[0], 'создание оборудования',
    'создание роботов' + this.frequentlyUsedPhrases[0], 'создание роботов',
    'создание постельных принадлежностей' + this.frequentlyUsedPhrases[0], 'создание постельных принадлежностей',
    'строительство зданий' + this.frequentlyUsedPhrases[0], 'строительство зданий',
    'монтаж' + this.frequentlyUsedPhrases[0] + 'систем электроснабжения, систем водоснабжения,  систем отопления, систем газоснабжения, электроустановочных изделий,  ЛВС, линий для перемещения людей', 'монтаж систем электроснабжения, систем водоснабжения,  систем отопления, систем газоснабжения, электроустановочных изделий,  ЛВС, линий для перемещения людей.',
    'создание средств связи' + this.frequentlyUsedPhrases[0], 'создание средств связи',
    'создание компьютеров' + this.frequentlyUsedPhrases[0], 'создание компьютеров',
    'создание, ' + this.frequentlyUsedPhrases[0] + ', капсул для перемещения людей', 'создание капсул для перемещения людей и грузов',
    'создание, ' + this.frequentlyUsedPhrases[0] + ', рельс по которым будут передвигаться капсулы', 'создание рельс по которым будут передвигаться капсулы',
    'произвдоство бетона' + this.frequentlyUsedPhrases[0], 'произвдоство бетона',
    'приготовление пищи' + this.frequentlyUsedPhrases[0], 'приготовление пищи',
    'приём пищи' + this.frequentlyUsedPhrases[0], 'приём пищи',
    'душ',
    'туалет',
    'стирка',
    'глажка',
    'мойка',
    'уборка',
    'сон' + this.frequentlyUsedPhrases[0], 'сон',
  ];
  //HTML элемент с типами профилей семей.
  datalistTypesFamilyHTMLEl;
  //HTML элемент с возможными делами.
  datalistInvestingTimeHTMLEl;

  /**
   * Создаёт HTML элемент с настройками игры.
   * @returns {HTMLElement} HTML элемент c настройками игры.
   */
  createSettingsHTMLEl() {
    //создание HTML элемента с настройками.
    this.settingsEl = document.createElement('section');
    //установка id для HTML элемента с настройками
    this.settingsEl.id = 'settings';

    //создание заголовка для настроек.
    let headerSettingsEl = document.createElement('h3');
    //установка текста для заголовка настроек.
    headerSettingsEl.textContent = 'Настройки';

    //создание HTML элемента для заголовка и инпута размера группы.
    this.sizeTeamEl = document.createElement('section');
    //установка класса 
    this.sizeTeamEl.classList.add('inputGroup');
    //установка id для HTML элмента с размером группы.
    this.sizeTeamEl.id = 'sizeTeam';
    //создание HTML элемента заголовка размера группы.
    let headerSizeTeamEl = document.createElement('h4');
    //установка текста в заголовок размера группы.
    headerSizeTeamEl.textContent = 'размер группы';
    //создание HTMl элемента input.
    this.inputSizeTeamEl = document.createElement('input');
    //установка инпуту name.
    this.inputSizeTeamEl.name = 'inputSizeTeam';
    //установка типа инпута.
    this.inputSizeTeamEl.type = 'number';
    //установка минимального значения инпута.
    this.inputSizeTeamEl.min = 1;
    //установка максимального значения инпута.
    this.inputSizeTeamEl.value = this.sizeTeam;

    this.sizeTeamEl.appendChild(headerSizeTeamEl);
    this.sizeTeamEl.appendChild(this.inputSizeTeamEl);

    this.settingsEl.appendChild(headerSettingsEl);
    this.settingsEl.appendChild(this.sizeTeamEl);

    return this.settingsEl
  }

  /**
   * Возвращает HTML элемент настроек игры.
   * @returns {HTMLElement} HTML элемент настроек игры.
   */
  getSettingsEl() {
    return this.settingsEl;
  }

  /**
   * Возвращает размер группы.
   * @returns {Number} 
   */
  getSizeTeam() {
    return this.sizeTeam;
  }

  /**
   * Возвращает HTML элементы группы.
   * @returns {HTMLElement}
   */
  getSizeTeamEl() {
    return this.sizeTeamEl;
  }

  /**
   * Возвращает HTML элемент группы.
   * @returns {HTMLElement}
   */
  getInputSizeTeamEl() {
    return this.inputSizeTeamEl;
  }

  /**
   * Включение/отключение видимости HTML элемента настроек.
   */
  toggleSettingsEl() {
    this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'block' : 'none';
  }

  /**
   * Отключение видимости HTML элемента настроек. 
   */
  hideSettingsEl() {
    this.settingsEl.style.display = 'none';
  }

  /**
   * Включение видимости HTML элемента настроек.
   */
  showSettingsEl() {
    this.infoEl.style.display = 'block';
  }

  /**
   * Добавление дела в список дел человека. Пример { day: 1, hour: 0, minute: 0, second: 8, business: 'Программирование с семьёй и друзьями.' },.
   * @param {Object} business
   */
  addToDoList(business) {
    this.todoList.push(business);
  }

  /**
   * Возвращает список дел человека.
   * @returns {Array} Список дел человека.
   */
  getToDoList() {
    return this.todoList;
  }

  /**
   * Создаёт datalist для выбора типа семьи в инпуте, который создаётся в
   * human.createTypesFamilyHTMLEl()
   * @returns {HTMLElement} datalist для выбора типа семьи в инпуте.
   */
  createDatalistTypesFamilyHTMLEl() {
    this.datalistTypesFamilyHTMLEl = document.createElement('datalist');
    this.datalistTypesFamilyHTMLEl.id = 'datalistTypesFamilyHTMLEl';

    for (let typeFamily of this.typesFamily) {
      let optionEl = document.createElement('option');
      optionEl.value = typeFamily;
      this.datalistTypesFamilyHTMLEl.appendChild(optionEl);
    }

    return this.datalistTypesFamilyHTMLEl;
  };

  /**
   * Возвращает datalist для выбора типа семьи в инпуте, который создаётся в
   * human.createTypesFamilyHTMLEl()
   * @returns {HTMLElement} datalist для выбора типа семьи в инпуте.
   */
  getDatalistTypesFamilyHTMLEl() {
    return this.datalistTypesFamilyHTMLEl;
  }

  /**
   * Создаёт datalist для выбора дела в инпуте, который создаётся в
   * createInvestingTimeHTMLEl()
   * @returns {HTMLElement} datalist для выбора для выбора дела в инпуте.
   */
  createDatalistInvestingTimeHTMLEl() {
    this.datalistInvestingTimeHTMLEl = document.createElement('datalist');
    this.datalistInvestingTimeHTMLEl.id = 'datalistInvestingTimeHTMLEl';

    for (let business of this.todoList) {
      let optionEl = document.createElement('option');
      optionEl.value = business;
      this.datalistInvestingTimeHTMLEl.appendChild(optionEl);
    }

    return this.datalistInvestingTimeHTMLEl;
  };

  /**
 * Возвращает datalist для выбора дела в инпуте, который создаётся в
 * createInvestingTimeHTMLEl()
 * @returns {HTMLElement} datalist для выбора для выбора дела в инпуте.
 */
  getDatalistInvestingTimeHTMLEl() {
    return this.datalistInvestingTimeHTMLEl;
  };


}