import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import { theme } from '../../config/theme'

import { Wrapper } from './Wrapper'
import Avatar from '../generic/Avatar'

const Card = ({ title, date, address, guests }) => {
  return (
    <Wrapper
      bgColor={theme.colors['bg-primary']}
      flexDirection={'column'}
      margin={'0 0 20px 0'}
      padding={'10px 0'}
      borderRadius={'6px'}
    >
      <Wrapper
        bgColor={theme.colors['bg-primary']}
        flexDirection={'row'}
        justify={'space-between'}
        margin={'10px 0 30px 0'}
        padding={'0 20px'}
        borderRadius={'6px 6px 0 0'}
      >
        <TitleCard>{title}</TitleCard>
        <Avatar size={'40px'} />
      </Wrapper>
      <Wrapper
        bgColor={theme.colors['bg-primary']}
        flexDirection={'row'}
        margin={0}
        justify={'space-between'}
        padding={'3px 20px'}
        borderTop={`1px solid ${theme.colors['font-fifth']}`}
        borderBottom={`1px solid ${theme.colors['font-fifth']}`}
      >
        <InformationCard color={theme.colors['font-fifth']} size={'15px'}>
          {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
        </InformationCard>
        <InformationCard
          color={theme.colors['font-fifth']}
          size={'15px'}
        >{`${guests.length} Guests`}</InformationCard>
      </Wrapper>
      <Wrapper
        bgColor={theme.colors['bg-primary']}
        flexDirection={'column'}
        margin={'5px 0 0 0'}
        padding={'0 20px'}
        borderRadius={'0 0 6px 6px'}
      >
        <InformationCard color={theme.colors['font-primary']} size={'16px'}>
          {address}
        </InformationCard>
      </Wrapper>
    </Wrapper>
  )
}

Card.defaultProps = {
  title: 'n/a',
  date: 'n/a',
  address: 'n/a'
}

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  address: PropTypes.string,
  guests: PropTypes.array
}

const TitleCard = styled.h2`
  margin: 13px 0 0 0;
  padding: 0;
  font-size: 18px;
  font-family: ${theme.fonts['font-primary']};
`

const InformationCard = styled.p`
  padding: 0;
  font-size: ${props => props.size};
  font-family: ${theme.fonts['font-primary']};
  colors: ${props => props.colors};
`

export default Card
