import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { theme } from '../../config/theme'

import { WrapperButton } from '../generic/Wrapper'
import Button from '../generic/Button'

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
        <Button
          type={'button'}
          text='Sign In'
          action={() => displayForm('signin')}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={'60px'}
          width={'70%'}
        />
      </WrapperButton>
      <WrapperButton margin={'20px 0 0 0'}>
        <Button
          type={'button'}
          text='Sign Up'
          action={() => displayForm('signup')}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={'60px'}
          width={'70%'}
        />
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
