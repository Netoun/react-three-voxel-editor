import { Intersection } from '@react-three/fiber'

import { IVoxel } from '@/types/voxel'

const FaceCube = {
  south: [8, 9],
  north: [10, 11],
  east: [0, 1],
  west: [2, 3],
}

const variant = (faceIndex: number) => {
  return FaceCube.north.includes(faceIndex) || FaceCube.west.includes(faceIndex) ? 0.1 : 0
}

export const createVoxelCoordinates = (
  intersection: Intersection,
  color: string,
): IVoxel => {
  const coordinates = intersection.point
  const voxelCoordinate: IVoxel = {
    x: Math.floor(coordinates.x - variant(intersection.faceIndex!)) + 0.5,
    y: (coordinates.y > 0 ? Math.floor(coordinates.y) : 0) + 0.5,
    z: Math.floor(coordinates.z - variant(intersection.faceIndex!)) + 0.5,
    currentColor: color,
  }
  return voxelCoordinate
}
