import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  $modeSubject = new BehaviorSubject<'light' | 'dark' | 'system'>('system');

  init() {
    if (window.localStorage.getItem('color-scheme') === 'dark') {
      this.setDarkMode();
    } else if (window.localStorage.getItem('color-scheme') === 'light') {
      this.setLightMode();
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.body.setAttribute('data-color-scheme', 'dark');
      } else {
        document.body.setAttribute('data-color-scheme', 'light');
      }
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        document.body.setAttribute('data-color-scheme', newColorScheme);
      });
  }

  toggle() {
    const isDarkMode = document.body.getAttribute('data-color-scheme') === 'dark';
    if (isDarkMode) {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  setDarkMode() {
    document.body.setAttribute('data-color-scheme', 'dark');
    window.localStorage.setItem('color-scheme', 'dark');
    this.$modeSubject.next('dark');
  }

  setLightMode() {
    document.body.setAttribute('data-color-scheme', 'light');
    window.localStorage.setItem('color-scheme', 'light');
    this.$modeSubject.next('light');
  }
}
