import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckComponent} from "../item/check/check.component";
import {MatDialog} from "@angular/material/dialog";
export interface Transaction {
  Product: string;
  photo: string;
  quantity: number;
  price: number;
  total: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent {

  @Input() numberValue = 0;
  @Output() onValueChange = new EventEmitter<number>();
  displayedColumns: string[] = ['photo', 'Product', 'price', 'quantity','total','action'];


  constructor(private dialog: MatDialog) {
  }
  increment() {
    this.numberValue++;
    console.log(this.numberValue);
    this.emitValueChange();
  }

  decrement() {
    if (this.numberValue > 0) {
      this.numberValue--;
      console.log(this.numberValue);
      this.emitValueChange();
    }
  }

  onChange(event: Event) {
    this.emitValueChange();
  }

  private emitValueChange() {
    this.onValueChange.emit(this.numberValue);
  }

  clearTable() {
    this.transactions = [];
  }

  transactions: Transaction[] = [
    {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      Product: 'Hydrogen', quantity: 1.0079, price: 1,total:300},
    {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      Product: 'Hydrogen', quantity: 1.0079, price: 1,total:300},
    {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      Product: 'Hydrogen', quantity: 1.0079, price: 1,total:300},
    {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      Product: 'Hydrogen', quantity: 1.0079, price: 1,total:300},
    {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      Product: 'Hydrogen', quantity: 1.0079, price: 1,total:300},

  ];

  getTotalCost() {
    return this.transactions.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }


  openDialog() {
    const dialogRef = this.dialog.open(CheckComponent, {
      minHeight: '700px',
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
