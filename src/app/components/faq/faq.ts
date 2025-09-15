import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq implements AfterViewInit {

  ngAfterViewInit() {
    const faqRing = document.querySelector('.faq-ring') as HTMLElement;
    
    if (faqRing) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            faqRing.classList.add('loaded');
            observer.unobserve(faqRing);
          }
        });
      }, { threshold: 0.3 });
      
      observer.observe(faqRing);
    }
  }
}
