import { GlobalStateInterface } from '@/interfaces/GlobalStateInterface'

import { ActionType, Events } from './types'

const Reducer = (state: GlobalStateInterface, action: ActionType) => {
  const event = {
    [Events.selectCurrentColor]: {
      settings: {
        ...state.settings,
        currentColor: action.payload,
      },
    },
    [Events.changeColors]: {
      settings: {
        ...state.settings,
        colors: action.payload,
      },
    },
  }

  console.log(action, Events.changeColors)
  return (
    {
      ...state,
      ...(event as any)[action.type],
    } || state
  )
}

export default Reducer
