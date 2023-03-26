import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})


export class AddTaskFormComponent {

  @Output() addTask = new EventEmitter<Task>();

  taskTitle = '';
  counter = 0;

  onSubmit() {
    const newTask: Task = {
      id: this.counter,
      title: this.taskTitle,
      isCompleted: false,
    }
    this.counter++;
    this.addTask.emit(newTask);
    this.taskTitle = '';
    // console.log(this.tasksList);
  }
}
