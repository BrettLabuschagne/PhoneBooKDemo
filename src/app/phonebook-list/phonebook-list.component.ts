import { Component, OnInit} from '@angular/core';
import { Contact, PhonebookService } from '../services/phonebook.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.css']
})
export class PhonebookListComponent implements OnInit {

  contacts: Contact[];
  dataSource: any

  displayedColumns: string[] = ['firstname', 'surname', 'number', 'action'];

  constructor(
    private phonebookService: PhonebookService,
    private router: Router
  ) { }

  ngOnInit() {
      this.phonebookService.getContacts().subscribe(contacts => this.dataSource = new MatTableDataSource(contacts));
  }

  viewContact(id: string) {
    this.router.navigate(['/viewcontact', id]);
  }

  editContact(id: string) {
    this.router.navigate(['/editcontact', id]);
  }


  deleteContact(contact) {
    this.phonebookService.deleteContact(contact);
    this.router.routeReuseStrategy.shouldReuseRoute = ( ) => false; this.router.navigate([this.router.url]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
