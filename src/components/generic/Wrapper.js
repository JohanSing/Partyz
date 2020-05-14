import styled from 'styled-components'

import { theme } from '../../config/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.bgColor ?? theme.colors['bg-primary']};
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`

export const WrapperInput = styled.div`
  display: flex;
  width: ${props =>
    props.width
      ? theme.dimension.width - props.width
      : theme.dimension.width - 80}px;
  justify-content: center;
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`
