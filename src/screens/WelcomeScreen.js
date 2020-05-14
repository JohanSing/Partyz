import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { theme } from '../config/theme'

import ErrorSignException from '../exceptions/ErrorSignException'

import { signIn, signUp } from '../utils/APISign'

import { Toast, ToastSuccess, ToastError } from '../components/generic/Toast'

import { ContainerScreen } from '../components/generic/Container'
import WelcomeLogoComponent from '../components/welcome/WelcomeLogoComponent'
import WelcomePitchComponent from '../components/welcome/WelcomePitchComponent'
import WelcomeSignButtonComponent from '../components/welcome/WelcomeSignButtonComponent'
import WelcomeSignInFormComponent from '../components/welcome/WelcomeSignInFormComponent'
import WelcomeSignUpFormComponent from '../components/welcome/WelcomeSignUpFormComponent'
import Footer from '../components/footer/Footer'

const WelcomeScreen = () => {
  const history = useHistory()
  const [authState, setAuthState] = useState(null)

  const displayFormSign = key => {
    setAuthState(key)
  }

  useEffect(() => {}, [authState])

  const sendForm = async form => {
    if (!form.email || !form.password) {
      ToastError('All fileds are required!')
    } else {
      let response = null

      try {
        if (form.context === 'signin') {
          response = await signIn(form.email, form.password)
          ToastSuccess("Great, you've successfully logged in!")
        }
        if (form.context === 'signup') {
          response = await signUp(form.email, form.password)
          ToastSuccess("Great, you've successfully registered!")
        }

        localStorage.setItem('partyz_access', JSON.stringify(response))
        history.push('/home')
      } catch (err) {
        if (err instanceof ErrorSignException) {
          ToastError(err.message)
        } else {
          ToastError('An error occured, please retry later!')
        }
      }
    }
  }

  return (
    <ContainerScreen bgColor={theme.colors['bg-secondary']}>
      <Toast />
      <WrapperWelcome>
        <WelcomeLogoComponent />
        <WelcomePitchComponent />
        <WelcomeSignButtonComponent displayForm={displayFormSign} />
        <WelcomeSignInFormComponent
          authState={authState}
          setAuthState={setAuthState}
          actionForm={sendForm}
        />
        <WelcomeSignUpFormComponent
          authState={authState}
          setAuthState={setAuthState}
          actionForm={sendForm}
        />
      </WrapperWelcome>
      <Footer />
    </ContainerScreen>
  )
}

const WrapperWelcome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 0;
`

export default WelcomeScreen
