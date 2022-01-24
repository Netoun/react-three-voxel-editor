import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { useContext, useState } from 'react'
import styled from 'styled-components'

import Grid from '@/components/atoms/Grid'
import Voxel from '@/components/atoms/Voxel'
import IVoxel from '@/interfaces/voxel'
import { globalContext } from '@/store'

const Scene = () => {
  const [voxels, setVoxels]: IVoxel[] = useState([])
  const { globalState } = useContext(globalContext)

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()

    const coordinates = e.intersections[0].point
    const newVoxel = {
      x: Math.floor(coordinates.x) + 0.5,
      y: (coordinates.y > 0 ? Math.floor(coordinates.y) : 0) + 0.5,
      z: Math.floor(coordinates.z) + 0.5,
      currentColor: globalState.settings.currentColor,
    }
    setVoxels([...voxels, newVoxel])
  }

  return (
    <Wrapper>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight color="white" intensity={1} position={[25, 25, 25]} />
        <OrthographicCamera position={[50, 50, 50]} zoom={25} makeDefault />
        <Grid onPointerUp={onPointerUp} />
        {voxels.map((voxel: IVoxel, i: number) => (
          <Voxel {...voxel} key={i} onPointerUp={onPointerUp} />
        ))}
        <OrbitControls />
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
