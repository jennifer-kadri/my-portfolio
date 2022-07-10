import styled from 'styled-components'

export const PortfolioSection = styled.section``
export const PortfolioSubtitle = styled.h5``
export const PortfolioTitle = styled.h2``

export const PortfolioContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2.5rem;

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (min-width: 1487px) {
      width: 60%;
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      width: 80%;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
      text-align: center;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem;
      }
`

export const PortfolioCard = styled.article`
   background-color: #edf5e6;
   // background-color: var(--clr-bg-variant);
   padding: 0.8rem;
   border-radius: 1rem;
   border: 2px solid var(--clr-pastel-purple);
   transition: var(--transition);

   &:hover { 
      border-color: var(--clr-light-pink);
      background: var(--clr-bg-variant);
   }

   & h3 {
      text-align: center;
      margin: 0.6rem 0 0.6rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 70%;
      margin: 0 auto;
   }
`
export const PortfolioCardImage = styled.div`
   border-radius: 1rem;
   overflow: hidden;
`
export const PortfolioCardImg = styled.img`

`
export const PortfolioCardTitle = styled.h3``

export const PortfolioCardButton = styled.div`
   display: flex;
   gap: 1rem;
   margin-bottom: 0.2rem;
   place-content: center;
   & #github {
      color: var(--clr-primary);
      background: var(--clr-white);
   }
   & #demo {
      background: var(--clr-pastel-purple);
   }
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      gap: 0.5rem;
   }

`

export const PortfolioLink = styled.a`
   &:hover {
      border-color: var(--clr-light-pink);
      color: var(--clr-dark);
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      padding: 0.3rem 0.5rem;
   }
`