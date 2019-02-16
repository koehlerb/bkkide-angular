import { Directive } from '@angular/core';
import { ValidatorFn,
         FormGroup,
         ValidationErrors,
         Validator,
         AbstractControl,
         NG_VALIDATORS }   from '@angular/forms';


export const passwordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password1 = control.get('password1');
  const password2 = control.get('password2');

  return password1 && password2 &&
         password1.value != password2.value ? { 'passwordMismatch': true } : null;
};

@Directive({
  selector: '[appPasswordmatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordmatchDirective, multi: true }]
})
export class PasswordmatchDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return passwordValidator(control)
  }

}
