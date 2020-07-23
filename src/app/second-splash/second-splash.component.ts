import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-second-splash',
  templateUrl: './second-splash.component.html',
  styleUrls: ['./second-splash.component.scss']
})
export class SecondSplashComponent  {
}
@NgModule({
  declarations: [
    SecondSplashComponent
  ],
  exports: [
    SecondSplashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecondSplashModule {};
