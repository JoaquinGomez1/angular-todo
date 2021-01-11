import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'My angular todo';
  title2: string = 'This is my second title';

  constructor() {
    this.changeName('Another name');
  }

  changeName(name: string) {
    this.title = name;
  }
}
