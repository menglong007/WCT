import {Component, OnInit} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-carousel',
  templateUrl : 'carousel.component.html'
})

export  class  CarouselComponent implements OnInit{

  slides: any = [];
  showArrows = true;
  showIndicators= true;
  constructor(config: NgbCarouselConfig,
              private firestore: AngularFirestore) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

  }

  ngOnInit(){
    this.slides = this.firestore.collection('carousel').valueChanges();
  }

}
