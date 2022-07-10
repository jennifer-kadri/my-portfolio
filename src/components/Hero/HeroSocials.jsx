import React from 'react'
import { 
   HeroPermalinks, 
   HeroLinks, 
   HeroLinksIcon
} from './HeroElements'
import { TbBrandLinkedin, TbBrandGithub, TbBrandDribbble } from 'react-icons/tb'

const HeroSocials = () => {
  return (
   <HeroPermalinks className="showSlow">

      <HeroLinks href="https://linkedin.com/in/jennifer-kadri" target="_blank" rel="noreferrer" >
         <HeroLinksIcon><TbBrandLinkedin /></HeroLinksIcon>
      </HeroLinks>
      <HeroLinks href="https://github.com/jennifer-kadri?tab=repositories" target="_blank" rel="noreferrer" >
         <HeroLinksIcon><TbBrandGithub /></HeroLinksIcon>
      </HeroLinks>
      <HeroLinks href="https://dribble.com/jennifer-kadri" target="_blank" rel="noreferrer" >
         <HeroLinksIcon><TbBrandDribbble /></HeroLinksIcon>
      </HeroLinks>
   </HeroPermalinks>
  )
}

export default HeroSocials