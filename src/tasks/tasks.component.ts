import { Component, input, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from './task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'user-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: String;
  /**
   * Dependency Injection
   */
  private taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  userName = input.required<String>();
  taskName = 'test';
  isAddingNewTask = false;

  getUserTasks() {
    return this.taskService.getTasks(this.selectedUserId);
  }

  handleTaskComplete(id: String) {
    this.taskService.removeTask(id);
  }
  handleAddingNewTask() {
    this.isAddingNewTask = true;
  }
  handleCloseAddingTask(event: boolean) {
    this.isAddingNewTask = false;
  }

  // addNewTask(taskData: NewTask) {
  //   this.taskService.addTask(taskData, this.selectedUserId);
  //   this.isAddingNewTask = false;
  // }
}
