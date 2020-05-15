import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../generic/Button'

const ButtonComponent = ({
  text,
  action,
  bgColor,
  fontColor,
  height,
  width,
  borderRadius,
  fontSize
}) => {
  return (
    <ButtonElement
      onClick={action}
      bgColor={bgColor}
      fontColor={fontColor}
      height={height}
      width={width}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {text}
    </ButtonElement>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.number
}

const ButtonElement = styled(Button)``

export default ButtonComponent
