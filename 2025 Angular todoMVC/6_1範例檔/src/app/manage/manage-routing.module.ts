import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'todo', component: TodoComponent },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
