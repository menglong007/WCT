import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DialogComponent} from "../item/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-favorite',
  templateUrl : 'fav.component.html'
})

export class FavComponent{
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<boolean>();

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
  items: any[] = [{
    "id": "1",
    "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
    "model": "IPX",
    "price_off" : "1500$",
    "price" : "1400$"
  },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    },
    {
      "id": "1",
      "image": "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg",
      "model": "IPX",
      "price_off" : "1500$",
      "price" : "1400$"
    }];
  constructor(private  dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      minHeight: '700px',
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
