import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() tasksList: Task[] = [];

  todoTasks: Task[] = [];
  completedTasks: Task[] = [];

  ngOnChanges(){
    this.qualifyTasks();
  }
  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasksList, event.previousIndex, event.currentIndex);
  }

  onRemoveTaskItem( id: number) {
    this.tasksList = this.tasksList.filter((item) => item.id !== id);
  }
  onSetTaskStatus(task: Task){
    task.isCompleted = !task.isCompleted;
    this.qualifyTasks();
    console.log(this.tasksList);
  }

  private qualifyTasks(){
    this.todoTasks = this.tasksList.filter((item) => !item.isCompleted);
    console.log(this.todoTasks);
    this.completedTasks = this.tasksList.filter((item) => item.isCompleted);
    console.log(this.completedTasks);
  }
}
