import { Component, computed, input, signal } from '@angular/core';
import { TableHeader } from '../../models/table-header';
import { TaskCardProfile } from '../task-card-profile/task-card-profile';
import { Priority, TaskCardMinimal, TaskStatus } from '../../models/task-card.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-profile',
  imports: [TaskCardProfile, DatePipe],
  templateUrl: './table-profile.html',
  styleUrl: './table-profile.css',
})
export class TableProfile {

  defaultHeader: TableHeader = {
    sprintName: 'Sprint 3',
    sprintGoal: 'Implementacija auth modula',
    startDate: new Date('2025-01-23'),
    endDate: new Date('2025-02-06'),
    daysRemaining: 12,
    totalStoryPoints: 89,
    completedStoryPoints: 80,
    onlineMembers: []
  };

  table = signal<TableHeader>(this.defaultHeader);

  // Svi taskovi — u produkciji ce doci iz NgRx store-a / servisa
  tasks = input<TaskCardMinimal[]>([
    {
      id: '1',
      title: 'default1',
      backlogItemTitle: 'default1',
      backlogItemId: '0',
      status: TaskStatus.TO_DO,
      priority: Priority.LOW,
      storyPoints: 5,
      commentsCount: 0,
      attachmentsCount: 0,
      dueDate: new Date()
    },
    {
      id: '2',
      title: 'default2',
      backlogItemTitle: 'default2',
      backlogItemId: '0',
      status: TaskStatus.IN_PROGRESS,
      priority: Priority.HIGH,
      storyPoints: 4,
      commentsCount: 0,
      attachmentsCount: 0,
      dueDate: new Date()
    }
  ]);

  // Computed po kolonama
  todoTasks = computed(() => this.tasks().filter(t => t.status === TaskStatus.TO_DO));
  inProgressTasks = computed(() => this.tasks().filter(t => t.status === TaskStatus.IN_PROGRESS));
  reviewTasks = computed(() => this.tasks().filter(t => t.status === TaskStatus.REVIEW));
  doneTasks = computed(() => this.tasks().filter(t => t.status === TaskStatus.DONE));

  // Progress bar procenat
  progressPercent = computed(() => {
    const { totalStoryPoints, completedStoryPoints } = this.table();
    if (totalStoryPoints === 0) return 0;
    return Math.round((completedStoryPoints / totalStoryPoints) * 100);
  });
}