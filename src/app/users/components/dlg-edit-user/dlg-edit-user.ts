import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { User } from '../../../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dlg-edit-user',
  imports: [MatDialogContent, MatDialogActions, 
            MatButtonModule, MatDialogTitle, MatInputModule, 
            MatFormFieldModule, MatDatepickerModule, FormsModule,
            MatProgressBarModule, CommonModule],
  templateUrl: './dlg-edit-user.html',
  styleUrl: './dlg-edit-user.scss'
})
export class DlgEditUser {

  user = new User();
  birthDate: Date = new Date();
  loading = false;

  constructor(private dialogRef: MatDialogRef<DlgEditUser>) {

  }

  onCancel() {
    this.dialogRef.close(false);
  }

  async onSave() {
    this.loading = true;
  }
}
