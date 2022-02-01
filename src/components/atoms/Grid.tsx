import { useRef } from 'react'
import * as three from 'three'

const Grid = () => {
  const ref = useRef<three.Mesh>()

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshBasicMaterial attach="material" visible={false} />
    </mesh>
  )
}

export default Grid
