import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ModulesComponent} from "./module.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
  export class ModulesModule {
}

