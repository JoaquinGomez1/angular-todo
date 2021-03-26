import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private myTodos: TodosService) {}

  ngOnInit(): void {
    this.todos = this.myTodos.todos;
  }
}
