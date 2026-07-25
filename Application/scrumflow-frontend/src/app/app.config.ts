import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/task/task.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
  provideRouter(routes),
  provideStore({ tasks: taskReducer }),
  provideHttpClient()
  ],
};
