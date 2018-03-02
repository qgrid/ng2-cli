import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    ThemeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
