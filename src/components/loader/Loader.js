import React from 'react'
import { Ripple } from 'react-spinners-css'
import PropTypes from 'prop-types'

import { theme } from '../../config/theme'
import styled from 'styled-components'

const Loader = ({ color, top }) => {
  return <LoaderRipple top={top} color={color} size={150} />
}

Loader.propTypes = {
  color: PropTypes.string,
  top: PropTypes.number
}

const LoaderRipple = styled(Ripple)`
  position: absolute;
  top: ${props => props.top ?? theme.dimension.height / 3.33}px;
  left: ${theme.dimension.width / 3.33}px;
  z-index: 10000;
`

export default Loader
