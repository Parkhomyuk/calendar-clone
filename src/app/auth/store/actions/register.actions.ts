import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/user';
import { RegisterRequestInterface } from '../../models/registerRequestUser.interface';
import { ActionTypes } from '../action.types';

export const registerStartAction= createAction(
    ActionTypes.REGISTER_START,
    props<{request: RegisterRequestInterface}>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{user: any}>()
)

export const registerFailureAction= createAction(
    ActionTypes.REGISTER_FAILURE
)