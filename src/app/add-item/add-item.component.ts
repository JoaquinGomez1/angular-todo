import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

import { todosList } from '../todos/todos.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  text: string;

  constructor() {}

  ngOnInit(): void {}

  setText(textVal) {
    this.text = textVal;
  }

  addTodo() {
    let todo = {
      id: `${Math.random()}`,
      text: this.text,
      completed: false,
    };

    todosList.push(todo);
  }
}
