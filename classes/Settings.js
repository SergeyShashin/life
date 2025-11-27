'use strict';

class Settings {
  sizeTeam = 14; //120
  settingsEl;
  sizeTeamEl;
  inputSizeTeamEl;

  createSettingsHTMLEl() {
    this.settingsEl = document.createElement('section');

    let headerSettingsEl = document.createElement('h2');
    headerSettingsEl.textContent = 'Настройки';

    this.sizeTeamEl = document.createElement('div');
    this.sizeTeamEl.id = 'sizeTeam';
    let headerSizeTeamEl = document.createElement('h4');
    headerSettingsEl.textContent = 'размер группы';
    this.inputSizeTeamEl = document.createElement('input');
    this.inputSizeTeamEl.id = 'inputSizeTeamEl';
    this.inputSizeTeamEl.value = this.sizeTeam;

    this.sizeTeamEl.appendChild(headerSizeTeamEl);
    this.sizeTeamEl.appendChild(this.inputSizeTeamEl);

    this.settingsEl.appendChild(headerSettingsEl);
    this.settingsEl.appendChild(this.sizeTeamEl);

    return this.settingsEl
  }

  getSettingsEl() {
    return this.settingsEl;
  }

  getSizeTeam() {
    return this.sizeTeam;
  }

  getSizeTeamEl() {
    return this.sizeTeamEl;
  }

  getInputSizeTeamEl() {
    return this.inputSizeTeamEl;
  }

  toggleSettingsEl() {
    this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
  }

  hideSettingsEl() {
    this.settingsEl.style.display = 'none';
  }
  
  showSettingsEl() {
    this.infoEl.style.display = 'inline-block';
  }
}