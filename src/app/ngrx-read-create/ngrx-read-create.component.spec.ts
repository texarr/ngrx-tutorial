import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxReadCreateComponent } from './ngrx-read-create.component';

describe('NgrxReadCreateComponent', () => {
  let component: NgrxReadCreateComponent;
  let fixture: ComponentFixture<NgrxReadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxReadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxReadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
