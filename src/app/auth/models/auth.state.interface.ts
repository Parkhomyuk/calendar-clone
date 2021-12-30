import { User } from "src/app/shared/interfaces/user";

export interface AuthStateInterface{
     isSubmitting: boolean
     currentUser: User | null
     isLoggedIn: boolean | null
     //validationErrors: BackendErrorsInterface | null
}