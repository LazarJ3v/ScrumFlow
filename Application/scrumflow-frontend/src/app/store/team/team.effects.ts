import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TeamActions } from "./team.actions";
import { mergeMap, map, catchError, of, tap } from "rxjs";
import { Team } from "../../models/team.model";
import { TeamService } from "../../core/team/team.service";

export class TeamEffects {
    private actions$ = inject(Actions);
    private teamService = inject(TeamService);

    loadTeams$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TeamActions.loadTeams),
        tap(() => console.log('1. Effect triggerovan')),
        mergeMap(({ skip, take }) => {
            console.log('2. mergeMap - skip:', skip, 'take:', take);
            return this.teamService.getAll(skip, take).pipe(
                tap(teams => console.log('3. Response stigao:', teams)),
                map((teams: Team[]) => {
                    console.log('4. Dispatching loadTeamsSuccess');
                    return TeamActions.loadTeamsSuccess({ teams });
                }),
                catchError((err: HttpErrorResponse) => {
                    console.log('5. Greska:', err.message);
                    return of(TeamActions.loadTeamsFailure({ message: err.message }));
                })
            );
        })
    )
);
}