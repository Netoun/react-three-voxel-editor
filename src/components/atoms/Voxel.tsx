import { useRef } from 'react'

import { IVoxel } from '@/types/voxel'

type Props = IVoxel

const Voxel = ({ x, y, z, currentColor }: Props) => {
  const boxRef = useRef()

  return (
    <mesh ref={boxRef} position={[x, y, z]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={currentColor} />
    </mesh>
  )
}

export default Voxel
