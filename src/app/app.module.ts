import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AddItemComponent } from './add-item/add-item.component';

import { FormsModule } from '@angular/forms';
import { TodosService } from '../services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoCardComponent,
    AddItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
