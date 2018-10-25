import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseNgrxComponent } from './firebase-ngrx.component';

describe('FirebaseNgrxComponent', () => {
  let component: FirebaseNgrxComponent;
  let fixture: ComponentFixture<FirebaseNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
