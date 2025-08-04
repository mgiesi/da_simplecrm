import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { User } from '../../../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dlg-edit-address',
  imports: [MatDialogContent, MatDialogActions, 
            MatButtonModule, MatDialogTitle, MatInputModule, 
            MatFormFieldModule, FormsModule,
            MatProgressBarModule, CommonModule],
  templateUrl: './dlg-edit-address.html',
  styleUrl: './dlg-edit-address.scss'
})
export class DlgEditAddress {

  user = new User();
  loading = false;

  constructor(private dialogRef: MatDialogRef<DlgEditAddress>) {

  }

  onCancel() {
    this.dialogRef.close(false);
  }

  async onSave() {
    this.loading = true;
  }
}
