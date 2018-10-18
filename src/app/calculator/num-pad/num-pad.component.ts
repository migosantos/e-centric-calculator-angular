import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.css']
})
export class NumPadComponent implements OnInit {

  @Output()
  onKeyStroke: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onClickOperator: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  onClickUnaryOperator: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onClickCompute: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  onClickClear: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { 
  }

  numberClicked(num: string) {
    this.onKeyStroke.emit(num);
  }

  operationClicked(oper: string) {
    this.onKeyStroke.emit(oper);
    this.onClickOperator.emit(oper);
  }

  unaryOperationClicked(oper: string) {
    this.onClickUnaryOperator.emit(oper);
  }

  computeClicked(oper: string) {
    this.onClickCompute.emit();
  }

  clearClicked() {
    this.onClickClear.emit();
  }
}
