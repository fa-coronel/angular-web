import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlValidatorService {

  constructor() { }

  processMessages(control: AbstractControl, validationMessages: { [key: string]: string }): string {
    let message = '';
    if (control && control.errors) {
      message = Object.keys(control.errors).map(key =>
        validationMessages[key]).join(' ');
    }
    return message;
  }
}
