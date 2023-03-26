import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Pipe({
  name: 'tasksFilter',
  // pure: false,
})
export class TasksFilterPipe implements PipeTransform {

  transform(value: Task[], isCompleted: boolean): Task[] {
    return value.filter( (item) => item.isCompleted === isCompleted);
  }

}
