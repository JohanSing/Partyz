import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../../config/theme'

const Input = ({
  name,
  type,
  placeholder,
  isRequired,
  formState,
  onChangeAction,
  bgColor,
  fontColor,
  border,
  height,
  width
}) => {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      required={!!isRequired}
      onChange={event => {
        onChangeAction({ ...formState, [name]: event.target.value })
      }}
      bgColor={bgColor}
      fontColor={fontColor}
      border={border}
      height={height}
      width={width}
    />
  )
}

Input.defaultProps = {
  bgColor: theme.colors['bg-primary'],
  fontColor: theme.colors['font-primary'],
  border: 'none'
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  formState: PropTypes.object,
  onChangeAction: PropTypes.func,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

const InputComponent = styled.input`
  background-color: ${props => props.bgColor};
  border: ${props => props.border};
  border-radius: 8px;
  color: ${props => props.color};
  font-family: ${theme.fonts['font-primary']};
  font-size: 15px;
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 0 20px;
  outline: none;
`

export default Input
