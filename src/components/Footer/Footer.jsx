import React from 'react'
import { 
  FooterSection, 
  Permalinks,
  FooterList, 
  FooterLink, 
  FooterSocials,
  FooterCopyright,
  FooterCopy
} from './FooterElements'
import { TiSocialInstagram } from 'react-icons/ti'
import { RiFacebookBoxFill, RiTwitterLine } from 'react-icons/ri'


const Footer = () => {
  return (
    <FooterSection>
      <FooterLink href="#" className="footer__logo">MiyuDev</FooterLink>

      <Permalinks className="permalinks">
          <FooterList>
            <FooterLink href="#">Home</FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink href="#about">About</FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink href="#experience">Experience</FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink href="#services">Services</FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink href="#portfolio">Portfolio</FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink href="#carousel">Carousel</FooterLink>
          </FooterList>
      </Permalinks>

      <FooterSocials className="footer__socials">
        <FooterLink href="https://facebook.com" target="_blank" rel="noreferrer"><TiSocialInstagram /></FooterLink>
        <FooterLink href="https://instagram.com" target="_blank" rel="noreferrer"><RiFacebookBoxFill /></FooterLink>
        <FooterLink href="https://twitter.com" target="_blank" rel="noreferrer"><RiTwitterLine /></FooterLink>
      </FooterSocials>

      <FooterCopyright className="footer__copy">
        <FooterCopy>&copy; Miyuna Dev. All rights reserved</FooterCopy>
      </FooterCopyright>

    </FooterSection>
  )
}

export default Footer