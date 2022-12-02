import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TextBlockComponent } from '../components/text-block/text-block.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NavbarComponent, TextBlockComponent, RouterModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
