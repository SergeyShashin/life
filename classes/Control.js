'use stict';

class Control {
  controlHTMLEl;
  buttons = [
    { class: 'btn', id: 'btnAutomaticControlOrHandControl', textRu: 'Ручное' },
    { class: 'btn', id: 'btnMap', textRu: 'Карта' },
    { class: 'btn', id: 'btnSettings', textRu: 'Настройки' },
  ];
  btnAutomaticControlOrHandControlEl;
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

    return this.controlHTMLEl
  }
  toggleBtnAutomaticControlOrHandControlEl() {
    this.btnAutomaticControlOrHandControlEl.textContent = this.btnAutomaticControlOrHandControlEl.textContent === 'Ручное' ? 'Автоматическое' : 'Ручное';
  }
}