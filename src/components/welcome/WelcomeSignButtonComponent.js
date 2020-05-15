import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { theme } from '../../config/theme'

import { WrapperButton } from '../generic/Wrapper'
import ButtonComponent from '../generic/ButtonComponent'

const WelcomeSignButtonComponent = ({ welcomeState, displayForm }) => {
  const [propertyAnimation, setPropertyAnimation] = useState({
    display: 'none',
    opacity: 0
  })

  useEffect(() => {
    if (!welcomeState) {
      setPropertyAnimation({ display: 'flex', opacity: 1 })
    }
  }, [welcomeState])

  return (
    <Wrapper
      animate={{
        display: propertyAnimation.display,
        opacity: propertyAnimation.opacity
      }}
      transition={{ duration: 1 }}
    >
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
  welcomeState: PropTypes.bool,
  displayForm: PropTypes.func
}

const Wrapper = styled(motion.div)`
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`

export default WelcomeSignButtonComponent
