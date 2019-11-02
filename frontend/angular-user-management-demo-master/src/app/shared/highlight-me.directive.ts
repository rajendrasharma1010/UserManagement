import { Directive, ElementRef, Input, OnInit  } from '@angular/core';
import {assign} from 'lodash';
import {HighlightMeOption} from '../interfaces';



@Directive({
  selector: '[appHighlightMe]'
})
export class HighlightMeDirective implements OnInit {
  defaultOptions: HighlightMeOption = {
    size: '2px',
    color: 'yellow',
    type: 'solid'
  };
  @Input('appHighlightMe') options: HighlightMeOption;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if( !!this.options ) assign( this.defaultOptions, this.options );
    this.el.nativeElement.style.borderBottom = this.defaultOptions.size + ' ' + this.defaultOptions.type + ' ' + this.defaultOptions.color;
  }
}
