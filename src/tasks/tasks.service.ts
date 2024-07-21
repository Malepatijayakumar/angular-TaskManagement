import { Injectable } from '@angular/core';
import { NewTask } from './task.model';

/**
 * Indicating angular to create an injectable bean
 */
@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.saveTasks();
    }
  }

  getTasks(userId: String) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  removeTask(id: String) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  addTask(taskData: NewTask, id: String) {
    this.tasks.push({
      id: Math.random.toString(),
      userId: id.toString(),
      title: taskData.title.toString(),
      summary: taskData.summary.toString(),
      dueDate: taskData.dueDate.toString(),
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
