import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent {

  @Input() menuArray = [];
  @Input() navFlex = 100;

  constructor() { }

}
