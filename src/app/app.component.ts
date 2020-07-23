import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-first-app';
  allowMainScreen = false;
  
  constructor() {
    setTimeout(() => {
      this.allowMainScreen = true
    }, 10000000);
  }
  ngOnInit() {

  }

}
