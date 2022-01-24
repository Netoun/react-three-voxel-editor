import 'react-color-palette/lib/css/styles.css'

import { useEffect, useState } from 'react'
import { Color, ColorPicker, useColor } from 'react-color-palette'
import styled from 'styled-components'

type PropsGrid = {
  colors: string[]
  onSelectedColorChange: Function
  onColorsChange: Function
}

const ColorGrid = ({ colors, onSelectedColorChange, onColorsChange }: PropsGrid) => {
  const [indexSelectedColor, setIndexSelectedColor] = useState(0)
  const [displayColoPicker, setDisplayColorPicker] = useState(false)
  const [listColors, setListColors] = useState<string[]>([])

  const [colorPicker, setColorPicker] = useColor('hex', '')

  useEffect(() => {
    setListColors(colors || [])
  }, [colors])

  const onColorPickerChange = (color: Color) => {
    const newListColor = Object.assign([], listColors, {
      [indexSelectedColor]: color.hex,
    })
    onColorsChange(newListColor)
  }

  useEffect(() => {
    listColors.length && onSelectedColorChange(listColors[indexSelectedColor])
  }, [indexSelectedColor])

  const onClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    const event = {
      1: () => setIndexSelectedColor(index),
      2: () => setDisplayColorPicker(true),
    }

    return (event as any)[e.detail]()
  }

  return (
    <Wrapper>
      {displayColoPicker && (
        <ModalPicker>
          <ColorPicker
            width={456}
            height={228}
            color={colorPicker}
            onChange={(color) => setColorPicker(color)}
            onChangeComplete={onColorPickerChange}
            hideHSV
            dark
          />
        </ModalPicker>
      )}
      {listColors &&
        listColors.map((color, index) => (
          <ColorItem color={color} onClick={(e) => onClick(e, index)} key={index} />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
`

const ModalPicker = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 50;
`

type PropsItem = {
  color: string
}

const ColorItem = styled.div<PropsItem>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 0px 0.05rem rgba(255, 255, 255, 0.15);
  background: ${(props: PropsItem) => props.color};
`

export default ColorGrid
