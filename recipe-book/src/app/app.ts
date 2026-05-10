import { Component, computed, inject, signal } from '@angular/core';
import { ReceipeCard } from './receipe-card/receipe-card';
import { Receipe } from './receipe';
import { ReceipeForm, ReceipeFormModel } from './receipe-form/receipe-form';
import { ReceipesService } from './receipes.service';

@Component({
  selector: 'app-root',
  imports: [ReceipeCard, ReceipeForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recipe-book');

  receipeService = inject(ReceipesService)
  
}
