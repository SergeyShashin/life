'use strict';

/**
 * Создаёт datalist
 * @returns {HTMLElement} datalist
 */
class CreatorDatalist {
  constructor(idNameForDatalist, list) {
    this.idNameForDatalist = idNameForDatalist;
    this.list = list;
  }

  idNameForDatalist;
  datalistHTMLel;
  list;

  /**
   * Создаёт datalist
   * @returns {HTMLElement} datalist
   */
  createDatalistHTMLel() {
    this.datalistHTMLEl = document.createElement('datalist');
    this.datalistHTMLEl.id = this.idNameForDatalist;

    for (let element of this.list) {
      let optionEl = document.createElement('option');
      optionEl.value = element;
      this.datalistHTMLEl.appendChild(optionEl);
    }

    return this.datalistHTMLEl;
  }
}