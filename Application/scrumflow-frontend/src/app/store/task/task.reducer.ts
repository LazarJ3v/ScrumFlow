import { createReducer, on } from "@ngrx/store";
import { Priority, TaskCardMinimal, TaskStatus } from "../../models/task-card.model";
import { loadTasks, loadTasksFail, loadTasksSuccess } from "./task.actions";

export interface TaskCardState {
    tasks: TaskCardMinimal[];
    loading: boolean;
    error: string | null;
}

export const initialState: TaskCardState = {
    tasks: [],
    loading: false,
    error: null
}

export const taskReducer = createReducer(
    initialState,

    on(loadTasks, (state, { size, page }) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks,
        loading: false,
        error: null
    })),

    on(loadTasksFail, (state, { message }) => ({
        ...state,
        loading: false,
        error: message
    }))
)