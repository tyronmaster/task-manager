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
  @Output() statusSet = new EventEmitter();

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasksList, event.previousIndex, event.currentIndex);
  }
  onRemoveTaskItem( id: number) {
    this.tasksList = this.tasksList.filter((item) => item.id !== id);
  }
  onSetTaskStatus(task: Task){
    this.statusSet.emit(task);
  }

}
