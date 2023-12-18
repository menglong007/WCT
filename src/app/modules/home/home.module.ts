import { NgModule } from '@angular/core';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarouselModule} from "@syncfusion/ej2-angular-navigations";
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {HomeComponent} from "./home.component";
import {ItemComponent} from "./item/item.component";
import {DialogComponent} from "./item/dialog/dialog.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {ContactComponent} from "./contact/contact.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {AuthComponent} from "./auth/auth.component";
import {FavComponent} from "./favorite/fav.component";
import {FooterComponent} from "./footer/footer.component";
import {MatListModule} from "@angular/material/list";
import {NavComponent} from "./sidenav/nav.component";
import {CartComponent} from "./cart/cart.component";
import {MatTableModule} from "@angular/material/table";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    ItemComponent,
    CarouselComponent,
    HomeComponent,
    DialogComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    FavComponent,
    FooterComponent,
    NavComponent,
    CartComponent

  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    NgbCarouselModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'favorite',
        component: FavComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },



    ]),
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSliderModule,

  ],
  providers: [],
  exports: [
    HomeComponent,
    CarouselComponent,
    NavComponent
  ]
})
export class HomeModule { }
