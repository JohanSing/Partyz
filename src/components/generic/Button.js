import styled from 'styled-components'

import { theme } from '../../config/theme'

export const Button = styled.button`
  background-color: ${props => props.bgColor ?? theme.colors['btn-primary']};
  color: ${props => props.fontColor ?? theme.colors['font-primary']};
  font-size: 18px;
  font-family: ${theme.fonts['font-primary']};
  width: ${props =>
    props.width
      ? theme.dimension.width - props.width
      : theme.dimension.width - 130}px;
  height: ${props => props.height ?? 100}px;
  border-radius: 6px;
  border: ${props => props.border ?? `none`};
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
`
