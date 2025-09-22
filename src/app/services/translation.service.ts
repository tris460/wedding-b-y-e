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
      'itinerary.title': 'Itinerario del día',
      'itinerary.description': 'Acompáñanos en cada momento especial de nuestra celebración',
      'itinerary.welcome.title': '¡Bienvenidos a todos!',
      'itinerary.welcome.description': 'Recepción y cóctel de bienvenida',
      'itinerary.ceremony.title': 'Ceremonia de unión',
      'itinerary.ceremony.description': 'El momento más esperado, ¡nos decimos "Sí, acepto"!',
      'itinerary.dinner.title': 'Cena especial',
      'itinerary.dinner.description': 'Disfrutemos de una deliciosa cena en familia',
      'itinerary.drink.title': 'Brindis por nuestro amor',
      'itinerary.drink.description': 'Celebremos juntos este nuevo capítulo',
      'itinerary.dance.title': '¡A bailar toda la noche!',
      'itinerary.dance.description': 'La pista es nuestra, ¡celebremos hasta el amanecer!',
      'location.title': 'Ubicación',
      'location.description': 'Te esperamos en este hermoso lugar para celebrar juntos',
      'location.info': 'Estacionamiento disponible • Fácil acceso',
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
      'itinerary.title': 'Day itinerary',
      'itinerary.description': 'Join us for every special moment of our celebration',
      'itinerary.welcome.title': 'Welcome everyone!',
      'itinerary.welcome.description': 'Reception and cocktail',
      'itinerary.ceremony.title': 'Wedding ceremony',
      'itinerary.ceremony.description': 'The most awaited moment, we say "Yes, I accept"!',
      'itinerary.dinner.title': 'Special dinner',
      'itinerary.dinner.description': 'Let’s enjoy a delicious family dinner',
      'itinerary.drink.title': 'A toast to our love',
      'itinerary.drink.description': 'Celebrate our new chapter together',
      'itinerary.dance.title': 'Dance all night long!',
      'itinerary.dance.description': 'The dance floor is ours, let’s celebrate until dawn!',
      'location.title': 'Location',
      'location.description': 'We await you at this beautiful place to celebrate together',
      'location.info': 'Parking available • Easy access',
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