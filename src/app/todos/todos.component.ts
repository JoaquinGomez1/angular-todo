import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

export const todosList = [
  { id: '1', text: 'Learn Vue', completed: false },
  { id: '2', text: 'Learn Angular', completed: false },
  { id: '2', text: 'Learn React', completed: true },
];

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = todosList;
  }
}
