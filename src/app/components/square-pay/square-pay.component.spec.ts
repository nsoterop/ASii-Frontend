import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePayComponent } from './square-pay.component';

describe('SquarePayComponent', () => {
  let component: SquarePayComponent;
  let fixture: ComponentFixture<SquarePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
