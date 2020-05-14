import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { theme } from '../../config/theme'

import { ContainerForm } from '../generic/Container'
import { WrapperInput, WrapperButton } from '../generic/Wrapper'
import InputComponent from '../form/InputComponent'
import ButtonSubmitComponent from '../form/ButtonSubmitComponent'
import ButtonBack from '../generic/ButtonBack'

const WelcomeSignUpFormComponent = ({
  authState,
  setAuthState,
  actionForm
}) => {
  const [formSignUpState, setFormSignUpState] = useState({
    context: 'signup',
    email: '',
    password: ''
  })
  const [propertyAnimation, setPositionComponent] = useState({
    display: 'none',
    height: '0px'
  })

  useEffect(() => {
    if (authState === 'signup') {
      setPositionComponent({ display: 'flex', height: '400px' })
    }

    if (authState === null || authState === 'signin') {
      setPositionComponent({ height: '0px' })
      setTimeout(() => {
        setPositionComponent({ display: 'none' })
      }, 600)
    }
  }, [authState])

  const handleSubmit = event => {
    event.preventDefault()
    actionForm(formSignUpState)
  }

  return (
    <WrapperFormSignUp
      animate={{
        display: propertyAnimation.display,
        height: propertyAnimation.height
      }}
      transition={{ duration: 0.7 }}
    >
      <ContainerForm
        width={20}
        padding={'0 10px'}
        borderRadius={'30px 30px 0 0'}
      >
        <ButtonBack
          action={setAuthState}
          bgcolor={theme.colors['btn-terciary']}
          fontcolor={theme.colors['font-secondary']}
        />
        <FormSign onSubmit={handleSubmit}>
          <WrapperInput width={20} margin={'20px 0 0 0'}>
            <InputComponent
              name='email'
              type='text'
              placeholder='E-mail'
              formState={formSignUpState}
              onChangeAction={setFormSignUpState}
              bgColor={theme.colors['btn-fourth']}
              fontColor={theme.colors['btn-primary']}
              height={60}
              width={130}
            />
          </WrapperInput>
          <WrapperInput width={20} margin={'20px 0 0 0'}>
            <InputComponent
              name='password'
              type='password'
              placeholder='Password'
              formState={formSignUpState}
              onChangeAction={setFormSignUpState}
              bgColor={theme.colors['btn-fourth']}
              fontColor={theme.colors['btn-primary']}
              height={60}
              width={130}
            />
          </WrapperInput>
          <WrapperButton margin={'40px 0 0 0'}>
            <ButtonSubmitComponent
              text='Create an account 🚀'
              bgColor={theme.colors['btn-terciary']}
              fontColor={theme.colors['font-secondary']}
              height={60}
              width={120}
            />
          </WrapperButton>
        </FormSign>
      </ContainerForm>
    </WrapperFormSignUp>
  )
}

WelcomeSignUpFormComponent.propTypes = {
  authState: PropTypes.string,
  setAuthState: PropTypes.func,
  actionForm: PropTypes.func
}

const WrapperFormSignUp = styled(motion.div)`
  justify-content: center;
  position: absolute;
  bottom: 0px;
  z-index: 1000;
`

const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

export default WelcomeSignUpFormComponent
