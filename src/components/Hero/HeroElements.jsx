import styled from 'styled-components'

export const Hero = styled.header`
   background-color: #ffffff;
   height: 100vh;
   padding-top: 6rem;
   overflow: hidden;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      padding-top: 2rem;
   }
`

export const HeroContainer = styled.div`
   text-align: center;
   height: 100%;
   position: relative;
`

export const HeroSubtitle = styled.h5`
   font-size: 1rem;
   color: #dfb1e3;
`
export const HeroName = styled.h2`
   font-size: 1.5rem;
   text-shadow: 2px 2px 5px #f0efc7;
`

export const HeroProfession = styled.h5`
   font-size: 1.2rem;
   color: var(--clr-primary-variant);
   text-shadow: 2px 2px 5px var(--clr-light-pink);
`

export const Avatar = styled.div`
   background: linear-gradient(#edc7f0, #c7e5f0, var(--clr-light-green), #f0efc7, var(--clr-faded-pink), transparent);
   width: 18rem;
   height: 30rem;
   position: absolute;
   /* left: calc(50% - 11rem); */
   left: 50%;
   transform: translateX(-50%);
   margin-top: 4rem;
   border-radius: 12rem 12rem 0 0;
   overflow: hidden;
   padding: 2rem 0rem 1.5rem 0rem;
   // padding: 5rem 1.5rem 1.5rem 1.5rem;
   
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 75%;
   }
`

export const AvatarImg = styled.img``
export const HeroContact = styled.a``

/********** CTA BUTTONS ELEMENT **********/
export const CallToActionContainer = styled.div`
   margin-top: 2.5rem;
   display: flex;
   gap: 1.2rem;
   justify-content: center;
   & .cta-icon {
      margin-left: 5px;
   }
`

/********** SOCIALS BUTTONS ELEMENT **********/
export const HeroPermalinks = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.8rem;
   position: absolute;
   left: 2rem;
   bottom: 15rem;
   
   &::after {
      content: '';
      width: 2px;
      height: 2rem;
      background: var(--clr-primary);
   }

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1420px) {
      left: 10rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
         display: flex;
         flex-direction: row;
         align-items: center;
         position: relative;
         top: 2rem;
         left: 0;
         justify-content: center;
      &::after {
         display: none;
      }
   }
`

export const HeroLinks = styled.a` 
   &:hover {
      color: var(--clr-dark-green);
   }
`
export const HeroLinksIcon = styled.span`
   & svg {
      width: 24px;
      height: 24px;

      /* ========== MEDIA QUERIES (Small) ========== */
      @media screen and (max-width: 600px) {
         width: 22px;
         height: 22px;   
      }
   }
`