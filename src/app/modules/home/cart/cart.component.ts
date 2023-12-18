import {Component, EventEmitter, Input, Output} from '@angular/core';
export interface PeriodicElement {
  Product: string;
  photo: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
    Product: 'Hydrogen', quantity: 1.0079, price: 1},
  {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
    Product: 'Hydrogen', quantity: 1.0079, price: 1},
  {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
    Product: 'Hydrogen', quantity: 1.0079, price: 1},
  {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
    Product: 'Hydrogen', quantity: 1.0079, price: 1},
  {photo: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
    Product: 'Hydrogen', quantity: 1.0079, price: 1},

];


@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent {

  @Input() numberValue = 0;
  @Output() onValueChange = new EventEmitter<number>();
  displayedColumns: string[] = ['photo', 'Product', 'price', 'quantity','total','action'];
  dataSource = ELEMENT_DATA;

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
    this.dataSource = [];
  }
}
