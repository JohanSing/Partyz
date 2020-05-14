import React from 'react'
import styled from 'styled-components'

import { theme } from '../../config/theme'

import { FaHeart, FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <WrapperFooter>
      <FooterBrand>
        <FooterBrandText>Partiz</FooterBrandText>
        <IconCopyright />
      </FooterBrand>
      <FooterLove>
        <MessageLove>Made with</MessageLove>
        <IconLove />
      </FooterLove>
    </WrapperFooter>
  )
}

const WrapperFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: ${theme.dimension.width}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
`

const FooterBrand = styled.div`
  display: flex;
`

const FooterBrandText = styled.p`
  color: ${theme.colors['font-secondary']};
  font-family: ${theme.fonts['font-title']};
`

const IconCopyright = styled(FaCopyright)`
  color: ${theme.colors['font-secondary']};
  margin: 20px 0 0 3px;
`

const FooterLove = styled.div`
  display: flex;
`

const IconLove = styled(FaHeart)`
  color: ${theme.colors['font-secondary']};
  color: ${theme.colors['font-secondary']};
  margin: 20px 0 0 3px;
`

const MessageLove = styled.p`
  color: ${theme.colors['font-secondary']};
  font-family: ${theme.fonts['font-title']};
`

export default Footer
