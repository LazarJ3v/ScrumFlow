import { Component, inject, input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TeamActions from "../../store/team/team.actions";
import * as AuthSelectors from "../../store/auth/auth.selectors";

@Component({
  selector: 'app-createteam-page',
  imports: [],
  templateUrl: './createteam-page.html',
  styleUrl: './createteam-page.css',
})
export class CreateteamPage {
  private store = inject(Store);

  private user = this.store.select(AuthSelectors.selectCurrentUser);

  name = input<string>();
  description = input<string>();

  createTeamOnSubmit(){
    
  }
}
