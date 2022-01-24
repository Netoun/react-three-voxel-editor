import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: bar;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

  display: flex;
  align-items: center;
  padding: 0 2rem;
`

const TitleApp = styled.h2`
  margin: 0;
  padding: 0;
`
const Bar = () => {
  return (
    <Wrapper>
      <TitleApp> React Voxel Editor </TitleApp>
    </Wrapper>
  )
}

export default Bar
