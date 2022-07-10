import styled from 'styled-components'

export const AboutSection = styled.section`
   margin-top: 5rem;
`
export const  AboutSubtitle = styled.h5``
export const  AboutTitle = styled.h2`
   margin-bottom: 4rem;
`

export const AboutContainer = styled.div`
   display: grid;
   grid-template-columns:  35% 50%;
   place-content: center;
   align-items: center;
   justify-content: center;
   gap: 15%;
   
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 0;
   }
`

export const AboutMe = styled.div`
   width: 100%;
   aspect-ratio: 1/1;
   border-radius: 2rem;
   background: linear-gradient(45deg, var(--clr-faded-pink), var(--clr-pastel-green), var(--clr-faded-pink));
   display: grid;
   place-items: center;

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1487px) {
      width: 85%;
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      width: 35%;
      margin: 1.8rem auto 4rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 58%;
      margin: 0 auto 3rem;
   }
`

export const AboutMeImage = styled.div`
   border-radius: 2rem;
   overflow: hidden;
   transform: rotate(10deg);
   transition: var(--transition-fast);

   &:hover {
      transform: rotate(0deg);
      transition: var(--transition-fast);
   }
`
export const AboutMeImg = styled.img``

export const AboutContent = styled.div`
   & p {
      margin: 2rem 0 2rem;
      color: var(--clr-dark);
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
         text-align: center;
      & p {
         margin: 1rem 0 1.5rem;
      }
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
         text-align: center;
      & p {
         margin: 1.5rem 0;
      }
   }
`

export const AboutCards = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1.5rem;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      gap: 1rem;
   }
`

export const AboutCard = styled.div`
   background: var(--clr-bg-variant);
   border: 3px solid var(--clr-pastel-green);
   border-radius: 1rem;
   padding: 1.4rem;
   text-align: center;

   &:hover {
      border-color: var(--clr-pastel-purple);
      cursor: default;
   }
   & h5 {
      font-size: 0.95rem;
   }
   & small {
      font-size: 0.7rem;
   color:  var(--clr-dark);
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      padding: 1.5rem;
   }
`

export const  AboutCardTitle = styled.h5``

export const AboutIcon = styled.span`
   color: var(--clr-primary);
   font-size: 1.4rem;
   margin-bottom: 1rem;
`

export const AboutSmall = styled.small``
export const AboutText = styled.p``

export const AboutButton = styled.a`
   margin: 0 auto;
`