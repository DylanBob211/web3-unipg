import { computed, Injectable, signal } from "@angular/core";
import { Receipe } from "./receipe";
import { ReceipeFormModel } from "./receipe-form/receipe-form";



@Injectable({
  providedIn: 'root'
})
export class ReceipesService {
  
  receipes = signal<Receipe[]>([
    { id: 1, name: 'Carbonara', receipe: 'Gli ingredienti che ti servono sono uova, GUANCIALE, pasta etc.'},
    { id: 2, name: 'Lasagna alla bolognese', receipe: 'Ragu, pasta e svariati altri ingredienti'},
    { id: 3, name: 'Crostata', receipe: 'Un dolce a base di marmellata'}
  ])

  total = computed(() => {
    return this.receipes().length
  })
  removeReceipe(id: number) {
    this.receipes.update((list) => {
      return list.filter(item => item.id !== id)
    })
  }

  addReceipe(receipeFormModel: ReceipeFormModel) {
    this.receipes.update((list) => {
      return [
        ...list, 
        { 
          id: Date.now(), 
          name: receipeFormModel.name, 
          receipe: receipeFormModel.receipe
        }
      ]
    })
  }
}
