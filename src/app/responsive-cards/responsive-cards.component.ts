import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-responsive-cards',
  standalone: true,
  imports:[CommonModule,NgFor],
  templateUrl: './responsive-cards.component.html',
  styleUrls: ['./responsive-cards.component.css']
})
export class ResponsiveCardsComponent {
  cards = [
    { title: 'Card 1', content: 'This is card number one.' },
    { title: 'Card 2', content: 'This is card number two.' },
    { title: 'Card 3', content: 'This is card number three.' }
  ];
}

