import React from 'react'
import styled from 'styled-components'

import { theme } from '../../config/theme'

import { ReactComponent as LogoFemale } from '../../assets/undraw_male_avatar_323b.svg'
import { ReactComponent as LogoMale } from '../../assets/undraw_female_avatar_w3jk.svg'
import ButtonComponent from '../generic/ButtonComponent'

const Header = () => {
  const randomAvatar = () => Math.floor(Math.random() * 2)

  return (
    <HeaderContainer>
      <HeaderProfile>
        {randomAvatar() === 1 ? <Profile /> : <Profile />}
      </HeaderProfile>
      <HeaderTitle>
        <HeaderTitleText>Parties</HeaderTitleText>
      </HeaderTitle>
      <HeaderAction>
        <ButtonComponent
          text='+'
          action={() => {}}
          bgColor={theme.colors['btn-terciary']}
          fontColor={theme.colors['font-secondary']}
          height={40}
          width={335}
          borderRadius={'50'}
          fontSize={18}
        ></ButtonComponent>
      </HeaderAction>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 10px 0;
`

const HeaderProfile = styled.div`
  display: flex;
`

const Profile = styled(LogoMale, LogoFemale)`
  height: 40px;
  width: 40px;
`

const HeaderTitle = styled.div`
  display: flex;
`

const HeaderTitleText = styled.h1`
  font-size: 16px;
  font-family: ${theme.fonts['font-title']};
  font-weight: 400;
  color: ${theme.colors['font-secondary']};
`

const HeaderAction = styled.div`
  display: flex;
  padding: 0;
`

export default Header
