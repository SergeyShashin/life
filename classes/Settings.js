'use strict';

class Settings {
  sizeTeam = 14; //120
  settingsEl;

  getSizeTeam() {
    return this.sizeTeam
  }

  createSettingsHTMLEl() {
    this.settingsEl = document.createElement('section');
    return this.settingsEl
  }
}