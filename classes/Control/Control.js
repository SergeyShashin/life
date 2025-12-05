'use stict';

/**
 * Кнопки управления
 */
class Control {
  controlHTMLEl;
  buttons;
  /**
   * Создаёт конструктор базового класса
   * @param {Array} buttons 
   */
  constructor(buttons) {
    this.buttons = buttons;
  }

  /**
   * Создаёт HTML элемент с кнопками управления
   * @returns {HTMLElement} HTML элемент с кнопками управления
   */
  createControlHTMLEl() {
    this.controlHTMLEl = document.createElement('section');

    for (let button of this.buttons) {
      let btnEl = document.createElement('button');
      btnEl.className = button.class;
      btnEl.id = button.id;
      btnEl.textContent = button.textRu;
      this.controlHTMLEl.appendChild(btnEl);
    }

    return this.controlHTMLEl;
  }


  /**
   * Меняет текст кнопки
   */
  toggleTextBtn(btnHTMLEl, text1, text2) {
    btnHTMLEl.textContent = btnHTMLEl.textContent === text1 ? text2 : text1;
  }
}