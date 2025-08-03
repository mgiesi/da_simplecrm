import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';
import { collection, doc, docData, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [MatCard, MatCardModule, CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {

  user$: Observable<User> | null = null;

  constructor(private firestore: Firestore, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const userRef = doc(this.firestore, 'users', userId);
      this.user$ = docData(userRef, { idField: 'id' }) as Observable<User>;
    }
  }
}
