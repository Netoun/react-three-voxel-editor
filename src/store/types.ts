import { Dispatch } from 'react'

import { GlobalStateInterface } from '@/interfaces/GlobalStateInterface'

export type ActionType = {
  type: string
  payload?: any
}

export type ContextType = {
  globalState: GlobalStateInterface
  dispatch: Dispatch<ActionType>
}

export enum Events {
  changeColors = 'CHANGE_COLORS',
  selectCurrentColor = 'SELECT_CURRENT_COLOR',
}
