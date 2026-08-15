import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../store/auth/auth.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import * as TeamAction from "../../store/team/team.actions"

@Component({
  selector: 'app-team-profile',
  imports: [],
  templateUrl: './team-profile.html',
  styleUrl: './team-profile.css',
})
export class TeamProfile {
  private store = inject(Store);

  user = toSignal(this.store.select(selectCurrentUser));

  name = signal<string>('');
  description = signal<string>('');
  joinCode = signal<string>('');
  createdById = signal<number>(0);

  onCreateTeam() {
    this.store.dispatch(TeamAction.TeamActions.createTeam({
      name: this.name(),
      description: this.description(),
      createdById: this.createdById()
    }))
  }

  onJoinTeam() {
    this.store.dispatch(TeamAction.TeamActions.joinTeam({
      userId: Number(this.user()?.id),
      joinCode: this.joinCode()
    }))
  }
}
