import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { TodoComponent } from '../todo/todo.component';
import { HeaderComponent } from '../todo/header/header.component';
import { SectionComponent } from '../todo/section/section.component';
import { FooterComponent } from '../todo/footer/footer.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TodoInfoModalComponent } from '../todo/section/todo-info-model/todo-info-modal.component';
import { Header2Component } from '../shared/header2/header2.component';
import { ManageComponent } from './manage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TodoInfoModalComponent,
    MenuComponent,
    Header2Component,
    HomeComponent,
    ManageComponent,
  ],
  imports: [CommonModule, ManageRoutingModule, FormsModule],
})
export class ManageModule {}
