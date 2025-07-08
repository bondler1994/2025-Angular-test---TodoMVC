import { TodoResolver } from 'src/app/@resolves/todo.resolver';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  {
    path: 'content/:id',
    children: [
      {
        path: ':action',
        component: TodoContentComponent,
        resolve: { todoList: TodoResolver },
      },
      { path: '', redirectTo: 'All', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
