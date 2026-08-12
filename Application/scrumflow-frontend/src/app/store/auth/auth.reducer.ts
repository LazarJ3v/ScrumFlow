import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
    user: User | null;
    access_token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    access_token: null,
    isLoading: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.login, state => ({
        ...state,
        isLoading: true,
        error: null,
    })),

    on(AuthActions.loginSuccess, (state, { user, access_token }) => ({
        ...state,
        user,
        access_token,
        isLoading: false,
        error: null,
    })),

    on(AuthActions.loginFail, (state, { message }) => ({
        ...state,
        isLoading: false,
        message,
    })),

    on(AuthActions.register, state => ({
        ...state,
        isLoading: true,
        error: null,
    })),

    on(AuthActions.registerSuccess, state => ({
        ...state,
        isLoading: false,
        error: null,
    })),

    on(AuthActions.registerFail, (state, { message }) => ({
        ...state,
        isLoading: false,
        message,
    })),

    //on(AuthActions.logout, () => initialState),
);