import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  public doOperation(operation: string, num1: number, num2: number) : number {
    let result:number = null;

    switch(operation) {
      case '+' : result = num1 + num2;
        break;
      case '-' : result = num1 - num2;
        break;
      case '/' : result = num1 / num2;
        break;
      case '*' : result = num1 * num2;
        break;
      case '^' : result = Math.pow(num1,num2);
        break;
    }

    return result;
  }

  public doUnaryOperation(operation: string, num1: number) : number {
    let result:number = null;

    switch(operation) {
      case 'sqrt' : result = Math.sqrt(num1);
    }

    return result;
  }

  public getNum1(input: string) : number{
    let result = input.match( /([0-9]+[.]?[0-9]*)/ig );

    return +result[0];
  }

  public getNum2(input: string) : number{
    let result = input.match( /([0-9]+[.]?[0-9]*)/ig );

    return +result[1];
  }

  public getOperation(input: string) : string{
    return input.replace(/([0-9]+[.]?[0-9]*)/ig, "");
  }

  public compute(display: string) : number{
    let num1:number = this.getNum1(display);
    let num2:number = this.getNum2(display);
    let operation:string = this.getOperation(display);
    return this.doOperation(operation, num1, num2);
  }

  public computeAndUpdateDisplay(display) : void {
    let result: number = this.compute(display);
  }
}
