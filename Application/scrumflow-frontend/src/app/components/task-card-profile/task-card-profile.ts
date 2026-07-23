import { Component, computed, signal } from '@angular/core';
import { Priority, TaskCardMinimal, TaskStatus } from '../../models/task-card.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-card-profile',
  imports: [DatePipe],
  templateUrl: './task-card-profile.html',
  styleUrl: './task-card-profile.css',
})
export class TaskCardProfile {
  defaultCard: TaskCardMinimal = {
    id: '0',
    title: 'default',
    backlogItemTitle: 'default',
    backlogItemId: '0',
    status: TaskStatus.TO_DO,
    priority: Priority.LOW,
    storyPoints: 0,
    commentsCount: 0,
    attachmentsCount: 0,
    dueDate: new Date()
  }

  taskCardMinimal = signal<TaskCardMinimal>(this.defaultCard);

  isOverdue = computed(() => {
    const due = this.taskCardMinimal().dueDate;
    return due ? new Date(due) < new Date() : false;
  });
}
