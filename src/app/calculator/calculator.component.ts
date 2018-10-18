import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display: string;
  
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.display = '';
  }

  onClickCompute(event: string) {
    this.display = ''+this.calculatorService.compute(this.display);
  }

  onClickUnaryOperator(oper: string) {
    this.display = ''+this.calculatorService.doUnaryOperation(oper,+this.display);
  }

  onClickClear() {
    this.display = '';
  }

  onKeyStroke(keyStroke: string) {
    this.display += keyStroke;
  }

  onChangeDisplay(newDisplay: string) {
    this.display = newDisplay;
  }
}
