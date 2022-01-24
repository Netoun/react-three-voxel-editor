import { ThreeEvent } from '@react-three/fiber'
import { useRef } from 'react'
import * as three from 'three'

const GRID_SIZE: number[] = [50, 50]

type GridProps = {
  onPointerUp: ThreeEvent<MouseEvent>
}

const Grid = ({ onPointerUp }: GridProps) => {
  const ref = useRef<three.Mesh>()

  return (
    <>
      <gridHelper args={[GRID_SIZE[0], GRID_SIZE[1], `white`, `gray`]} />
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} onPointerUp={onPointerUp}>
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshBasicMaterial attach="material" visible={false} />
      </mesh>
    </>
  )
}

export default Grid
