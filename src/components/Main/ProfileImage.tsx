import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://raw.githubusercontent.com/SaltySalt77/SaltySalt77.github.io/main/content/assets/profile.png'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage