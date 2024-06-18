export type IUser = {
  username?: string
  email?: string
  sub?: string
} | null
export type AuthState = {
  isAuthenticated?: boolean
  user?: IUser
}

export interface State {
  auth?: AuthState
}

export type AuthAction = { type: 'LOGIN'; payload: IUser } | { type: 'LOGOUT' }
export type Action = AuthAction

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: { isAuthenticated: true, user: action.payload },
      }
    case 'LOGOUT':
      return {
        ...state,
        auth: { isAuthenticated: false, user: null },
      }
    default:
      return state
  }
}
