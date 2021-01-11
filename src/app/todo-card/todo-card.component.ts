import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: Todo;
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
  }
}
