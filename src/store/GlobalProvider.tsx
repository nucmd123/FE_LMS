import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import { Action, AuthState, State, reducer } from './reducer'

interface Props {
  children: ReactNode
}

const initAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const initState: State = {
  auth: initAuthState,
}

export const GlobalContext = createContext<{
  state: State
  dispatch: Dispatch<Action>
}>({
  state: initState,
  dispatch: () => null,
})

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
