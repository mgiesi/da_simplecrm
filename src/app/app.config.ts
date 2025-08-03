import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    /*provideZonelessChangeDetection(),*/
    provideRouter(routes), 
    provideFirebaseApp(() => 
      initializeApp({ 
        projectId: "da-simple-crm", 
        appId: "1:898227331235:web:0e0f2047be0c0af4d2df16", 
        storageBucket: "da-simple-crm.firebasestorage.app", 
        apiKey: "AIzaSyD3k82pW6bBT22H9a8EduMlVPsNui3VC9g", 
        authDomain: "da-simple-crm.firebaseapp.com", 
        messagingSenderId: "898227331235" 
      })
    ), 
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase())
  ]
};
