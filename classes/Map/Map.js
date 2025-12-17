'use strict'

/**
 * Карта
 * Можно добавить, изменить любое свойство или удалить любой объект.
 * Поменять рельеф.
 * Создать объект, которого ещё не существует.
 * Онлайн подгрузка обновлений других пользователей.
 * Возможность оставить комментарии или проголосовать за добавление, удаление, изменение другими пользователями.
 */
class Map {
  //HTML элемент карты
  mapHTMLEl;

  //Кнопки
  control;

  //HTML элемент изображения карты
  mapImgHTMLEl;

  settingsMap = {
    minValueRowsCount: -90, //latitude 
    maxValueRowsCount: 90,  //latitude
    minValueColsCount: -180, //longitude 
    maxValueСolsCount: 180,  //longitude
    //возможно на будущее, масштаб scale:
    //возможно на будущее, масштаб speed:

    getMinValueRowsCount() {
      return this.minValueRowsCount;
    },

    getMaxValueRowsCount() {
      return this.maxValueRowsCount;
    },

    getMinValueColsCount() {
      return this.minValueColsCount;
    },

    getMaxValueColsCount() {
      return this.maxValueСolsCount;
    }
  };

  //HTMl элмента карты в таблице. Для добавления/удаления объектов (Человек1, человек2..., человекN. Остальные объекты реального мира.). 
  //Перемещения объектов по карте и т.д.
  tableHTMLEl;
  //Все ячейки tableHTMLEl
  cels = {};
  //Задейстованные ячейки tableHTMLEl
  usedCels = [];


  pathEarthIMG = [
    'img/map/карта.jpg', 'img/map/карта19.jpg', 'img/map/карта18.jpg', 'img/map/карта17.jpg', 'img/map/карта16.jpg', 'img/map/карта15.jpg',
    'img/map/карта14.jpg', 'img/map/карта13.jpg', 'img/map/карта12.jpg', 'img/map/карта11.jpg', 'img/map/карта10.jpg', 'img/map/карта9.jpg',
    'img/map/карта8.jpg', 'img/map/карта7.jpg', 'img/map/карта6.jpg', 'img/map/карта5.jpg', 'img/map/карта4.jpg', 'img/map/карта3.jpg',
    'img/map/карта2.jpg', 'img/map/карта1.jpg'
  ];
  scaleCounter = 0;

  //. Пример: человек, птица, насекомое, родник, облако, океан, море, река, лужа, дерево, куст, цветок, трава, здание, мост, опора линии электропередачи, провода, самолёт, вертолёт, ...
  /**на 2011 год число описанных видов живых организмов составляло примерно 1,7 млн в том числе: позвоночные животные — 64 тысячи видов, беспозвоночные животные — 1,3 миллиона видов, растения (включая красные и зелёные водоросли) — 308 тысяч видов, грибы (включая лишайники) — 48 тысяч видов[2] (по другим данным — около 100 тысяч видов[
   * Общее число видов, существующих на Земле, оценивается по-разному: называется число 8,7 млн в том числе цветковые растения — около 400 тысяч видов (на 2011 год описано примерно 300 тысяч)
   * некоторые учёные считают, что одних лишь видов грибов на нашей планете существует более 5 миллионов видов (при том, что сейчас описано всего лишь около 100 тысяч)
   * Число вымерших видов, по некоторым оценкам, составляет около 500 миллионов
        * Высота.
        *  @type {number}
  height: null,
        */

  /**
   * Ширина.
   *  @type {number}
    width: null,
  */
  /**
   * Длина.
   *  @type {number}
  length: null,
   */
  /**
  * Количество этажей.
  *  @type {number}
  numberFloors: [],
  */
  objectsMap = [];

  /**
   * Конструктор базового класса
   */
  constructor() {

  }


  /**
  * Создаёт HTML элемент карты.
  * @returns {HTMLElement} HTML элемент карты.
  */
  createMapHTMLEl() {
    this.mapHTMLEl = document.createElement('section');
    this.mapHTMLEl.id = 'mapHTMLEl';
    let headerHTMLEl = document.createElement('h3');
    headerHTMLEl.textContent = 'Карта';
    let wrapImgHTMLEl = document.createElement('div');
    wrapImgHTMLEl.classList.add('wrapImgHTMLEl');
    this.mapImgHTMLEl = new Image();
    this.mapImgHTMLEl.src = this.pathEarthIMG[this.scaleCounter];

    this.control = new Control([
      { class: 'btn', id: 'btnAddNewElement', textRu: '+ новый' },
      { class: 'btn', id: 'btnAddExistElement', textRu: '+ существующиий' },
      { class: 'btn', id: 'btnMapSun', textRu: 'Солнце' },
      { class: 'btn', id: 'btnMapMercury', textRu: 'Меркурий' },
      { class: 'btn', id: 'btnMapVenus', textRu: 'Венера' },
      { class: 'btn', id: 'btnMapEarth', textRu: 'Земля' },
      { class: 'btn', id: 'btnMapMoon', textRu: 'Луна' },
      { class: 'btn', id: 'btnMapMars', textRu: 'Марс' },
      { class: 'btn', id: 'btnMapJupiter', textRu: 'Юпитер' },
      { class: 'btn', id: 'btnMapSaturn', textRu: 'Сатурн' },
      { class: 'btn', id: 'btnMapUranus', textRu: 'Уран' },
      { class: 'btn', id: 'btnMapNeptune', textRu: 'Нептун' },
      { class: 'btn', id: 'btnMapPluto', textRu: 'Плутон' },
      { class: 'btn', id: 'btnMapIncrease', textRu: '+' },
      { class: 'btn', id: 'btnMapDecrease', textRu: '-' },
    ]);


    wrapImgHTMLEl.appendChild(this.mapImgHTMLEl);

    this.mapHTMLEl.appendChild(headerHTMLEl);
    this.mapHTMLEl.appendChild(this.control.createControlHTMLEl());
    this.mapHTMLEl.appendChild(wrapImgHTMLEl);
    this.mapHTMLEl.appendChild(this.createTableHTMLEl());

    return this.mapHTMLEl
  }

