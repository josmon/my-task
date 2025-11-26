import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-stats',
  imports: [],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.css',
})
export class TaskStats {
  @Input() totalTasks = 0;
  @Input() completedTasks = 0;

  get remainingTasks(): number {
    return this.totalTasks - this.completedTasks;
  }
  get completionPercentage(): number {
    if (this.totalTasks === 0) return 0;
    return Math.round((this.completedTasks / this.totalTasks) * 100);
  }
}
