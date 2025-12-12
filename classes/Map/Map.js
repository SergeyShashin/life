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
  pathEarthIMG = [
    'img/map/карта.jpg', 'img/map/карта19.jpg', 'img/map/карта18.jpg', 'img/map/карта17.jpg', 'img/map/карта16.jpg', 'img/map/карта15.jpg',
    'img/map/карта14.jpg', 'img/map/карта13.jpg', 'img/map/карта12.jpg', 'img/map/карта11.jpg', 'img/map/карта10.jpg', 'img/map/карта9.jpg',
    'img/map/карта8.jpg', 'img/map/карта7.jpg', 'img/map/карта6.jpg', 'img/map/карта5.jpg', 'img/map/карта4.jpg', 'img/map/карта3.jpg',
    'img/map/карта2.jpg', 'img/map/карта1.jpg'
  ];
  scaleCounter = 0;
  objectsMap = [
    {
      /**
       *Широта. Минимальное значение -90. Максимальное значение 90.   54.61731283340977
       *  @type {number}
       */
      latitude: null,

      /**
       *Долгота. Минимальное значение -180. Максимальное значение 180. 39.68856205239361
       *  @type {number}
       */
      longitude: null,

      /**
      *Высота над уровнем моря. Минимальное значение -?. Максимальное значение ?
      *  @type {number}
      */
      altitude: null,

      /**
      *Высота над поверхностью (земля, вода, другой объект). Минимальное значение -?. Максимальное значение ?
      *  @type {number}
      */
      altitudeRelativeGround: null,

      /**
       *Название и/или адрес местонахождения.
       *  @type {string}
       */
      namePointOnMap: null,

      /**
       * Название объекта. Пример: человек, птица, животное, насекомое, родник, облако, океан, море, река, лужа, дерево, куст, цветок, трава, здание, мост, опора линии электропередачи, провода, самолёт, вертолёт, ...
       *  @type {string}
       */
      nameObject: null,

      /**
       * Высота.
       *  @type {number}
       */
      height: null,

      /**
     * Ширина.
     *  @type {number}
     */
      width: null,

      /**
       * Длина.
       *  @type {number}
       */
      length: null,

      /**
       * Масса.
       *  @type {number}
       */
      weightM: null,

      /**
       * Вес.
       *  @type {number}
       */
      weightP: null,

      /**
      * Количество этажей.
      *  @type {number}
      */
      numberFloors: [],
    }
  ];

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

    return this.mapHTMLEl
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

  addNewElement() {
    alert('Добавление нового элемента. Варианты: здание, дерево ....');

  }

  addExistElement() {
    alert('Существующие объекты. Варианты: здание, дерево ....');
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