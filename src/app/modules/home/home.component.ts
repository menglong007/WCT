import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthComponent} from "./auth/auth.component";
@Component({
  selector : 'app-home',
  templateUrl : 'home.component.html'
})
export class HomeComponent{

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open( AuthComponent, {
      minHeight: '450px',
      width: '500px'
    });
  }
}
