import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardProfile } from './components/task-card-profile/task-card-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('scrumflow-frontend');
}
