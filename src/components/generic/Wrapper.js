import styled from 'styled-components'

import { theme } from '../../config/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? 'none'};
  justify-content: ${props => props.justify ?? 'center'};
  background-color: ${props => props.bgColor ?? theme.colors['bg-primary']};
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
  border-radius: ${props => props.borderRadius ?? '0px'};
  border-left: ${props => props.borderLeft ?? 'none'};
  border-right: ${props => props.borderRight ?? 'none'};
  border-top: ${props => props.borderTop ?? 'none'};
  border-bottom: ${props => props.borderBottom ?? 'none'};
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? 'row'};
  width: ${props =>
    props.width
      ? theme.dimension.width - props.width
      : theme.dimension.width - 80}px;
  justify-content: ${props => (props.justify ? props.justify : 'center')};
  margin: ${props => props.margin ?? 0};
  padding: ${props => props.padding ?? 0};
`
