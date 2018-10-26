import { Component } from '@angular/core';
import {Action, Store} from '../store.service';

@Component({
  selector: 'app-firebase-ngrx',
  templateUrl: './firebase-ngrx.component.html',
  styleUrls: ['./firebase-ngrx.component.css']
})
export class FirebaseNgrxComponent {
  spanish;

  constructor(private store: Store) {
    this.spanish = store.select('spanish.hola');
  }

  set() {
    this.store.dispatch(new Action('SET', { hello: 'world' }));
  }

  update() {
    this.store.dispatch(new Action('UPDATE', { spanish: { hola: 'mundo' } }));
  }

  delete() {
    this.store.dispatch(new Action('DELETE', 'spanish'));
  }

}
