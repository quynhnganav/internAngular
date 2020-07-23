import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { splashScreenModule } from "./splash-screen/splash-screen.component";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    splashScreenModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent, splashScreenModule ]
})
export class AppModule { }
