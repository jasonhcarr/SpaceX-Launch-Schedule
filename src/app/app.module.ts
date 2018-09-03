import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LaunchTableComponent } from './components/launch-table/launch-table.component';
import { LaunchRowComponent } from './components/launch-row/launch-row.component';
import { LaunchFooterComponent } from './components/launch-footer/launch-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchTableComponent,
    LaunchRowComponent,
    LaunchFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
