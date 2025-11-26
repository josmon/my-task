import { Component, signal } from '@angular/core';
import { TaskInput } from './components/task-input/task-input';
import { TaskItem } from './components/task-item/task-item';
import { TaskStats } from './components/task-stats/task-stats';

interface Task {
  id: number;
  text: String;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskStats, TaskInput, TaskItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-task');
  tasks: Task[] = [];
  private nextId = 1;
  get compleetedTasksCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  handleTaskAdded(taskText: String) {
    this.tasks.push({
      id: this.nextId++,
      text: taskText,
      completed: false
    });
  }

  handleTaskDeleted(index: number) {
    this.tasks.splice(index, 1);
  }

  handleTaskCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
