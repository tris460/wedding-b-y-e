import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: { [lang: string]: Translations } = {
    es: {
      'nav.home': 'Inicio',
      'nav.details': 'Detalles',
      'nav.location': 'Ubicación',
      'nav.dress-code': 'Para tomar en cuenta',
      'nav.registry': 'Regalos',
      'nav.rsvp': 'Confirmar asistencia',
      'nav.contact': 'Contacto'
    },
    en: {
      'nav.home': 'Home',
      'nav.details': 'Details',
      'nav.location': 'Location',
      'nav.dress-code': 'Dress Code',
      'nav.registry': 'Gifts',
      'nav.rsvp': 'RSVP',
      'nav.contact': 'Contact'
    }
  };

  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  translate(key: string): string {
    const lang = this.getCurrentLanguage();
    return this.translations[lang]?.[key] || key;
  }
}