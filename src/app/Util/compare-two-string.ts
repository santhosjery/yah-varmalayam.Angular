import { AbstractControl, FormGroup } from '@angular/forms';

export function CompareTwoString(firstString: string, secondString: string){
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[firstString];
        let matchingControl = formGroup.controls[secondString]
        if (
            matchingControl.errors &&
            !matchingControl.errors.confirmPasswordValidator
        ) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}