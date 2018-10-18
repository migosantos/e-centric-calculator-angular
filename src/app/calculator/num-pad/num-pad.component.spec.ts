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

  it('should emit keystroke event', (done) => {
    component.onKeyStroke.subscribe(g => {
       expect(g).toEqual('1');
       done();
    });
    component.numberClicked('1');
  });

  it('should emit click operator event', (done) => {
    component.onClickOperator.subscribe(g => {
       expect(g).toEqual('+');
       done();
    });
    component.operationClicked('+');
  });

  it('should emit click compute event', (done) => {
    component.onClickCompute.subscribe(g => {
       expect(g).toBeUndefined();
       done();
    });
    component.computeClicked();
  });

  it('should emit click clear event', (done) => {
    component.onClickClear.subscribe(g => {
       expect(g).toBeUndefined();
       done();
    });
    component.clearClicked();
  });

  it('should emit unary operator event', (done) => {
    component.onClickUnaryOperator.subscribe(g => {
       expect(g).toBe('sqrt');
       done();
    });
    component.unaryOperationClicked('sqrt');
  });
});
