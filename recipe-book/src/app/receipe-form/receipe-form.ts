import { Component, output, signal } from '@angular/core';
import { form, FormField, max, min, required } from '@angular/forms/signals';

export interface ReceipeFormModel {
  name: string;
  receipe: string;
}

@Component({
  selector: 'app-receipe-form',
  imports: [FormField],
  templateUrl: './receipe-form.html',
  styleUrl: './receipe-form.css',
})
export class ReceipeForm {
  add = output<ReceipeFormModel>()
  receipeModel = signal<ReceipeFormModel>({
    name: '',
    receipe: ''
  })
  receipeForm = form(this.receipeModel, schema => {
    required(schema.name, {
      message: 'Il nome è obbligatorio'
    });
    required(schema.receipe);
    min(schema.name, 3, {
      message: 'Il nome deve avere almeno 3 caratteri'
    });
    max(schema.receipe, 100)
  })
}
