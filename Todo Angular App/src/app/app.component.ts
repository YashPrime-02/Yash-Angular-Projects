import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  todoValue: string='';
  list: Todo[]=[];

  ngOnInit() //default values type
  {
    this.list=[];
    this.todoValue="";
  }
  addItem(){
    if(this.todoValue !== "")
    {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
      this.todoValue = "";
    }

  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
}

}
