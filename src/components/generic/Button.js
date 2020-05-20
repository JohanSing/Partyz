import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../../config/theme'

const Button = ({
  type,
  text,
  action,
  bgColor,
  fontColor,
  height,
  width,
  borderRadius,
  fontSize,
  letterSpacing
}) => {
  return (
    <ButtonComponent
      type={type}
      onClick={action}
      bgColor={bgColor}
      fontColor={fontColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
    >
      {text}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  bgColor: theme.colors['btn-primary'],
  fontColor: theme.colors['font-primary'],
  borderRadius: '6px',
  fontSize: '18px',
  letterSpacing: '1px'
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  letterSpacing: PropTypes.string
}

export const ButtonComponent = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-family: ${theme.fonts['font-primary']};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border ?? `none`};
  font-weight: 700;
  letter-spacing: ${props => props.letterSpacing};
  outline: none;
`

export default Button
