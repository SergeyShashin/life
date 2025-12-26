'use strict';

/**
 * Создаёт datalist
 * @returns {HTMLElement} datalist
 */
class CreatorDatalist {
  constructor(inputName) {
    this.idNameForDatalist = `datalist_${inputName}_HTMLEl`;
  }

  idNameForDatalist;
  datalistHTMLel;

  /**
   * Списки. 
   */
  lists = {
    /**
     * Наименования точек.
     */
    datalist_namePoint_HTMLEl: [
      'Производственный_центр 8, 54.617713826143124, 39.689331708034025',
      'Производственный_центр 8000, 54.617713826143124, 39.689331708034025',
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
    ],

    /**
     * Классы энергоэффективности.
     */
    datalist_energyEfficiencyClass_HTMLEl: ['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],

    /**
     * Классы энергоэффективности.
     */
    datalist_structuralFireHazardClass_HTMLEl: ['K0(1440)', 'K1(1440)', 'K2(1440)', 'K3(1440)']
  }

  /**
   * Создаёт datalist
   * @returns {HTMLElement} datalist
   */
  createDatalistHTMLel() {
    this.datalistHTMLEl = document.createElement('datalist');
    this.datalistHTMLEl.id = this.idNameForDatalist;

    for (let el of this.lists[this.idNameForDatalist]) {
      let optionEl = document.createElement('option');
      optionEl.value = el;
      this.datalistHTMLEl.appendChild(optionEl);
    }

    return this.datalistHTMLEl;
  }
}