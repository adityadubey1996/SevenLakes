import styled from 'styled-components'
import React from 'react'
const LoaderStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loadercomponent = () => {
  return <LoaderStyles>Loading</LoaderStyles>
}
export default Loadercomponent
