import {Component} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {MatDialogRef} from "@angular/material/dialog";


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  fontStyle?: string;

  showArrows = true;
  showIndicators = true;
  Space : any[] = [];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.Space = [{
      "display" : "A",
      "storage" : "B",
      "camera" : "C",
      "battery" : "D",
      "chip" : "E",
      "Released" : "F",
      "weight": "G"
    }]
  }

  slides = [
    {
      imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      caption: 'beach'
    },
    {
      imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      caption: 'beach'
    },
    {
      imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      caption: 'beach'
    },
    {
      imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg',
      caption: 'beach'
    },

  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  selectedFood = this.foods[2].value;

  icons = ['crop_square', 'storage', 'camera', 'battery_full', 'memory', 'calendar_month', 'smartphone'];


}
