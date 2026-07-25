import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TaskCardMinimal } from "../../models/task-card.model";
import { loadTasksSuccess } from "./task.actions";
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export interface TasksList extends EntityState<TaskCardMinimal> {
    selectedTaskId: string | null;
}

const adapter = createEntityAdapter({
    selectId: (t: TaskCardMinimal) => t.id
});

export const initialState = adapter.getInitialState({
    selectedTaskId: null
});

export const taskReducer = createReducer(
    initialState,
    on(loadTasksSuccess, (state, { tasks }) => adapter.addMany(tasks, state))
);

export const selectTasks = createFeatureSelector<TasksList>('tasks');

export const selectAllTasks = createSelector(selectTasks, adapter.getSelectors().selectAll);

export const selectCurrentTask = createSelector(
    selectTasks,
    selectAllTasks,
    (state, tasks) => {
        return tasks.filter((task) => task.id === state.selectedTaskId)[0];
    }
);