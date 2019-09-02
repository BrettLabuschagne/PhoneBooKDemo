import { Component, OnInit } from '@angular/core';
import { Contact, PhonebookService } from '../services/phonebook.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-edit',
  templateUrl: './phonebook-edit.component.html',
  styleUrls: ['./phonebook-edit.component.css']
})
export class PhonebookEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private phonebookService: PhonebookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contactEditForm: FormGroup;
  id: string;
  contact: Contact;

  ngOnInit() {

    this.route.params.subscribe( params => this.id = params['id'] );
    this.contact = this.phonebookService.getContact(this.id);

    this.contactEditForm = this.fb.group({
      firstname: [this.contact.firstname, Validators.required],
      surname: [this.contact.surname, Validators.required],
      number: [this.contact.number, Validators.required],
    });
  }

  editContact() {
    this.phonebookService.editContact(this.id, this.contactEditForm.value);
    this.router.navigate(['/']);
  }

  backToContactsList() {
    this.router.navigate(['/']);
  }

}
