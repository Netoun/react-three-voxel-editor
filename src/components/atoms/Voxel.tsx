import { useRef } from 'react'

import IVoxel from '@/interfaces/voxel'

const Voxel = ({ x, y, z, color, onPointerUp }: IVoxel) => {
  const boxRef = useRef()

  return (
    <mesh ref={boxRef} position={[x, y + 0.5, z]} onPointerUp={onPointerUp}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export default Voxel
