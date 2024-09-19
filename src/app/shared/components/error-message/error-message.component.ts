import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl;
  @Input() customErrors: { [key: string]: string } = {};

  get errorMessages(): string[] {
    if (this.control && (this.control.dirty || this.control.touched) && this.control.invalid) {
      return Object.keys(this.control.errors!).map(errorKey => {
        return this.customErrors[errorKey] || this.getDefaultErrorMessage(errorKey, this.control.errors![errorKey]);
      });
    }
    return [];
  }

  private getDefaultErrorMessage(errorKey: string, errorValue: any): string {
    const messages: { [key: string]: string } = {
      required: 'This field is required',
      minlength: `Minimum length is ${errorValue.requiredLength}`,
      maxlength: `Maximum length is ${errorValue.requiredLength}`,
      email: 'Invalid email address',
      pattern: 'Invalid pattern',
    };
    return messages[errorKey] || `Error: ${errorKey}`;
  }
}
