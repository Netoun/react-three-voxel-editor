import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { MOUSE } from 'three'

import Grid from '@/components/atoms/Grid'
import Voxel from '@/components/atoms/Voxel'
import { globalContext } from '@/store'
import { Events } from '@/types/action'
import { IVoxel } from '@/types/voxel'
import { createVoxelCoordinates } from '@/utils/voxel'

const Scene = () => {
  const { globalState, dispatch } = useContext(globalContext)
  const [mouseCoordinates, setMouseCoordinates] = useState<any>({})

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    console.log(e)
    if (e.nativeEvent.type === 'click') return
    e.stopPropagation()

    const newVoxelCoordinate = createVoxelCoordinates(
      e.intersections[0],
      globalState.settings.currentColor,
    )

    dispatch({ type: Events.addVoxel, payload: newVoxelCoordinate })
  }

  return (
    <Wrapper>
      <PanelCoordinates>
        <span>x: {Math.floor(mouseCoordinates.x)}</span>
        <span>y: {Math.floor(mouseCoordinates.y)}</span>
        <span>z: {Math.floor(mouseCoordinates.z)}</span>
      </PanelCoordinates>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <gridHelper args={[50, 50, `white`, `gray`]} />
        <mesh
          onPointerMove={(e) => setMouseCoordinates(e.intersections[0].point)}
          onPointerUp={onPointerUp}>
          <ambientLight intensity={0.3} />
          <pointLight color="white" intensity={0.8} position={[10, 20, 30]} />
          <OrthographicCamera position={[50, 50, 50]} zoom={25} makeDefault />
          <Grid />
          {globalState.voxels.map((voxel: IVoxel, i: number) => (
            <Voxel {...voxel} key={i} />
          ))}
          <OrbitControls />
        </mesh>
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: scene;
  background: ${(props) => props.theme.colors.backgroundCanvas};
  height: 100%;
`

const PanelCoordinates = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.background};
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  gap: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  z-index: 50;
`

export default Scene
