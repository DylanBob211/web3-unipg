import { Component, input, output } from '@angular/core';
import { Receipe } from '../receipe';

@Component({
  selector: 'app-receipe-card',
  imports: [],
  templateUrl: './receipe-card.html',
  styleUrl: './receipe-card.css',
})
export class ReceipeCard {
  receipe = input.required<Receipe>();
  remove = output<number>();

}
