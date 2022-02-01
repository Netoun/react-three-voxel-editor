import { ReactElement, ReactNode, useEffect } from 'react'
import styled from 'styled-components'

import useComponentVisible from '@/hooks/useComponentVisible'

type Props = {
  children: ReactNode
  open: boolean
  onClose: Function
}

const Modal = ({ children, open, onClose }: Props): ReactElement => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  useEffect(() => {
    setIsComponentVisible(open)
  }, [open])

  useEffect(() => {
    !isComponentVisible && onClose()
  }, [isComponentVisible])

  return (
    <ModalWrapper ref={ref} open="open">
      {isComponentVisible && children}
    </ModalWrapper>
  )
}

type PropsWrapper = {
  open: boolean
}

const ModalWrapper = styled.div<PropsWrapper>`
  display: ${(props) => (props.open ? 'initial' : 'none')};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 50;
`

export default Modal
