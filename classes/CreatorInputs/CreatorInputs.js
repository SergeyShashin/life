'use strict';

/**
 * Создаёт HTML элементы инпутов
 */
class CreatorInputs {
  constructor(inputs) {
    this.inputs = inputs;
  }

  creatorInputsHTMLEl;
  inputs;

  /**
   * Наименования точек. В будущем сделать, как с людьми и ресурсами PeopleAndResources. Или создавать все datalist в life.js
   */
  namesPoints = [
    'Производственный_центр 8, 54.62906241524983, 39.73445184706703',
    'Производственный_центр 8000, 54.62906241524983, 39.73445184706703',
    'ул. Ленинского Комсомола, 21, Рязань, 54.62181095827267, 39.72299809466142',
    'ул. Островского, 111, Рязань, 54.617713826143124, 39.689331708034025',
    'Семчинская улица, 8, Рязань, 54.686852, 39.639150',
    'Татарская улица, 93, Рязань, 54.611163, 39.713324',
    'Татарская улица, 91, Рязань, 54.611842, 39.713584',
    'Черновицкая ул., 27, Рязань, 54.59847746672958, 39.712440130320914',
    'пл. Димитрова, 3, Рязань, 54.628567, 39.703409',
    'Юбилейная улица, 16, Рязань, 54.639109, 39.640930',
    'Вокзальная улица, 51А, Рязань, 54.632165, 39.713423',
    'Касимовское шоссе, 23, Рязань, 54.623594, 39.783032',
    'ул. Новаторов, 9в, Рязань, 54.635654185534506, 39.64219596731907',
    'Электрозаводская улица, 9в, Рязань, 54.620938, 39.779095',
    'пл. Ленина, Рязань, 54.62906241524983, 39.73445184706703',
    'Центральный парк культуры и отдыха, 54.60871795574971, 39.725422482013734',
  ];

  /**
  * Создаёт HTML элемент с инпутами
  * @returns {HTMLElement} HTML элемент инпутами
  */
  createInputHTMLEl() {
    this.creatorInputsHTMLEl = document.createElement('section');

    for (let input of this.inputs) {
      let pEl = document.createElement('p');
      pEl.className = 'inputBlock';
      let headerHTMLEl = document.createElement('h4');
      headerHTMLEl.textContent = input.header;
      let inputEl = document.createElement('input');
      inputEl.id = input.id;
      inputEl.name = input.name;
      inputEl.type = input.type;
      inputEl.value = input.value;
      inputEl.className = input.class;

      if (input.needDatalist) {
        inputEl.setAttribute('list', `datalist_${input.name}_HTMLEl`);

      }

      pEl.appendChild(headerHTMLEl);
      pEl.appendChild(inputEl);
      this.creatorInputsHTMLEl.appendChild(pEl);
    }

    return this.creatorInputsHTMLEl;
  }
}