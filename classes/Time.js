'use strict';

class Time {
  date;
  timeEl;
  interval;
  btnMinusDayEl;
  tagTimeEl;
  btnPlusDayEl;

  createTimeHTMLEl() {
    this.date = new Date();
    this.timeEl = document.createElement('section');
    this.timeEl.className = 'time';
    this.btnMinusDayEl = document.createElement('button');
    this.btnMinusDayEl.id = 'btnMinusDay';
    this.btnMinusDayEl.className = 'controlTime';
    this.btnMinusDayEl.dataset.dayvalue = '-1';
    this.btnMinusDayEl.textContent = '<';
    this.tagTimeEl = document.createElement('time');
    this.btnPlusDayEl = document.createElement('button');
    this.btnPlusDayEl.id = 'btnPlusDay';
    this.btnPlusDayEl.className = 'controlTime';
    this.btnPlusDayEl.dataset.dayvalue = '1';
    this.btnPlusDayEl.textContent = '>';
    this.timeEl.appendChild(this.btnMinusDayEl);
    this.timeEl.appendChild(this.tagTimeEl);
    this.timeEl.appendChild(this.btnPlusDayEl);
    this.interval = setInterval(() => {
      this.date.setSeconds(this.date.getSeconds() + 1);
      this.renderTimeHTMLEl();
    }, 1000);
    return this.timeEl
  }

  renderTimeHTMLEl() {
    this.tagTimeEl.textContent = `${this.date.getFullYear()}:${this.date.getMonth() + 1}:${this.date.getDate()} ${this.date.toTimeString()}`;
  }

  setTime() { }

  updateTime(quantityDay) {
    this.date.setDate(this.date.getDate() + Number(quantityDay));
    this.renderTimeHTMLEl();
  }

}