import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/header/header.component';
import { SectionComponent } from './todo/section/section.component';
import { FooterComponent } from './todo/footer/footer.component';
import { TodoInfoModalComponent } from './todo/section/todo-info-model/todo-info-modal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { Header2Component } from './shared/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TodoInfoModalComponent,
    MenuComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,//引入這個
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
