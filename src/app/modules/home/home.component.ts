import {Component} from "@angular/core";
import {DialogComponent} from "./item/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {FormComponent} from "./myaccountform/form.component";
@Component({
  selector : 'app-home',
  templateUrl : 'home.component.html'
})
export class HomeComponent{

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '707px',
      width: '1000px'
    });
  }

}
