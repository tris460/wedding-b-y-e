import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  imports: [FormsModule, CommonModule],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss'
})
export class Rsvp {
  @ViewChild('submitButton') submitButton!: ElementRef;
  @ViewChild('heartsContainer') heartsContainer!: ElementRef;
  
  formData = {
    name: '',
    attending: null as string | null,
    guests: 1,
    message: ''
  };
  
  showErrors = false;

  onSubmit() {
    this.showErrors = true;
    
    // Validar campos requeridos
    const isNameValid = this.formData.name && this.formData.name.trim() !== '';
    const isAttendingValid = this.formData.attending !== null;
    const isGuestsValid = !this.formData.attending || this.formData.guests;

    if (isNameValid && isAttendingValid && isGuestsValid) {
      this.createHeartExplosion();
      setTimeout(() => {
        alert('¡Gracias por confirmar tu asistencia!');
        this.resetForm();
      }, 500);
      // Aquí se puede agregar lógica para enviar los datos
    }
  }
  
  isNameInvalid(): boolean {
    return this.showErrors && (!this.formData.name || this.formData.name.trim() === '');
  }
  
  isAttendingInvalid(): boolean {
    return this.showErrors && this.formData.attending === null;
  }
  
  isGuestsInvalid(): boolean {
    return this.showErrors && this.formData.attending === 'true' && !this.formData.guests;
  }
  
  resetForm(): void {
    this.formData = {
      name: '',
      attending: null,
      guests: 1,
      message: ''
    };
    this.showErrors = false;
  }
  
  isFormValid(): boolean {
    const isNameValid = !!(this.formData.name && this.formData.name.trim() !== '');
    const isAttendingValid = this.formData.attending !== null;
    const isGuestsValid = this.formData.attending !== 'true' || !!this.formData.guests;
    
    return isNameValid && isAttendingValid && isGuestsValid;
  }
  
  createHeartExplosion(): void {
    const buttonRect = this.submitButton.nativeElement.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'flying-heart';
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 100 + Math.random() * 100;
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity;
        
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.setProperty('--deltaX', deltaX + 'px');
        heart.style.setProperty('--deltaY', deltaY + 'px');
        
        heart.addEventListener('animationend', () => heart.remove());
        
        this.heartsContainer.nativeElement.appendChild(heart);
      }, i * 50);
    }
  }
}
