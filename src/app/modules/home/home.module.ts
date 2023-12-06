import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
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
import {FormComponent} from "./myaccountform/form.component";
import {ContactComponent} from "./contact/contact.component";


@NgModule({
  declarations: [
    ItemComponent,
    CarouselComponent,
    HomeComponent,
    DialogComponent,
    FormComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatRadioModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
