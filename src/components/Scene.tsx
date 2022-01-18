import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { useState } from 'react'
import styled from 'styled-components'

import Voxel from '@/components/atoms/Voxel'
import IVoxel from '@/interfaces/voxel'

const GRID_SIZE: number[] = [25, 25]

const Scene = () => {
  const [voxels, setVoxels]: IVoxel[] = useState([])

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    const coordinates = e.intersections[0].point
    setVoxels([
      ...voxels,
      {
        x: Math.floor(coordinates.x),
        y: Math.floor(coordinates.y),
        z: Math.floor(coordinates.z),
        color: 'red',
      },
    ])
  }

  return (
    <Wrapper>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <OrthographicCamera position={[10, 10, 10]} zoom={25} makeDefault />
        <gridHelper
          args={[GRID_SIZE[0], GRID_SIZE[1], `white`, `gray`]}
          onPointerUp={onPointerUp}
        />
        {voxels.map((voxel: IVoxel, i: number) => (
          <Voxel {...voxel} key={i} onPointerUp={onPointerUp} />
        ))}
        <OrbitControls
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: scene;
  background: #1b1b20;
  height: 100%;
`

export default Scene
