'use strict';

/**
 * Создаёт HTML элементы инпутов
 */
class CreatorInputs {
  creatorInputsHTMLEl;
  inputs;

  constructor(inputs) {
    this.inputs = inputs;
  }

  /**
  * Создаёт HTML элемент с инпутами
  * @returns {HTMLElement} HTML элемент инпутами
  */
  createInputHTMLEl() {
    this.creatorInputsHTMLEl = document.createElement('section');

    for (let input of this.inputs) {
      let headerHTMLEl = document.createElement('h4');
      headerHTMLEl.textContent = input.header;
      let inputEl = document.createElement('input');
      inputEl.className = input.class;
      input.id = input.id;
      this.creatorInputsHTMLEl.appendChild(headerHTMLEl);
      this.creatorInputsHTMLEl.appendChild(inputEl);
    }

    return this.creatorInputsHTMLEl;
  }
}