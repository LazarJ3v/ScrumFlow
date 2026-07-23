import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardProfile } from './task-card-profile';

describe('TaskCardProfile', () => {
  let component: TaskCardProfile;
  let fixture: ComponentFixture<TaskCardProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCardProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
