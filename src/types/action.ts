/* eslint-disable no-unused-vars */
export enum Events {
  changeColors = 'CHANGE_COLORS',
  selectCurrentColor = 'SELECT_CURRENT_COLOR',
  addVoxel = 'ADD_VOXEL',
}

export type IAction = {
  type: Events
  payload?: any
}
