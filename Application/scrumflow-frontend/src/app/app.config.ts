import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/task/task.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './store/task/task.effects';
import { AuthEffects } from './store/auth/auth.effects';
import { authReducer } from './store/auth/auth.reducer';
import { teamReducer } from './store/team/team.reducer';
import { TeamEffects } from './store/team/team.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      tasks: taskReducer,
      auth: authReducer,
      team: teamReducer
    }),
    provideHttpClient(),
    provideEffects([AuthEffects, TaskEffects, TeamEffects]),
  ],
};
