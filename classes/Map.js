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

  constructor() {

  }

  createMapHTMLEl() {
    this.mapHTMLEl = document.createElement('section');
    this.mapHTMLEl.id = 'mapHTMLEl';
    let headerHTMLEl = document.createElement('h3');
    headerHTMLEl.textContent = 'Карта';
    let mapImgHTMLEl = new Image();
    mapImgHTMLEl.src = 'img/карта.jpg';
    this.mapHTMLEl.appendChild(headerHTMLEl);
    this.mapHTMLEl.appendChild(mapImgHTMLEl);
    return this.mapHTMLEl
  }

  toggleMapHTMLEl() {
    this.mapHTMLEl.style.display = this.mapHTMLEl.style.display === 'none' ? 'block' : 'none';
  }

  hideMapHTMLEl() {
    this.mapHTMLEl.style.display = 'none';
  }
}