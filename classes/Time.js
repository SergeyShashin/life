'use strict';

class Time {
  timeEl;
  btnMinusDayEl;
  btnPlusDayEl;

  createTimeHTMLEl() {
    this.timeEl = document.createElement('section');
    this.timeEl.class = 'time';
    this.btnMinusDayEl = document.createElement('button');
    this.btnPlusDayEl = document.createElement('button');
    return this.timeEl
  }

  renderTimeHTMLEl() { }

  setTime() { }

}