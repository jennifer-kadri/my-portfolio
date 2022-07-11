import styled from 'styled-components'

export const AboutSection = styled.section`
   margin-top: 5rem;
`
export const  AboutSubtitle = styled.h5``
export const  AboutTitle = styled.h2`
   margin-bottom: 4rem;
   
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      margin-bottom: 2rem;
   }
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
   display: grid;
   place-items: center;

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1024px) {
      width: 85%;
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      width: 40%;
      margin: 1.8rem auto 4rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 83%;
      margin: 0 auto 1rem;
   }
`

export const AboutMeImage = styled.div`
   border-radius: 2rem;
   overflow: hidden;
   transition: var(--transition-fast);

   &:hover {
      transition: var(--transition-fast);
   }
`
export const AboutMeImg = styled.span`
   & canvas {
      
      /* ========== MEDIA QUERIES (Medium) ========== */
      @media screen and (max-width: 1200px) {
         width: 900px !important;
         height: 900px !important;
      }
      /* ========== MEDIA QUERIES (Medium) ========== */
      @media screen and (max-width: 900px) {
         width: 700px !important;
      }

      /* ========== MEDIA QUERIES (Medium) ========== */
      @media screen and (max-width: 800px) {
         width: 600px !important;
         height: 800px !important;
      }

      /* ========== MEDIA QUERIES (Small) ========== */
      @media screen and (max-width: 600px) {
         width: 480px !important;
         }
      }
   }
`

export const AboutContent = styled.div`
   & p {
      text-align: center;
      overflow-wrap: break-word;
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
         font-size: 0.95rem;
         margin: 1.5rem 0;
      }
   }
`

export const AboutCards = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1.5rem;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      gap: 1rem;
   }
`

export const AboutCard = styled.div`
   background: var(--clr-bg-variant);
   border: 3px solid  var(--clr-pastel-purple);
   border-radius: 1rem;
   padding: 1.4rem;
   text-align: center;
   
   &:hover {
      border-color: var(--clr-pastel-green);
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
      overflow-wrap: break-word;
      padding: 1rem;
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