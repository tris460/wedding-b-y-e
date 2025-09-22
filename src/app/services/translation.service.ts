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
      'nav.contact': 'Contacto',
      'home.title': '¡Nos casamos!',
      'details.our-song': 'Nuestra canción',
      'details.description': 'Con gran alegría queremos compartir contigo este momento tan especial',
      'details.date': '17 de Octubre de 2026',
      'details.days': 'Días',
      'details.time': 'Horas',
      'details.minutes': 'Minutos',
      'details.seconds': 'Segundos',
      'details.text': '¡Reserva la fecha y acompáñanos en este día tan especial!',
    },
    en: {
      'nav.home': 'Home',
      'nav.details': 'Details',
      'nav.location': 'Location',
      'nav.dress-code': 'Dress Code',
      'nav.registry': 'Gifts',
      'nav.rsvp': 'RSVP',
      'nav.contact': 'Contact',
      'home.title': 'We’re Getting Married!',
      'details.our-song': 'Our song',
      'details.description': 'With great joy, we want to share this special moment with you',
      'details.date': 'October 17th, 2026',
      'details.days': 'Days',
      'details.time': 'Hours',
      'details.minutes': 'Minutes',
      'details.seconds': 'Seconds',
      'details.text': 'Book the date and join us on this special day!',
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