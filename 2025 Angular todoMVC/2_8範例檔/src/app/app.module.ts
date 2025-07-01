import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, A1Component, A2Component, TodoComponent, HeaderComponent, MainComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
