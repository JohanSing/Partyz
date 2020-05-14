import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../generic/Button'

const ButtonSubmitComponent = ({
  text,
  bgColor,
  fontColor,
  border,
  height,
  width
}) => {
  return (
    <ButtonSubmit
      type='submit'
      bgColor={bgColor}
      fontColor={fontColor}
      border={border}
      height={height}
      width={width}
    >
      {text}
    </ButtonSubmit>
  )
}

ButtonSubmitComponent.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  border: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

const ButtonSubmit = styled(Button)``

export default ButtonSubmitComponent
