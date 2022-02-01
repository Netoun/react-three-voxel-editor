import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Bar from './components/Bar'
import GlobalStyle from './components/GlobalStyle'
import Scene from './components/Scene'
import Sidebar from './components/Sidebar'
import { Theme } from './theme'

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 16rem 1.5fr 1fr;
  grid-template-rows: 5rem 1.5fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'bar bar bar'
    'sidebar scene scene'
    'sidebar scene scene';
`

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <Sidebar />
        <Bar />
        <Scene />
      </Container>
    </ThemeProvider>
  )
}

export default App
