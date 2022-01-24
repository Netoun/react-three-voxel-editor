import { useContext } from 'react'
import { Color } from 'react-color-palette'
import styled from 'styled-components'

import ColorGrid from '@/components/molecules/ColorGrid'
import { globalContext } from '@/store'
import { Events } from '@/store/types'

const Sidebar = () => {
  const { globalState, dispatch } = useContext(globalContext)

  const onColorsChange = (colors: string[]) => {
    dispatch({ type: Events.changeColors, payload: colors })
  }

  const onSelectedColorChange = (color: string) => {
    dispatch({ type: Events.selectCurrentColor, payload: color })
  }

  return (
    <Wrapper>
      <ColorGrid
        colors={globalState.settings.colors}
        onColorsChange={onColorsChange}
        onSelectedColorChange={onSelectedColorChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: sidebar;
  padding: 1rem;
`

export default Sidebar
