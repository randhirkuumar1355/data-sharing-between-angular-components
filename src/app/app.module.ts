import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDataComponent } from './news-data/news-data.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDataComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
