import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

import styled from 'styled-components'
import { theme } from '../config/theme'

import ErrorSignException from '../exceptions/ErrorSignException'

import { signIn, signUp } from '../utils/APISign'
import {
  checkAuthentication,
  SECURITY_ACCESS
} from '../utils/AuthenticationProvider'

import { Toast, ToastError } from '../components/generic/Toast'

import { ContainerScreen } from '../components/generic/Container'
import Loader from '../components/loader/Loader'
import WelcomeLogoComponent from '../components/welcome/WelcomeLogoComponent'
import WelcomePitchComponent from '../components/welcome/WelcomePitchComponent'
import WelcomeSignButtonComponent from '../components/welcome/WelcomeSignButtonComponent'
import WelcomeSignInFormComponent from '../components/welcome/WelcomeSignInFormComponent'
import WelcomeSignUpFormComponent from '../components/welcome/WelcomeSignUpFormComponent'
import Footer from '../components/footer/Footer'

const WelcomeScreen = () => {
  const history = useHistory()
  const [authState, setAuthState] = useState(null)
  const [welcomeState, setWelcomeState] = useState(true)
  const [loading, setLoading] = useState({
    active: false,
    color: theme.colors['bg-primary']
  })

  const displayFormSign = key => {
    setAuthState(key)
  }

  useEffect(() => {
    setTimeout(() => {
      setWelcomeState(false)
    }, 1000)
  }, [authState])

  const sendForm = async form => {
    if (!form.email || !form.password) {
      ToastError('All fileds are required!')
    } else {
      let response = null

      try {
        setLoading({ active: true, color: theme.colors['bg-secondary'] })
        if (form.context === 'signin') {
          response = await signIn(form.email, form.password)
        }
        if (form.context === 'signup') {
          response = await signUp(form.email, form.password)
        }

        localStorage.setItem(SECURITY_ACCESS, JSON.stringify(response))
        history.push('/home', { authenticated: true })
      } catch (err) {
        setLoading(false)
        if (err instanceof ErrorSignException) {
          ToastError(err.message)
        } else {
          ToastError('An error occured, please retry later!')
        }
      }
    }
  }

  return checkAuthentication() === false ? (
    <ContainerScreen bgColor={theme.colors['bg-secondary']}>
      <Toast />
      {(welcomeState || loading.active) && (
        <Loader top={480} color={loading.color} />
      )}
      <WrapperWelcome>
        <WelcomeLogoComponent />
        <WelcomePitchComponent />
        <WelcomeSignButtonComponent
          welcomeState={welcomeState}
          displayForm={displayFormSign}
        />
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
  ) : (
    <Redirect to='/home' />
  )
}

const WrapperWelcome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 0;
`

export default WelcomeScreen
