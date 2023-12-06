import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ModulesComponent} from "./module.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
    // children: [
    //   {
    //     path: 'home',
    //     loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    //   },
    //
    //   // {path: '', redirectTo: 'userManagement', pathMatch: 'full'},
    // ],
  },
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

