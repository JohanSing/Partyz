import React from 'react'
import styled from 'styled-components'

import { BsDot } from 'react-icons/bs'

import { theme } from '../../config/theme'

const WelcomePitchComponent = () => {
  return (
    <WrapperPitch>
      <NamePitch>Partyz</NamePitch>
      <TextPitch>
        <SpanPitch color={theme.colors['font-secondary']}>Organize</SpanPitch>
        <DotIcon />
        <SpanPitch color={theme.colors['font-secondary']}>Share</SpanPitch>
        <DotIcon />
        <SpanPitch color={theme.colors['font-secondary']}>Enjoy</SpanPitch>
      </TextPitch>
    </WrapperPitch>
  )
}

const WrapperPitch = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`

const NamePitch = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  font-family: ${theme.fonts['font-title']};
  color: ${theme.colors['font-secondary']};
  font-size: 40px;
`

const TextPitch = styled.p`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  font-weight: 700;
  font-family: ${theme.fonts['font-primary']};
  font-size: 18px;
`

const DotIcon = styled(BsDot)`
  color: ${theme.colors['font-secondary']};
  font-size: 25px;
`

const SpanPitch = styled.span`
  color: ${props => props.color};
`

export default WelcomePitchComponent
