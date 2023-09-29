import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud';

  constructor(private _dialog: MatDialog) {}

  openAddEditEmpForm() {
    this._dialog.open(AddEditComponent);
  }
}
