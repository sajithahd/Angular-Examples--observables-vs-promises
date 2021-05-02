import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EagerVsLazy } from './examples/eager_lazy.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '/eager_lazy', component: EagerVsLazy }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}