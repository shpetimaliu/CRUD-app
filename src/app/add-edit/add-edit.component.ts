import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent {
  empForm: FormGroup;

  education: string[] = [
    'Science Engineering',
    'IT Engineering',
    'Fishing',
    'Intermediate',
  ];

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      name: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      university: '',
      experience: '',
      company: '',
    });
  }
  onFormSubmit() {
    if (this.empForm.value) {
      console.log(this.empForm.value);
    }
  }
}
