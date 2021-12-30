 
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../models/auth.state.interface";
import { registerFailureAction, registerStartAction, registerSuccessAction } from "./actions/register.actions";

const initialState: AuthStateInterface={
    isSubmitting: false,
     currentUser: {
     uid: '',
     email: '',
     displayName: 'displam',
     photoURL: '',
     emailVerified: false
   },    
     isLoggedIn: null,
     //validationErrors: null,
}

const authReducer= createReducer(
    initialState,
    on(
       registerStartAction,
       (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
       // validationErrors: null
      })
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
          isLoggedIn: true,
          currentUser: action.user
        })
      ),
      on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
          ...state,
          isSubmitting: false,
         // validationErrors: action.errors
        })
      )
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
  }