import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, ChangeColorComponent],
  imports: [CommonModule, BrowserModule],
  exports: [AppComponent, ChangeColorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
