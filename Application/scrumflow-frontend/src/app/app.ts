import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableProfile } from './components/table-profile/table-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('scrumflow-frontend');
}
