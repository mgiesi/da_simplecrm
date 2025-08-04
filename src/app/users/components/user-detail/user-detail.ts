import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';
import { collection, doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DlgEditUser } from '../dlg-edit-user/dlg-edit-user';
import { DlgEditAddress } from '../dlg-edit-address/dlg-edit-address';

@Component({
  selector: 'app-user-detail',
  imports: [MatCard, MatCardModule, MatIcon, MatIconButton, MatMenuModule, CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {

  user$: Observable<User> | null = null;

  constructor(private firestore: Firestore, private route:ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const userRef = doc(this.firestore, 'users', userId);
      this.user$ = docData(userRef, { idField: 'id' }) as Observable<User>;
    }
  }

  onEditUser() {
      this.dialog.open(DlgEditUser);
  }

  onEditAddress() {
      this.dialog.open(DlgEditAddress);
  }
}
