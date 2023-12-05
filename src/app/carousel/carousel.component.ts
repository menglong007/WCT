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
    { imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg', caption: 'beach' },
    { imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg', caption: 'beach' },
    { imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg', caption: 'beach' },
    { imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg', caption: 'beach' },
    { imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg', caption: 'beach' },

  ];
}
