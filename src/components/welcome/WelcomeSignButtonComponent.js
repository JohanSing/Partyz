import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../../config/theme'

import { WrapperButton } from '../generic/Wrapper'
import ButtonComponent from '../generic/ButtonComponent'

const WelcomeSignButtonComponent = ({ displayForm }) => {
  return (
    <Wrapper>
      <WrapperButton margin={'20px 0 0 0'}>
        <ButtonComponent
          text='Sign In'
          action={() => displayForm('signin')}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={60}
          width={170}
        ></ButtonComponent>
      </WrapperButton>
      <WrapperButton margin={'20px 0 0 0'}>
        <ButtonComponent
          text='Sign Up'
          action={() => displayForm('signup')}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={60}
          width={170}
        ></ButtonComponent>
      </WrapperButton>
    </Wrapper>
  )
}

WelcomeSignButtonComponent.propTypes = {
  displayForm: PropTypes.func
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`

export default WelcomeSignButtonComponent
