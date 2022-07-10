import React from 'react'
import { 
  Hero, 
  HeroContainer, 
  HeroSubtitle, 
  HeroName, 
  HeroProfession, 
  Avatar, 
  AvatarImg, 
  HeroContact 
} from './HeroElements'
import HelloAnimation, { MyNameAnimation } from '../animations/TypingAnimation'
import ReactTypingEffectDemo from '../animations/ProfessionAnimation'
import CallToAction from './CallToAction'
import HeroSocials from './HeroSocials'
import MyAvatar from '../../assets/img/me.png'

const HeroSection = () => {
  return (
    <>
      <Hero>
        <HeroContainer className="hero container">
            <HeroSubtitle className="showFast"><HelloAnimation /></HeroSubtitle>
            <HeroName className="showSlow"><MyNameAnimation /></HeroName>
            <HeroProfession className="showSlower text-light-pink"><ReactTypingEffectDemo /></HeroProfession>
            <CallToAction/>
            <HeroSocials/>

            <Avatar className="showSlow">
              <AvatarImg src={MyAvatar} alt="Large avatar of me" />
            </Avatar>

            <HeroContact href="#contact" className="showSlow scroll__down">Scroll Down &rarr;</HeroContact>

        </HeroContainer>
      </Hero>
    </>
  )
}

export default HeroSection