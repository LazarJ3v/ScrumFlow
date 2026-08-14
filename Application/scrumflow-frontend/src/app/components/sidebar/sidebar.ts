import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  user = input<any>();

  teams = signal([
    { id: 1, name: 'ScrumFlow Tim', code: 'SCRM-4X9K' }
  ]);

  selectedTeam = signal<number | null>(1);
  isTeamExpanded = signal(true);

  selectTeam(id: number) {
    this.selectedTeam.set(id);
    this.isTeamExpanded.set(true);
  }

  toggleTeam() {
    this.isTeamExpanded.set(!this.isTeamExpanded());
  }
}