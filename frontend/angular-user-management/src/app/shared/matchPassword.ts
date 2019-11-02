import {AbstractControl, ValidatorFn} from '@angular/forms';
export class MatchInputsValidation {

    static MatchInputs(AC: AbstractControl): ValidatorFn {
       let password = AC.get('email').value; // to get value in input tag
       let confirmPassword = AC.get('confirm').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirm').setErrors( {MatchPassword: true} );
        } else {
            console.log('true');
            return null;
        }
    }
}