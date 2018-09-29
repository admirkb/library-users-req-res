import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReqresModule } from 'reqres';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ReqresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