  createTableHTMLEl() {

    this.tableHTMLEl = document.createElement('section');
    let tableEl = document.createElement('table');
    this.tableHTMLEl.id = 'tableHTMLElInMapHTMLEl';

    for (let row = this.settingsMap.getMaxValueRowsCount(); row > this.settingsMap.getMinValueRowsCount() - 1; row--) {
      let trHTMLEl = document.createElement('tr');

      for (let col = this.settingsMap.getMinValueColsCount(); col < 1; col++) {
        trHTMLEl.appendChild(this.createAddTd(row, col));
      }

      for (let col = 1; col < this.settingsMap.getMaxValueColsCount() + 1; col++) {
        trHTMLEl.appendChild(this.createAddTd(row, col));
      }

      tableEl.appendChild(trHTMLEl);
    }

    this.tableHTMLEl.appendChild(tableEl);

    console.log(this.cels[`latitude${0}_longitude${0}`]);
    this.cels[`latitude${0}_longitude${0}`].classList.add('water');
    this.cels[`latitude${0}_longitude${0}`].textContent = 'latitude${0}_longitude${0}';
    this.cels[`latitude${1}_longitude${1}`].classList.add('land');

    return this.tableHTMLEl;

  }

  createAddTd(row, col) {
    let tdEl = document.createElement('td');
    tdEl.dataset.coordinates = `latitude${row}_longitude${col}`;
    this.cels[`latitude${row}_longitude${col}`] = tdEl;
    return tdEl
  }


  /**
   * Включение/отключение видимости HTML элемента карты.
   */
  toggleMapHTMLEl() {
    this.mapHTMLEl.style.display = this.mapHTMLEl.style.display === 'none' ? 'block' : 'none';
  }

  /**
  * Отключение видимости HTML элемента карты. 
  */
  hideMapHTMLEl() {
    this.mapHTMLEl.style.display = 'none';
  }

  /**
  * Отключение видимости HTML элемента карты. 
  */
  showMapHTMLEl() {
    this.mapHTMLEl.style.display = 'block';
  }

  /**
  * Возвращает HTML элемент карты.
  * @returns {HTMLElement}
  */
  getInputSizeTeamEl() {
    return this.mapHTMLEl;
  }

  /**
   * Добавление объекта на карту
   * @param {Object} object
   */
  addOnMap(object) {
    this.objectsMap.push(object);
  }

  /**
   * Добавление объекта на карту через выбор.
   * @param {Object} object
   */
  addNewElement() {
    alert('Добавление нового элемента. Варианты: человек, птица, насекомое, родник, облако, океан, море, река, лужа, дерево, куст, цветок, трава, здание, мост, опора линии электропередачи, провода, самолёт, вертолёт, ...');

  }

  /**
   * Добавление объекта на карту через выбор.
   * @param {Object} object
   */
  addExistElement() {
    alert('Существующие объекты. Варианты: человек, птица, насекомое, родник, облако, океан, море, река, лужа, дерево, куст, цветок, трава, здание, мост, опора линии электропередачи, провода, самолёт, вертолёт, ...');
  }

  mapSun() {
    alert('Отображается карта на Солнце.');
  }

  mapMercury() {
    alert('Отображается карта на Меркурии.');
  }

  mapVenus() {
    alert('Отображается карта на Венере.');
  }

  mapEarth() {
    alert('Отображается карта на Земле');
  }

  mapMoon() {
    alert('Отображается карта на Луне');
  }

  mapMars() {
    alert('Отображается карта на Марсе.');
  }

  mapJupiter() {
    alert('Отображается карта на Юпитере.');
  }

  mapSaturn() {
    alert('Отображается карта на Сатурне.');
  }

  mapUranus() {
    alert('Отображается карта на Уране.');
  }

  mapNeptune() {
    alert('Отображается карта на Нептуне.');
  }

  mapPluto() {
    alert('Отображается карта на Плутоне.');
  }

  mapIncrease() {

    if (this.scaleCounter > 18) {
      return
    }

    this.scaleCounter++;
    this.renderMapImgHTMLElSrc();
  }

  mapDecrease() {

    if (this.scaleCounter === 0) {
      return
    }

    this.scaleCounter--;
    this.renderMapImgHTMLElSrc();
  }

  renderMapImgHTMLElSrc() {
    this.mapImgHTMLEl.src = this.pathEarthIMG[this.scaleCounter];
  }
}