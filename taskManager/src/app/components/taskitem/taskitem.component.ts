import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
@Input() task!: Task;
@Output() setTaskStatus = new EventEmitter();
@Output() rmTask = new EventEmitter();

onSetTaskStatus(){
this.setTaskStatus.emit();
}

onRemoveTask(){
this.rmTask.emit();
}
}
