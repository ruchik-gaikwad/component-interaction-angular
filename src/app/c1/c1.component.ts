import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit,  OnChanges {

  @Input() x;



  constructor() { }

  ngOnInit() {
    // console.log(this.x)
  }
  ngOnChanges(changes) {
    console.log(changes)
  }

}
