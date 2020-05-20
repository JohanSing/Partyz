import React from 'react'
import styled from 'styled-components'

import { theme } from '../../config/theme'

import Avatar from '../generic/Avatar'
import Button from '../generic/Button'

const Header = () => {
  return (
    <HeaderContainer>
      <Avatar size={'40px'} />
      <HeaderTitle>
        <HeaderTitleText>Parties</HeaderTitleText>
      </HeaderTitle>
      <HeaderAction>
        <Button
          type={'button'}
          text='+'
          action={() => {}}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={'40px'}
          width={'40px'}
          borderRadius={'50px'}
          fontSize={'18px'}
          letterSpacing={'0px'}
        />
      </HeaderAction>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
`

const HeaderTitle = styled.div`
  display: flex;
`

const HeaderTitleText = styled.h1`
  font-size: 20px;
  font-family: ${theme.fonts['font-title']};
  font-weight: 400;
  margin: 8px 0 0 0;
  color: ${theme.colors['font-secondary']};
`

const HeaderAction = styled.div`
  display: flex;
  padding: 0;
`

export default Header
