import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FaChevronLeft } from 'react-icons/fa'

import { theme } from '../../config/theme'

const ButtonBack = ({ action, bgcolor, fontcolor, margin, padding }) => {
  return (
    <WrapperButtonBack
      bgcolor={bgcolor}
      onClick={() => {
        action(null)
      }}
      margin={margin}
      padding={padding}
    >
      <IconChevron fontcolor={fontcolor} />
      <IconText fontcolor={fontcolor}>Back</IconText>
    </WrapperButtonBack>
  )
}

ButtonBack.defaultProps = {
  bgColor: theme.colors['bg-primary'],
  fontColor: theme.colors['font-primary']
}

ButtonBack.propTypes = {
  action: PropTypes.func,
  bgcolor: PropTypes.string,
  fontcolor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string
}

const WrapperButtonBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${props => props.padding ?? '5px 10px'};
  border-radius: 6px;
  width: 60px;
  margin: ${props => props.margin};
  background-color: ${props => props.bgcolor};
`

const IconChevron = styled(FaChevronLeft)`
  font-size: 30px;
  color: ${props => props.fontcolor};
`

const IconText = styled.p`
  font-family: ${theme.fonts['font-primary']};
  color: ${props => props.fontcolor};
  margin: 5px 0 0 10px;
  font-weight: 400;
`

export default ButtonBack
