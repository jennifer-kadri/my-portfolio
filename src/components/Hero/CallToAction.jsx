import React from 'react'
import { CallToActionContainer } from './HeroElements' 
import CV from '../../assets/CV_Jennifer_KADRI.pdf'
import { HiOutlineDownload } from 'react-icons/hi'
import { TbMessageCircle } from 'react-icons/tb'

const CTA = () => {
  return (
    <CallToActionContainer className="showSlow">
      <a href={CV} download className="btn btn-primary">
        Download CV 
        <HiOutlineDownload className="cta-icon" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
        <TbMessageCircle className="cta-icon" />
      </a>
    </CallToActionContainer>
  )
}

export default CTA