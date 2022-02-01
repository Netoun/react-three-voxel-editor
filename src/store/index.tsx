import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useReducer,
} from 'react'

import { IAction } from '@/types/action'
import { IGlobalState } from '@/types/globalState'

import Reducer from './reducer'

export type ContextType = {
  globalState: IGlobalState
  dispatch: Dispatch<IAction>
}

export const globalContext = createContext({} as ContextType)

export const GlobalStore = ({ children }: { children: ReactNode }): ReactElement => {
  const [globalState, dispatch] = useReducer(Reducer, initializeState())

  return (
    <globalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </globalContext.Provider>
  )
}

export const initialState: IGlobalState = {
  settings: {
    currentColor: '#000',
    colors: [
      '#000',
      '#fff',
      '#d2d',
      '#f0f8ff',
      '#faebd7',
      '#00ffff',
      '#7fffd4',
      '#f0ffff',
      '#f5f5dc',
      '#ffe4c4',
      '#000000',
      '#ffebcd',
      '#0000ff',
      '#8a2be2',
      '#a52a2a',
    ],
  },
  undoActions: [],
  actions: [],
  voxels: [],
}

const initializeState = () => {
  return initialState
}
