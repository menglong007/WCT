import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog} from "@angular/material/dialog";
import {CheckComponent} from "../check/check.component";


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<boolean>();
  Space : any[] = [];
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];
  Selected : number = 0;

  Tap(index: number){
    this.Selected = index;
  }


  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected)
  }


  showArrows = true;
  showIndicators= true;


  constructor(config: NgbCarouselConfig,
              private dialog: MatDialog) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.Space = [{
      "model" : "name",
      "price" : "19",
      "display" : "A",
      "camera" : "C",
      "battery" : "D",
      "chip" : "E",
    }]
  }

  icons = ['crop_square',  'camera', 'battery_full', 'memory', 'smartphone'];
  slides = [
    { imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg', caption: 'beach' },
    { imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg', caption: 'beach' },
    { imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg', caption: 'beach' },
    { imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg', caption: 'beach' },
    { imageUrl: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg', caption: 'beach' },

  ];

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
