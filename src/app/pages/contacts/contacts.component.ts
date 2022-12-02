import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../homepage/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [NavbarComponent, HomeComponent, RouterModule],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
