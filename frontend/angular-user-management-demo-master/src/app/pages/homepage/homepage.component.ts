import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  lazyHighlightOptions;
  constructor() { }

  ngOnInit() {
    this.lazyHighlightOptions = {size: '4px'};
  }

}
