import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/undraw_having_fun_iais.svg'

const WelcomeLogoComponent = () => {
  return (
    <WrapperLogo>
      <WelcomeImg />
    </WrapperLogo>
  )
}

const WrapperLogo = styled.div`
  display: flex;
  justify-content: space-around;
`

const WelcomeImg = styled(Logo)`
  height: 180px;
  border: none;
  border-radius: 8px;
  background-color: none;
`

export default WelcomeLogoComponent
