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
  mapHTMLEl;
  control;
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
    let mapImgHTMLEl = new Image();
    mapImgHTMLEl.src = 'img/карта.jpg';

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
    ]);

    wrapImgHTMLEl.appendChild(mapImgHTMLEl);

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
    alert('Отображается карта на Нептун.');
  }

  mapPluto() {
    alert('Отображается карта на Плутоне.');
  }
}