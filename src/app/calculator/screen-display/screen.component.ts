import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  @Input()
  screenDisplay: string;

  @Output()
  onChangeDisplay: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.initDisplaySummary();
  }
  
  private initDisplaySummary() : void {
    this.screenDisplay = '';
  }

  modelChanged(newInput: string) {
    this.screenDisplay = newInput;
    this.onChangeDisplay.emit(this.screenDisplay);
  } 
}
