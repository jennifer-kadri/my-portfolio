import React from 'react'
import Spline from '@splinetool/react-spline';
import { 
  AboutSection, 
  AboutSubtitle, 
  AboutTitle, 
  AboutContainer, 
  AboutMe, 
  AboutMeImage,
  AboutMeImg,  
  AboutContent, 
  AboutCards, 
  AboutCard, 
  AboutIcon, 
  AboutCardTitle, 
  AboutSmall, 
  AboutText, 
  AboutButton
} from './AboutElements'
import { AboutTitleAnimation, AboutDescriptionAnimation, AboutHelloAnimation } from '../_animations/TypingAnimation'
import { RiMedal2Fill } from 'react-icons/ri'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const onLoad = (splineApp) => {
    Spline.current = splineApp;
  }

  return (
    <AboutSection id="about">
      <AboutSubtitle>Get To Know</AboutSubtitle>
      <AboutTitle><AboutTitleAnimation /></AboutTitle>
      
      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <AboutMeImg>
              <Spline className="spline" scene="https://prod.spline.design/N8QK2aShvWrQeg-L/scene.splinecode" onLoad={onLoad} />
             </AboutMeImg>
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>

            <AboutCard>
              <AboutIcon><RiMedal2Fill /></AboutIcon>
              <AboutCardTitle>Experience</AboutCardTitle>
              <AboutSmall>1 Year of Work</AboutSmall>
            </AboutCard>
            
            <AboutCard>
              <AboutIcon><VscFolderLibrary /></AboutIcon>
              <AboutCardTitle>Projects</AboutCardTitle>
              <AboutSmall>40+</AboutSmall>
            </AboutCard>

          </AboutCards>

          <AboutText>
            <AboutHelloAnimation className="bio-hello" /> <br></br>
            <AboutDescriptionAnimation className="bio" />
          </AboutText>

          <AboutButton href="#contact" className="contact-btn btn btn-primary">Let's Talk</AboutButton>

        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default About