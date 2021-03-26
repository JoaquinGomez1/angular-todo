import { Injectable } from '@angular/core';
import { Todo } from '../app/models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    { id: '1', text: 'Learn Vue', completed: false },
    { id: '2', text: 'Learn Angular', completed: false },
    { id: '3', text: 'Learn React', completed: true },
  ];

  constructor() {}
}
