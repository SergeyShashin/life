'use strict';

class Settings {
  sizeTeam = 14; //120
  settingsEl;
  sizeTeamEl;
  inputSizeTeamEl;
  frequentlyUsedPhrases = ['c семьёй и друзьями'];
  typesFamily = [
    'программисты', 'инженеры', 'врачи', 'повара', 'дизайнеры', 'парикмахеры',
    'агрономы', 'ветеренары', 'cтроители', 'ювелиры', 'писатели', 'музыканты', 'певцы', 'танцоры'
  ];
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
  datalistTypesFamilyHTMLEl;

  createSettingsHTMLEl() {
    this.settingsEl = document.createElement('section');
    this.settingsEl.id = 'settings';

    let headerSettingsEl = document.createElement('h2');
    headerSettingsEl.textContent = 'Настройки';

    this.sizeTeamEl = document.createElement('div');
    this.sizeTeamEl.id = 'sizeTeam';
    let headerSizeTeamEl = document.createElement('h4');
    headerSizeTeamEl.textContent = 'размер группы';
    this.inputSizeTeamEl = document.createElement('input');
    this.inputSizeTeamEl.name = 'inputSizeTeam';
    this.inputSizeTeamEl.type = 'number';
    this.inputSizeTeamEl.min = 1;
    this.inputSizeTeamEl.value = this.sizeTeam;

    this.sizeTeamEl.appendChild(headerSizeTeamEl);
    this.sizeTeamEl.appendChild(this.inputSizeTeamEl);

    this.settingsEl.appendChild(headerSettingsEl);
    this.settingsEl.appendChild(this.sizeTeamEl);

    return this.settingsEl
  }

  getSettingsEl() {
    return this.settingsEl;
  }

  getSizeTeam() {
    return this.sizeTeam;
  }

  getSizeTeamEl() {
    return this.sizeTeamEl;
  }

  getInputSizeTeamEl() {
    return this.inputSizeTeamEl;
  }

  toggleSettingsEl() {
    this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
  }

  hideSettingsEl() {
    this.settingsEl.style.display = 'none';
  }

  showSettingsEl() {
    this.infoEl.style.display = 'inline-block';
  }

   addToDoList(business) {
    this.todoList.push(business);
  }

  getToDoList() {
    return this.todoList;
  }

  //Создаёт datalist для выбора типа семьи в инпуте, который создаётся в
  //human.createTypesFamilyHTMLEl()
  createDatalistTypesFamilyHTMLEl() {
    this.datalistTypesFamilyHTMLEl = document.createElement('datalist');
    this.datalistTypesFamilyHTMLEl.id = 'datalistTypesFamilyHTMLEl';

    for (let typeFamily of this.typesFamily) {
      let optionEl = document.createElement('option');
      optionEl.value = typeFamily;
      this.datalistTypesFamilyHTMLEl.appendChild(optionEl);
    }

    return this.datalistTypesFamilyHTMLEl
  };

  //Создаёт datalist для выбора дела в инпуте, который создаётся в 
  // createInvestingTimeHTMLEl()
  createDatalistInvestingTimeHTMLEl() {
    this.datalistInvestingTimeHTMLEl = document.createElement('datalist');
    this.datalistTypesFamilyHTMLEl.id = 'datalistInvestingTimeHTMLEl';

    for (let business of this.todoList) {
      let optionEl = document.createElement('option');
      optionEl.value = business;
      this.datalistInvestingTimeHTMLEl.appendChild(optionEl);
    }

    return this.datalistInvestingTimeHTMLEl
  };


}