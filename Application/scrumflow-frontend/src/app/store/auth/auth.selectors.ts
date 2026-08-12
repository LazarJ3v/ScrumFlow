import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(
    selectAuthState, state => state.user
);

export const selectIsLoading = createSelector(
    selectAuthState, state => state.isLoading
);

export const selectAuthError = createSelector(
    selectAuthState, state => state.error
);

export const selectToken = createSelector(
    selectAuthState, state => state.access_token
);

export const selectIsLoggedIn = createSelector(
    selectAuthState, state => !!state.access_token
);