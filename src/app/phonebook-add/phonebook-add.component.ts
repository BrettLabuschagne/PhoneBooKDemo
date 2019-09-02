import { Component, OnInit } from '@angular/core';
import { Contact, PhonebookService } from '../services/phonebook.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phonebook-add',
  templateUrl: './phonebook-add.component.html',
  styleUrls: ['./phonebook-add.component.css']
})
export class PhonebookAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private phonebookService: PhonebookService,
    private router: Router
  ) { }

  contactForm: FormGroup;

  ngOnInit() {

    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      number: ['', Validators.required],
    });
  }

  addContact() {
    this.phonebookService.addContact(this.contactForm.value);
    this.router.navigate(['/']);
  }

  backToContactsList() {
    this.router.navigate(['/']);
  }

}
