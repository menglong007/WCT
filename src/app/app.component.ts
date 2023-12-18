import { Component } from '@angular/core';
import {AuthComponent} from "./modules/home/auth/auth.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open( AuthComponent, {
      minHeight: '450px',
      width: '500px'
    });
  }


  protected readonly onchange = onchange;
}
