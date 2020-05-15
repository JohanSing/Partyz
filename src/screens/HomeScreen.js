import React, { useState, useEffect } from 'react'
// import { useHistory, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../config/theme'

import { ContainerScreen } from '../components/generic/Container'
import Header from '../components/navigation/Header'

const HomeScreen = () => {
  useEffect(() => {})
  return (
    <ContainerScreen bgColor={theme.colors['bg-secondary']}>
      <Header />
    </ContainerScreen>
  )
}

HomeScreen.propTypes = {}

export default HomeScreen
