import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {set} from "@angular/fire/database";
import {data} from "autoprefixer";

export interface ItemResponse{
  battery : string,
  camera: string,
  chip : string,
  display : string,
  image : string,
  model: string,
  price : number
}

@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html'

})
export class ItemComponent implements OnInit{
  @Output() selectedChange = new EventEmitter<boolean>();
  selected : boolean =false
  public toggleSelected(itemId: string) {
    const id = this.afr.createId();
    const productDocRef = this.afr.doc(`product/${itemId}`);
    productDocRef.get().subscribe((docSnapshot) => {
      if (docSnapshot.exists) {
        productDocRef.get().subscribe((docSnapshot) => {
          if (docSnapshot.exists) {
            const item = docSnapshot.data() as any
            productDocRef.update({ isFavorite: !item.isFavorite });
            const new_update = docSnapshot.data() as any
            this.afr.collection('favorites').doc(itemId).get().subscribe((docSnapshot) => {
              if(new_update.isFavorite) {
                this.afr.doc(`favorites/${itemId}`).delete();
                return
              }
              this.afr.doc(`favorites/${itemId}`).set({id: id, value: itemId });
            });
          } else {
            console.log('Document not found');
          }
        });

      }
    });



  }


  product: any[] = [];

  constructor(public dialog: MatDialog,
              public afr: AngularFirestore) {}

  ngOnInit(){
    this.afr.collection<ItemResponse>('product').valueChanges().subscribe(
      {
        next: (res) => {
          this.product = res;
        }
      }
    );
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height:'700px',
      width: '1000px',
      data: id

    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  protected readonly set = set;
}
