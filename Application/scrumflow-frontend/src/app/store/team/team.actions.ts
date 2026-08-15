import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Team } from "../../models/team.model";

export const TeamActions = createActionGroup({
  source: 'Team',
  events: {
    'Load Teams': props<{ skip: number; take: number }>(),
    'Load Teams Success': props<{ teams: Team[] }>(),
    'Load Teams Failure': props<{ message: string }>(),

    'Create Team': props<{ name: string; description?: string; createdById: number }>(),
    'Create Team Success': props<{ team: Team }>(),
    'Create Team Failure': props<{ message: string }>(),

    'Join Team': props<{ userId: number; joinCode: string }>(),
    'Join Team Success': props<{ team: Team }>(),
    'Join Team Failure': props<{ message: string }>(),
  }
});