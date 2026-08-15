import { createReducer, on } from "@ngrx/store";
import { Team } from "../../models/team.model";
import { TeamActions } from "./team.actions";

export interface TeamState {
    teams: Team[];
    selectedTeam: Team | null;
    isLoading: boolean;
    error: string | null;
}

export const initialTeamState: TeamState = {
    teams: [],
    selectedTeam: null,
    isLoading: false,
    error: null,
};

export const teamReducer = createReducer(
    initialTeamState,

    on(TeamActions.loadTeams, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(TeamActions.loadTeamsSuccess, (state, { teams }) => ({
        ...state,
        teams: teams,
        isLoading: false,
        error: null
    })),

    on(TeamActions.loadTeamsFailure, (state, { message }) => ({
        ...state,
        isLoading: false,
        error: message
    })),

    on(TeamActions.createTeam, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(TeamActions.createTeamSuccess, (state, { team }) => ({
        ...state,
        teams: [...state.teams, team],
        selectedTeam: team,
        isLoading: false,
        error: null
    })),

    on(TeamActions.createTeamFailure, (state, { message }) => ({
        ...state,
        isLoading: false,
        error: message
    })),

    on(TeamActions.joinTeam, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(TeamActions.joinTeamSuccess, (state, { team }) => ({
        ...state,
        teams: [...state.teams, team],
        selectedTeam: team,
        isLoading: false,
        error: null
    })),

    on(TeamActions.joinTeamFailure, (state, { message }) => ({
        ...state,
        isLoading: false,
        error: message
    }))
)