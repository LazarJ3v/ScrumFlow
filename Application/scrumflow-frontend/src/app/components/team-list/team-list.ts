import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTeams } from '../../store/team/team.selectors';
import { TeamActions } from '../../store/team/team.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-team-list',
  imports: [AsyncPipe],
  templateUrl: './team-list.html',
  styleUrl: './team-list.css',
})
export class TeamList implements OnInit{
  private store = inject(Store);

  teams = this.store.select(selectAllTeams);

  skip = signal<number>(0);
  take = signal<number>(10);

  ngOnInit() {
    this.store.dispatch(TeamActions.loadTeams({
      skip: this.skip(),
      take: this.take()
    }))
  };
}
