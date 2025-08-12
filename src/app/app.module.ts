import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAndFilterComponent } from './component/search-and-filter-basic-approach/search-and-filter.component';
import { SearchAndFilterV2Component } from './component/search-and-filter-enhanced-approach/search-and-filter-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndFilterComponent,
    SearchAndFilterV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
