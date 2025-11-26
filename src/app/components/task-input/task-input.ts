import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  taskText:String='';
  @Output() taskAdded= new EventEmitter<String>();
  
  addTask(){
    if(this.taskText.trim()){
      this.taskAdded.emit(this.taskText);
      this.taskText='';
    }
  }
}
