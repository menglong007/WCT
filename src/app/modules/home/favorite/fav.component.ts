import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {DialogComponent} from "../item/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ItemResponse} from "../item/item.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";

interface Product {
  isFavorite: boolean;
}
@Component({
  selector: 'app-favorite',
  templateUrl : 'fav.component.html'
})

export class FavComponent implements OnInit {

  product : any =[];
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<boolean>();

  public toggleSelected(itemId: string) {
    const productDocRef = this.afr.doc(`product/${itemId}`);
    productDocRef.get().subscribe((docSnapshot) => {
      if (docSnapshot.exists) {
        const item = docSnapshot.data() as any;
        productDocRef.update({ isFavorite: !item.isFavorite });

        const favoritesDocRef = this.afr.doc(`favorites/${itemId}`);
        favoritesDocRef.get().subscribe((favoritesSnapshot) => {
          if (favoritesSnapshot.exists) {
            favoritesDocRef.delete().then(() => {
              this.loadData();
            });
          } else {
            console.log('Favorites document not found');
          }
        });
      } else {
        console.log('Product document not found');
      }
    });
  }

  constructor(private  dialog: MatDialog,
              private afr: AngularFirestore,
              private cdr: ChangeDetectorRef) {
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      minHeight: '700px',
      width: '1000px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(){
    this.loadData();

  }
  private loadData() {
    this.afr.collection<any>('favorites').valueChanges().subscribe({
      next: (res) => {
        this.product = []; // Clear the existing data
        res.forEach((re) => {
          this.afr.doc<Product>(`product/${re.value}`).valueChanges().subscribe({
            next: (p) => {
              if (p && p.isFavorite) {
                this.product.push(p);
                console.log(p);
              }
              this.cdr.detectChanges(); // Trigger change detection
            }
          });
        });
      }
    });
  }

}
