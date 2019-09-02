import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookAddComponent } from './phonebook-add/phonebook-add.component';
import { PhonebookViewComponent } from './phonebook-view/phonebook-view.component';
import { PhonebookEditComponent } from './phonebook-edit/phonebook-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PhonebookListComponent },
  { path: 'addcontact', component: PhonebookAddComponent },
  { path: 'viewcontact/:id', component: PhonebookViewComponent },
  { path: 'editcontact/:id', component: PhonebookEditComponent },
  { path: '**', redirectTo: 'list' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

