import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";


@Component({
  selector: 'app-item',
  templateUrl: 'item.component.html'

})
export class ItemComponent {
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<boolean>();

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  product: any[] = [];

  constructor(public dialog: MatDialog) {
    this.product = [{
      "name": "iphone",
      "items": [{
        "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
        "model": "IPX",
        "price_off" : "1500$",
        "price" : "1400$"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX",
          "price_off" : "1500$",
          "price" : "1400$"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX",
          "price" : "1400$"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },
        {
          "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
          "model": "IPX"
        },



      ]
    },
    ]
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '707px',
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
