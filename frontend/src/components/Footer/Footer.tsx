import React, { FC } from 'react'
import { Socials } from '../Socials/Socials'
import { Contact, SocialsContainer, styles } from './Footer.styles'

const Footer: FC = () => {
  return (
    <div className={styles()}>
      <Contact>All Rights reserved 2022</Contact>
      <SocialsContainer>
        <Contact>support@xanity.com</Contact>
        <Socials />
      </SocialsContainer>
    </div>
  )
}

export { Footer }