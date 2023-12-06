import {Component} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-carousel',
  templateUrl : 'carousel.component.html'
})

export  class  CarouselComponent {
  showArrows = true;
  showIndicators= true;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  slides = [
    { imageUrl: 'https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg', caption: 'beach' },
    { imageUrl: 'https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg', caption: 'beach' },
    { imageUrl: 'https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg', caption: 'beach' },
    { imageUrl: 'https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg', caption: 'beach' },
    { imageUrl: 'https://shop.daisycomms.co.uk/wp-content/uploads/2023/09/Apple-iPhone-15-promo-banner-buy-now-scaled.jpg', caption: 'beach' },
  ];
}
