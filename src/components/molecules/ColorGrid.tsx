import 'react-color-palette/lib/css/styles.css'

import { useEffect, useState } from 'react'
import { Color, ColorPicker, useColor } from 'react-color-palette'
import styled from 'styled-components'

import Modal from '@/components/atoms/Modal'

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
  }, [indexSelectedColor, listColors])

  const onClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    const event = {
      1: () => setIndexSelectedColor(index),
      2: () => setDisplayColorPicker(true),
    }
    console.log((event as any)[e.detail])
    return (event as any)[e.detail]?.()
  }

  return (
    <Wrapper>
      <Modal open={displayColoPicker} onClose={() => setDisplayColorPicker(false)}>
        <ColorPicker
          width={456}
          height={228}
          color={colorPicker}
          onChange={(color) => setColorPicker(color)}
          onChangeComplete={onColorPickerChange}
          hideHSV
          dark
        />
      </Modal>

      {listColors &&
        listColors.map((color, index) => (
          <ColorItem
            color={color}
            onClick={(e) => onClick(e, index)}
            key={index}
            selected={index === indexSelectedColor}
          />
        ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 0.5rem;
`

type PropsItem = {
  color: string
  selected: boolean
}

const ColorItem = styled.div<PropsItem>`
  box-sizing: border-box;
  width: 2rem;
  height: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => (props.selected ? '0.2rem' : '0.05rem')} solid #fff;
  background: ${(props: PropsItem) => props.color};
`

export default ColorGrid
