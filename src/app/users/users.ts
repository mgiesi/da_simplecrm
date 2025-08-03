import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DlgAddUser } from './components/dlg-add-user/dlg-add-user';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule, CommonModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

  user = new User();
  users$: Observable<User[]>;
  
  constructor(private firestore: Firestore, public dialog: MatDialog) {
    const usersCollectionRef = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollectionRef, { idField: "id" }) as Observable<User[]>;
  }

  openDialog() {
    this.dialog.open(DlgAddUser);
  }
}
