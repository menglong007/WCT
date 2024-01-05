import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeModule} from "./modules/home/home.module";
import {MatExpansionModule} from "@angular/material/expansion";
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSidenavModule,
        HomeModule,
        MatExpansionModule,
        // provideFirebaseApp(() => initializeApp({
        //     "projectId": "angular-wct-pro",
        //     "appId": "1:466181939144:web:44e2aa2cf0e339bc6f6afd",
        //     "storageBucket": "angular-wct-pro.appspot.com",
        //     "apiKey": "AIzaSyAzuj3L4Dru8rfoAHYwF_IkPwghqfLCJK0",
        //     "authDomain": "angular-wct-pro.firebaseapp.com",
        //     "messagingSenderId": "466181939144"
        // })),
        // provideFirestore(() => getFirestore()),
        MatButtonToggleModule,
        MatMenuModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
