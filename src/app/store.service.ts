import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { omit } from 'lodash';
import {reducer} from './reducers/firebase.reducer';
import { map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { get, isEqual } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class Store {
  state: Observable<any>;
  actions: Subject<Action> = new Subject();

  constructor() {
    this.state = this.actions.pipe(
      reducer(),
      shareReplay(1)
    );
  }

  dispatch(action: Action) {
    this.actions.next(action);
  }

  select(path: string) {
    return this.state.pipe(slice(path));
  }
}

export class Action {
  constructor (public type: string, public payload?: any) {}
}

export const slice = path =>
  pipe(
    map(state => get(state, path, null)),
    distinctUntilChanged(isEqual)
  );
