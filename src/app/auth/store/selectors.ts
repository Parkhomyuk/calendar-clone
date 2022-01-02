import { createFeatureSelector, createSelector } from "@ngrx/store";
 
import { AppStateInterface } from "src/app/shared/interfaces/appState.interface";
import { AuthStateInterface } from "../models/auth.state.interface";

export const authFeatureSelector = (state: AppStateInterface)=>state.auth;

export const isSubmittingSelector= createSelector(authFeatureSelector, (authState: AuthStateInterface)=>authState.isSubmitting);
export const idLoggedInSelector= createSelector(authFeatureSelector, (authState: AuthStateInterface)=>authState.isLoggedIn);
export const idAnonymosSelector= createSelector(authFeatureSelector, (authState: AuthStateInterface)=>authState.isLoggedIn ===false);
export const currentUserSelector= createSelector(authFeatureSelector, (authState: AuthStateInterface)=>authState.currentUser);

// export const validationErrorsSelector = createSelector(
//     authFeatureSelector,
//     (authState: AuthStateInterface) => authState.validationErrors
//   )
  

