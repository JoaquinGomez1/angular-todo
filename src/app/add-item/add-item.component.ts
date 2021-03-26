import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  text: string = '';
  inputName: string;

  constructor(private todoList: TodosService) {}

  ngOnInit(): void {}

  onKeydown(event) {
    const textVal = event.target.value;
    this.text = textVal;

    if (event.key === 'Enter') {
      this.addTodo();
    }
  }

  addTodo() {
    let todo = {
      id: `${Math.random()}`,
      text: this.text,
      completed: false,
    };

    this.inputName = '';
    this.todoList.todos.push(todo);
  }
}
