import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../../config/theme'

const InputComponent = ({
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
    <Input
      type={type}
      placeholder={placeholder}
      required={isRequired ? true : false}
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

InputComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  formState: PropTypes.object,
  onChangeAction: PropTypes.func,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

const Input = styled.input`
  background-color: ${props => props.bgColor ?? theme.colors['bg-primary']};
  border: ${props => props.border ?? `none`};
  border-radius: 8px;
  color: ${props => props.color ?? theme.colors['font-primary']};
  font-family: ${theme.fonts['font-primary']};
  font-size: 15px;
  height: ${props => props.height ?? 100}px;
  width: ${props =>
    props.width
      ? theme.dimension.width - props.width
      : theme.dimension.width - 130}px;
  padding: 0 20px;
  outline: none;
`

export default InputComponent
