import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as uuid from 'uuid';

export interface Contact {
  id: string;
  firstname: string;
  surname: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  private readonly contacts: Contact[] = [
    {id: uuid.v4(), firstname: 'Brett', surname: 'Labuschagne', number: '123'  }
  ];

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  addContact(contact: Contact) {
    contact.id = uuid.v4();
    this.contacts.push(contact);
  }

  editContact (id: string, contact: Contact) {
    contact.id = id;
    this.contacts[this.contacts.findIndex(item => item.id === id)] = contact;
  }


  getContact(id: string) {
    return this.contacts[this.contacts.findIndex(item => item.id === id)];
  }

  deleteContact(id: string) {
    this.contacts.splice(this.contacts.findIndex(item => item.id === id), 1);
  }
}

