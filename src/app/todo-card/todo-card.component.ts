import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todos: any[];
  inputCheckbox: object;

  constructor() {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      card: true,
      'is-completed': this.todo.completed,
    };

    return classes;
  }

  onChange(todo: Todo) {
    todo.completed = !todo.completed;

    this.inputCheckbox = {
      ...this.inputCheckbox,
      checked: todo.completed ? true : undefined,
    };
  }

  onDelete(id: string) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(todoIndex, 1);
  }
}
