import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modules',
    pathMatch: 'full'
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
