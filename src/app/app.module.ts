import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CityService} from './city.service';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
