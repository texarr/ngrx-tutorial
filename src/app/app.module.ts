import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { StoreModule } from '@ngrx/store';
import {reducer} from './reducers/tutorial.reducer';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { NgrxReadCreateComponent } from './ngrx-read-create/ngrx-read-create.component';
import { FirebaseNgrxComponent } from './firebase-ngrx/firebase-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeroesComponent,
    NgrxReadCreateComponent,
    FirebaseNgrxComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
