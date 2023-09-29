import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

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

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<AddEditComponent>
  ) {
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
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Will ADD');
          this._dialogRef.close();
        },
        error: (error: any) => {
          console.log('Error:', error);
        },
      });
    }
  }
}
