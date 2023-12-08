import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "./auth/auth.component";
@Component({
  selector : 'app-home',
  templateUrl : 'home.component.html'
})
export class HomeComponent  implements OnInit{

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open( AuthComponent, {
      minHeight: '450px',
      width: '500px'
    });
  }

  listFav: any[] = [
    {
      "id": "1",
      "name": "Coffee"
    },
    {
      "id": "2",
      "name": "Coffee 2"
    }
  ]
  onSave() {
    localStorage.setItem('fav', this.listFav.toString())
  }

  ngOnInit(): void {
    this.onSave();
    this.onRetrieve()
  }

  onRetrieve() {
    const savedData = localStorage.getItem('fav');
    if (savedData) {
      this.listFav = JSON.parse(savedData);
    }
  }
  click : boolean = false;

}
