import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'en' | 'ar'>('en');
  direction = signal<'ltr' | 'rtl'>('ltr');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.setLanguage('en'); // Default
  }

  setLanguage(lang: 'en' | 'ar') {
    this.currentLang.set(lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.direction.set(dir);
    this.document.documentElement.setAttribute('dir', dir);
    this.document.documentElement.lang = lang;
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'en' ? 'ar' : 'en');
  }
}
