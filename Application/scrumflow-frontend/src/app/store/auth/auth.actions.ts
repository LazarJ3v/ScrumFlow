import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

export const login = createAction(
    '[Login Component]: Login',
    props<{email: string, password: string}>()
);

export const loginSuccess = createAction(
    '[Login Component]: Login success',
    props<{user: User, access_token: string}>()
);

export const loginFail = createAction(
    '[Login Component]: Login fail',
    props<{message: string}>()
);

export const register = createAction(
    '[Register Component]: Register',
    props<{
        firstName: string,
        lastName: string,
        email: string,
        role: string,
        password: string
    }>()
)

export const registerSuccess = createAction(
    '[Register Component]: Register success',
    props<{user: User, access_token: string}>()
)

export const registerFail = createAction(
    '[Register Component]: Register fail',
    props<{message: string}>()
)