import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,CommonModule,FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'todo-app';
  tasks: { text: string; completed: boolean; dueDate?: string; isEditing?: boolean }[] = [];
  newTask: string = '';
  dueDate: string = '';

  addTask() {
    if (this.newTask.trim() !== '' && this.dueDate.trim() !== '') {
      this.tasks.push({
        text: this.newTask,
        completed: false,
        dueDate: this.dueDate
      });

      // Reset fields
      this.newTask = '';
      this.dueDate = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
 
}
