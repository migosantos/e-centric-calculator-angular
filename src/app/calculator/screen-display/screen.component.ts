import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  @Input()
  display: string;

  @Output()
  onChangeDisplay: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.initDisplaySummary();
  }
  
  private initDisplaySummary() : void {
    this.display = '';
  }

  modelChanged(newInput: string) {
    this.display = newInput;
    this.onChangeDisplay.emit(this.display);
  } 
}
