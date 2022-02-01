import { Events, IAction } from '@/types/action'
import { IGlobalState } from '@/types/globalState'

const Reducer = (state: IGlobalState, action: IAction) => {
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
    [Events.addVoxel]: {
      voxels: [...state.voxels, action.payload],
    },
  }

  const newState =
    {
      ...state,
      ...(event as any)[action.type],
    } || state

  return newState
}

export default Reducer
