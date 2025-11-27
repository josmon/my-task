import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task:String='';
  @Input() index=0;
  @Output() taskDeleted=new EventEmitter<number>();
  @Output() taskCompleted=new EventEmitter<number>();
  

  isCompleted=false;
  toggleComplete(){
    this.isCompleted=!this.isCompleted;
    this.taskCompleted.emit(this.index);
  }

  deleteTask(){
    this.taskDeleted.emit(this.index);
  }
}
