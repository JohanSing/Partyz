import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as LogoFemale } from '../../assets/undraw_male_avatar_323b.svg'
import { ReactComponent as LogoMale } from '../../assets/undraw_female_avatar_w3jk.svg'

const randomAvatar = () => Math.floor(Math.random() * 2)

const Avatar = ({ size }) => {
  const [avatar, setAvatar] = useState(0)

  useEffect(() => {
    setAvatar(randomAvatar())
  }, [])

  return (
    <AvatarComponent>
      {avatar === 0 ? (
        <ProfileFeMale size={size} />
      ) : (
        <ProfileMale size={size} />
      )}
    </AvatarComponent>
  )
}

Avatar.defaultProps = {
  size: '40px'
}

Avatar.propTypes = {
  size: PropTypes.string
}

const AvatarComponent = styled.div`
  display: flex;
`

const ProfileFeMale = styled(LogoFemale)`
  height: ${props => props.size};
  width: ${props => props.size};
`

const ProfileMale = styled(LogoMale)`
  height: ${props => props.size};
  width: ${props => props.size};
`

export default Avatar
