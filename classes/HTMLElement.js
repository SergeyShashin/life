'use stict';

class HTMLElement {
  constructor(tagEl, textEl, idEl, classEl) {
    this.tagEl = tagEl;
    this.textEl = textEl;
    this.idEl = idEl;
    this.classEl = classEl;
  }

  render() {
    let el = document.createElement(this.tagEl);
    el.textContent = this.textEl;
    el.id = this.idEl;
    el.className = this.classEl;
    return el
  }
}