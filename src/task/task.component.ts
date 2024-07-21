import { Component, EventEmitter, input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DatePipe } from '@angular/common';

interface Task {
  id: String;
  userId: String;
  title: String;
  summary: String;
  dueDate: String;
}

@Component({
  selector: 'task-details',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  task = input.required<Task>();
  @Output() completedTaskId = new EventEmitter();

  // get getTaskName() {
  //   return this.taskName;
  // }

  handleTaskComplete() {
    this.completedTaskId.emit(this.task().id);
  }

  toDate(dateString: string | String): Date {
    return new Date(dateString.toString());
  }
}
