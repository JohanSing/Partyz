import styled from 'styled-components'

import { theme } from '../../config/theme'

export const ContainerScreen = styled.div`
  width: ${theme.dimension.width}px;
  height: ${theme.dimension.height}px;
  padding: ${props => props.padding ?? '0px'};
  background-color: ${props => props.bgColor ?? theme.colors['bg-primary']};
`

export const ContainerForm = styled.div`
  background-color: ${props => props.bgColor ?? theme.colors['bg-primary']};
  display: flex;
  flex-direction: column;
  width: ${props =>
    props.width
      ? theme.dimension.width - props.width
      : theme.dimension.width}px;
  border-radius: ${props => props.borderRadius ?? 6}px;
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`
