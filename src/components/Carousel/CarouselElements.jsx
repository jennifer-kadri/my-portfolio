import styled from 'styled-components'

export const CarouselSection = styled.section``
export const CarouselSubtitle = styled.h5``
export const CarouselTitle = styled.h2``

export const CarouselContainer = styled.div`
   max-width: 620px;
   max-height: 400px;
   width: 40%;
   padding-bottom: 4rem;

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1400px) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      width: 60%;
      padding-left: 0;
      padding-right: 0;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: var(--container-width-sm);
   }
`

export const CarouselBox = styled.div``
export const CardLeft = styled.div``
export const CardRight = styled.div``

export const ProjectImage = styled.div`
   width: 6rem;
   aspect-ratio: 1/1;
   overflow: hidden;
   border-radius: 50%;
   margin: 0 auto 1rem;
   border: 0.3rem solid var(--clr-light-pink);

   & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
   }
`
export const ProjectImg = styled.img``
export const ProjectTitle = styled.h5``

export const ProjectCTA = styled.div`
   display: flex;
   margin-bottom: 0;
   place-content: center;
`
export const ProjectBtn = styled.a`
   border: 2px solid var(--clr-pastel-green);
   color: var(--clr-white);
   background-color: var(--clr-lighter-pink);
   padding: 0.5rem 0.6rem !important;
   font-size: 0.8rem;
   margin-top: 0.4rem;
`

export const ProjectReview = styled.small`
   color: var(--clr-dark);
   font-weight: 300;
   display: block;
   width: 80%;
   margin: 0.8rem auto 0;
`