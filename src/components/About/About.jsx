import React from 'react'
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
import { AboutTitleAnimation, AboutDescriptionAnimation, AboutHelloAnimation } from '../animations/TypingAnimation'
import MyAvatar from '../../assets/img/sakura-about.png'
import { RiMedal2Fill } from 'react-icons/ri'
import { TbUsers } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <AboutSection id="about">
      <AboutSubtitle>Get To Know</AboutSubtitle>
      <AboutTitle><AboutTitleAnimation /></AboutTitle>
      
      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <AboutMeImg src={MyAvatar} alt="Avatar of me" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>

            <AboutCard>
              <AboutIcon><RiMedal2Fill /></AboutIcon>
              <AboutCardTitle>Experience</AboutCardTitle>
              <AboutSmall>1 Year of Work</AboutSmall>
            </AboutCard>
            
            {/* <AboutCard>
            <AboutIcon><TbUsers /></AboutIcon>
              <AboutCardTitle>Clients</AboutCardTitle>
              <AboutSmall>20+</AboutSmall>
            </AboutCard> */}
            
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