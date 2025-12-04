'use stict';

class Control {
  controlHTMLEl;
  buttons = [
    { class: 'btn', id: 'btnAutomaticControlOrHandControl', textRu: 'Ручной' },
    { class: 'btn', id: 'btnMap', textRu: 'Карта' },
    { class: 'btn', id: 'btnSettings', textRu: 'Настройки' },
    { class: 'btn', id: 'btnStartGame', textRu: 'Вжух' },
    // { class: 'btn', id: 'btnChange', textRu: 'Менялка' },
    // { class: 'btn', id: 'btnVote', textRu: 'Голосовалка' },
  ];
  btnAutomaticControlOrHandControlEl;
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
      if (button.id === 'btnAutomaticControlOrHandControl') {
        this.btnAutomaticControlOrHandControlEl = btnEl;
      }
    }

    return this.controlHTMLEl;
  }
  /**
   * Меняет текст кнопки
   */
  toggleBtnAutomaticControlOrHandControlEl() {
    this.btnAutomaticControlOrHandControlEl.textContent = this.btnAutomaticControlOrHandControlEl.textContent === 'Ручной' ? 'Автоматический' : 'Ручной';
  }
}