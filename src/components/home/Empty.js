import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from '../../config/theme'

import { ReactComponent as EmptyImg } from '../../assets/undraw_partying_p92d.svg'
import { Wrapper } from '../generic/Wrapper'
import Button from '../generic/Button'

const Empty = () => {
  return (
    <Wrapper
      margin={'80px 0 0 0'}
      padding={0}
      bgColor={'transparent'}
      flexDirection={'column'}
    >
      <EmptyImage />
      <Wrapper
        margin={'50px 0 0 0'}
        padding={'0 50px'}
        bgColor={'transparent'}
        flexDirection={'column'}
      >
        <EmptyMessage>Damn, you don't have any parties coming up!</EmptyMessage>
        <EmptyMessage>Hurry up and create a party!</EmptyMessage>
      </Wrapper>
      <Wrapper margin={'50px 0 0 0'} padding={'0 50px'} bgColor={'transparent'}>
        <Link to='/parties/create'>
          <Button
            type={'button'}
            text='New 🥳'
            action={() => {}}
            bgColor={theme.colors['btn-terciary']}
            fontColor={theme.colors['font-secondary']}
            height={'60px'}
            width={'150px'}
            borderRadius={'6px'}
            fontSize={'18px'}
          />
        </Link>
      </Wrapper>
    </Wrapper>
  )
}

const EmptyImage = styled(EmptyImg)`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
`

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${theme.colors['font-secondary']};
  font-family: ${theme.fonts['font-primary']};
  font-family: 700;
  margin: 10px 0;
`

export default Empty
