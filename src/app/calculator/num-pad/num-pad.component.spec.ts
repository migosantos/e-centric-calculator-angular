import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPadComponent } from './num-pad.component';

describe('NumPadComponent', () => {
  let component: NumPadComponent;
  let fixture: ComponentFixture<NumPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
