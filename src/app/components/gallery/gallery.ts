import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? 2 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  getSlideClass(index: number): string {
    if (index === this.currentSlide) {
      return 'active';
    } else if (index < this.currentSlide || (this.currentSlide === 0 && index === 2)) {
      return 'prev';
    } else {
      return '';
    }
  }
}
