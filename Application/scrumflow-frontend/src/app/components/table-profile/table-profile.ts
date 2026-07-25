import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { TableHeader } from '../../models/table-header';
import { TaskCardProfile } from '../task-card-profile/task-card-profile';
import { TaskCardMinimal, TaskStatus } from '../../models/task-card.model';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadTasks } from '../../store/task/task.actions';
import { selectAllTasks } from '../../store/task/task.reducer';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table-profile',
  imports: [TaskCardProfile, DatePipe],
  templateUrl: './table-profile.html',
  styleUrl: './table-profile.css',
})
export class TableProfile implements OnInit {

  private store = inject(Store);

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
  tasks$ = this.store.select(selectAllTasks);

  tasks = toSignal(this.tasks$, { initialValue: [] as TaskCardMinimal[] });

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

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

}