'use strict';

/**
 * Создаёт HTML элементы инпутов
 */
class CreatorInputs {
  constructor(inputs) {
    this.inputs = inputs;
  }

  creatorInputsHTMLEl;

  /**
   * Объекты с данными для инпутов
   */
  inputs;

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
        let idNameForDatalist = `datalist_${input.name}_HTMLEl`;
        inputEl.setAttribute('list', idNameForDatalist);
        let datalistHTMLEl = new CreatorDatalist(input.name).createDatalistHTMLel();
        pEl.appendChild(datalistHTMLEl);
      }

      pEl.appendChild(headerHTMLEl);
      pEl.appendChild(inputEl);
      this.creatorInputsHTMLEl.appendChild(pEl);
    }

    return this.creatorInputsHTMLEl;
  }
}