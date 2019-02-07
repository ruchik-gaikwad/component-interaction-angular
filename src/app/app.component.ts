import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';


  first: any = "this is the string"

  click() {
    this.first = false
  }
  click2() {
    this.first = true;
  }
}
