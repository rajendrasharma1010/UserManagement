import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-input-error-msg',
  templateUrl: './input-error-msg.component.html',
  styleUrls: ['./input-error-msg.component.css']
})
export class InputErrorMsgComponent implements OnChanges {

  constructor() { }
 
  @Input() messages = []; 

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
