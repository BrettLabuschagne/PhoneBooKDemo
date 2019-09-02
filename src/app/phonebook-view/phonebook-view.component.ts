import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-phonebook-view',
  templateUrl: './phonebook-view.component.html',
  styleUrls: ['./phonebook-view.component.css']
})
export class PhonebookViewComponent implements OnInit {

  id: string;
  contact: Contact;

  constructor(
    private phonebookService: PhonebookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params['id'] );
    this.contact = this.phonebookService.getContact(this.id);
  }


  backToContactsList() {
    this.router.navigate(['/']);
  }
}
