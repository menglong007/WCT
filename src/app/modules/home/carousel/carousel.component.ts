import {Component, OnInit} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html'
})

export class CarouselComponent {

  showArrows = true;
  showIndicators = true;

  constructor(config: NgbCarouselConfig,
              private firestore: AngularFirestore) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

  }

  slides: any = [{imageUrl: "https://wallpapers.ispazio.net/wp-content/uploads/2023/09/iphone-15-pro-wallpapers-1.jpg"},
    {imageUrl: "https://www.gizchina.com/wp-content/uploads/images/2023/04/iPhone-15-Pro-Macrumor-1.jpg"},
    {imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/iphone-15-product-card-v1-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"},

  ];


}
