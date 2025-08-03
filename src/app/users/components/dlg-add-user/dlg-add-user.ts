import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dlg-add-user',
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogContent, MatDialogActions, 
            MatButtonModule, MatDialogTitle, MatInputModule, 
            MatFormFieldModule, MatDatepickerModule, FormsModule,
            MatProgressBarModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dlg-add-user.html',
  styleUrl: './dlg-add-user.scss'
})
export class DlgAddUser {

  user = new User();
  birthDate: Date = new Date();
  loading = false;

  constructor(private firestore: Firestore, private dialogRef: MatDialogRef<DlgAddUser>) {

  }

  onCancel() {
    this.dialogRef.close(false);
  }

  async onSave() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    
    try {
      const usersCollectionRef = collection(this.firestore, 'users');
      const newUserDoc = doc(usersCollectionRef);
      await setDoc(newUserDoc, this.user.toJson());
      console.log('User added with id:', newUserDoc.id);
      this.dialogRef.close(true);
    } catch (error) {
      console.log('Could not add user', error);
    } finally {
      this.loading = false;
    }
  }
}
