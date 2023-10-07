import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(mesazhi: any, action: string = 'okej') {
    this._snackBar.open(mesazhi, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
