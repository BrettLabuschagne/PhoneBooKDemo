import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookAddComponent } from './phonebook-add/phonebook-add.component';
import { PhonebookEditComponent } from './phonebook-edit/phonebook-edit.component';
import { PhonebookViewComponent } from './phonebook-view/phonebook-view.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookListComponent,
    PhonebookAddComponent,
    PhonebookEditComponent,
    PhonebookViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
