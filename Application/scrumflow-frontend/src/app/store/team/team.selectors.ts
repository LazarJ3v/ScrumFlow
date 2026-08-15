import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TeamState } from "./team.reducer";

export const selectTeamState = createFeatureSelector<TeamState>('team');

// Lista svih timova
export const selectAllTeams = createSelector(
    selectTeamState,
    state => state.teams
);

// Selektovan tim
export const selectSelectedTeam = createSelector(
    selectTeamState,
    state => state.selectedTeam
);

// Loading
export const selectTeamIsLoading = createSelector(
    selectTeamState,
    state => state.isLoading
);

// Error
export const selectTeamError = createSelector(
    selectTeamState,
    state => state.error
);

// Da li korisnik ima timove
export const selectHasTeams = createSelector(
    selectAllTeams,
    teams => teams.length > 0
);

// Broj timova
export const selectTeamsCount = createSelector(
    selectAllTeams,
    teams => teams.length
);

// Clanovi selektovanog tima
export const selectSelectedTeamMembers = createSelector(
    selectSelectedTeam,
    team => team?.members ?? []
);