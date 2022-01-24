import { ThreeEvent } from '@react-three/fiber'

export default interface Voxel {
  z: number
  x: number
  y: number
  color: string
  onClick: ThreeEvent<MouseEvent>
}
