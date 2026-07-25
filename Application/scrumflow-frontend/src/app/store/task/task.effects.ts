import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, map, of, tap } from "rxjs";
import { loadTasks, loadTasksFail, loadTasksSuccess } from "./task.actions";
import { TaskCardMinimal } from "../../models/task-card.model";

const API_URL = 'http://localhost:3000';

@Injectable()
export class TaskEffects {
    private http = inject(HttpClient);
    private actions$ = inject(Actions);

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTasks),
            mergeMap(() => {
                return this.http.get<TaskCardMinimal[]>(`${API_URL}/tasks`).pipe(
                    map((list: TaskCardMinimal[]) => loadTasksSuccess({ tasks: list })),
                    catchError((err: HttpErrorResponse) => {
                        console.log('Greska:', err.message);
                        return of(loadTasksFail({ message: err.message }))
                    })
                );
            })
        )
    );
}