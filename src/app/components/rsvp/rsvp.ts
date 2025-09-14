import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  imports: [FormsModule, CommonModule],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss'
})
export class Rsvp {
  
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
      this.resetForm();
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
  

}
