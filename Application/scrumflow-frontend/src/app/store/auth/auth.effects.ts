import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import * as AuthActions from "./auth.actions"

@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ email, password }) =>
                this.authService.login(email, password).pipe(
                    map((res: any) => AuthActions.loginSuccess({
                        user: res.user,
                        access_token: res.access_token
                    })),
                    catchError((err) => of(AuthActions.loginFail({
                        message: err.error?.message || 'Pogresan email ili lozinka'
                    })))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ access_token }) => localStorage.setItem('access_token', access_token)),
            tap(() => this.router.navigate(['/dashboard']))
        ),
        { dispatch: false }
    );

    // register$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(AuthActions.register),
    //         switchMap(({ firstName, lastName, email, password, role }) =>
    //             this.authService.register({ firstName, lastName, email, password, role }).pipe(
    //                 map((res: any) => AuthActions.registerSuccess({
    //                     user: res.user,
    //                     access_token: res.access_token
    //                 })),
    //                 catchError(err => of(AuthActions.registerFail({
    //                     message: err.error?.message || 'Greska pri registraciji'
    //                 })))
    //             )
    //         )
    //     )
    // );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.register),
            tap(() => console.log('4. Effect triggerovan')),
            switchMap(({ firstName, lastName, email, password, role }) => {
                console.log('5. HTTP request se salje');
                return this.authService.register({ firstName, lastName, email, password, role }).pipe(
                    tap(res => console.log('6. Response stigao:', res)),
                    map((res: any) => AuthActions.registerSuccess({
                        user: res.user,
                        access_token: res.access_token
                    })),
                    catchError(err => {
                        console.log('7. Greska:', err);
                        return of(AuthActions.registerFail({
                            message: err.error?.message || 'Greska pri registraciji'
                        }));
                    })
                );
            })
        )
    );

    registerSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.registerSuccess),
            tap(({ access_token }) => localStorage.setItem('access_token', access_token)),
            tap(() => this.router.navigate(['/dashboard']))
        ),
        { dispatch: false }
    );

}