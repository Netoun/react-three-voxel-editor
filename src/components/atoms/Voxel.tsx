import { useRef } from 'react'

import IVoxel from '@/interfaces/voxel'

const Voxel = ({ x, y, z, currentColor, onPointerUp }: IVoxel) => {
  const boxRef = useRef()

  return (
    <mesh ref={boxRef} position={[x, y, z]} onPointerUp={onPointerUp}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={currentColor} />
    </mesh>
  )
}

export default Voxel