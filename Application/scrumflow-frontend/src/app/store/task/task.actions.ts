import { createAction, props } from "@ngrx/store";
import { TaskCardMinimal } from "../../models/task-card.model";

export const loadTasks = createAction(
    '[Task Card Profile Component]: Load tasks',
    //props<{ size: number, page: number }>()
);

export const loadTasksSuccess = createAction(
    '[Task Card Profile Component]: Load tasks success',
    props<{ tasks: TaskCardMinimal[] }>()
);

export const loadTasksFail = createAction(
    '[Task Card Profile Component]: Load tasks fail',
    props<{ message: string }>()
);