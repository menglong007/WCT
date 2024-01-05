import { Component } from '@angular/core';
import {AuthComponent} from "./modules/home/auth/auth.component";
import {MatDialog} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public dialog: MatDialog,
              private afs:AngularFirestore,
             ) {
  }

  onSearch() {
  }


  openDialog() {
    const dialogRef = this.dialog.open( AuthComponent, {
      minHeight: '450px',
      width: '500px',
    });
  }


  protected readonly onchange = onchange;
}
