import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [FormsModule],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: String;
  @Output() isCloseActive = new EventEmitter<boolean>();
  // @Output() addTask = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  /**
   * Dependency Injection using inject
   */
  private taskService = inject(TaskService);

  handleCancelAddingTask() {
    this.isCloseActive.emit(true);
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
    this.isCloseActive.emit(false);
    // t.emit({

    // });
  }
}
