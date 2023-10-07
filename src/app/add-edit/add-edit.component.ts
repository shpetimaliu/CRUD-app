import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
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
    private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
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

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.value) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Will updated', 'done');
              this._dialogRef.close(true);
            },
            error: (error: any) => {
              console.log('Error:', error);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Will add', 'done');
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.log('Error:', error);
          },
        });
      }
    }
  }
}
