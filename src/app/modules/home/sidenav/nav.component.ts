import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CheckComponent} from "../item/check/check.component";
import {MatDialog} from "@angular/material/dialog";
import {CheckCartComponent} from "./checkCart/check.component";
import {take} from "rxjs";

@Component({
  selector : 'app-nav',
  templateUrl : './nav.component.html'
})

export class NavComponent implements OnInit{

  product: any =[];

  constructor(private _formBuilder: FormBuilder,
              private afr: AngularFirestore,
              private dialog: MatDialog) {}
  toppings = this._formBuilder.group({
    checkbox : false
  });

    protected readonly onclose = onclose;
  protected readonly event = event;


    protected readonly Image = Image;

  ngOnInit(){
    this.loadData();
  }


  private loadData(){
    this.afr.collection<any>('cart').valueChanges().subscribe(
      {
        next: (res) => {
          res.forEach((re) => {
            this.afr.doc(`product/${re.value}`).valueChanges().pipe(take(1)).subscribe({
              next: (p) => {
                this.product.push(p);
                console.log(p)
              }
            })
          })
        }
      }
    );
  }


  onDelete(id: string) {
    this.afr.collection('cart').doc(`${id}`).delete()
      .then(() => {
        console.log('Removed from favorites:', id);
      })
      .catch(error => {
        console.error('Error removing from favorites:', error);
      });
  }

  openDialog(item: any | null = null) {
    const dialogRef = this.dialog.open(CheckCartComponent, {
      height: '700px',
      width: '1000px',
      data : item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
