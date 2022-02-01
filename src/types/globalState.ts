import { IAction } from './action'
import { ISettings } from './settings'
import { IVoxel } from './voxel'

export type IGlobalState = {
  undoActions: IAction[]
  actions: IAction[]
  voxels: IVoxel[]
  settings: ISettings
}
