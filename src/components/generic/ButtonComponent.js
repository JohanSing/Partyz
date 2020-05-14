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
  width
}) => {
  return (
    <ButtonElement
      onClick={action}
      bgColor={bgColor}
      fontColor={fontColor}
      height={height}
      width={width}
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
  width: PropTypes.number
}

const ButtonElement = styled(Button)``

export default ButtonComponent
