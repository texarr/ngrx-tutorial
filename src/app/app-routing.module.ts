import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {NgrxReadCreateComponent} from './ngrx-read-create/ngrx-read-create.component';
import {FirebaseNgrxComponent} from './firebase-ngrx/firebase-ngrx.component';

const routes: Routes = [
  {path: 'ngrx', component: NgrxReadCreateComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'firebasengrx', component: FirebaseNgrxComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
