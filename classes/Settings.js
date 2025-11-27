'use strict';

class Settings {
  sizeTeam = 14; //120
  settingsEl;

  getSizeTeam() {
    return this.sizeTeam
  }

  createSettingsHTMLEl() {
    this.settingsEl = document.createElement('section');

    let headerSettingsEl = document.createElement('h2');
    headerSettingsEl.textContent = 'Настройки';

    let sizeTeamEl = document.createElement('div');
    sizeTeamEl.id = 'sizeTeam';
    let headerSizeTeamEl = document.createElement('h4');
    headerSettingsEl.textContent = 'размер группы';
    let inputSizeTeamEl = document.createElement('input');
    inputSizeTeamEl.id = 'inputSizeTeamEl';
    inputSizeTeamEl.value = this.sizeTeam;

    sizeTeamEl.appendChild(headerSizeTeamEl);
    sizeTeamEl.appendChild(inputSizeTeamEl);

    this.settingsEl.appendChild(headerSettingsEl);
    this.settingsEl.appendChild(sizeTeamEl);

    return this.settingsEl
  }
}