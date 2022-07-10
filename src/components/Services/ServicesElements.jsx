import styled from 'styled-components'

export const ServiceSection = styled.section``
export const ServiceSubtitle = styled.h5``
export const ServiceTitle = styled.h2``

export const ServiceContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 3rem;

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 0.8rem;
      row-gap: 2rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
   }
`

export const Card = styled.article`
   background: var(--clr-bg-variant);
   border-radius: 2.2rem 2.2rem 2rem 2rem;
   border: 1px solid var(--clr-primary);
   height: fit-content;
   transition: var(--transition);

   &:hover {
      background: transparent;
      border-color: var(--clr-primary-variant);
      cursor: default;
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (min-width: 600px) and (max-width: 1024px) {
      width: 90%;
      margin: 0 auto;
      height: auto;

      &.design {
         grid-column-start: 1;
         grid-column-end: 3;
      }
      
      &.dev {
         grid-column-start: 3;
         grid-column-end: 5;
      }

      &.cc {
         grid-column-start: 2;
         grid-column-end: 4;
         grid-row-start: 2;
         grid-row-end: 3;
      }
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 80%;
      margin: 0 auto;
   }
`

export const CardTitleBox = styled.div`
   background: var(--clr-primary);
   padding: 1.6rem;
   border-radius: 2rem 2rem 0 0;
   box-shadow: 0 2rem  1rem rgba(0, 0, 0, 0.1);

   & h3 { 
      color: var(--clr-bg);
      font-size: 1rem;
      text-align: center;
   }
`
export const CardTitle = styled.h3``

export const CardList = styled.ul`
   padding: 2rem;
   text-align: center;

   & li { 
      display: flex;
      gap: 1rem;
      margin-bottom: 0.8rem;
      align-items: center;
   }

   & p {
      font-size: 0.9rem;
   }
`
export const CardLi = styled.li``
export const CardText = styled.p``

export const CardIcon = styled.span`
   width: 30px;
   height: 30px;
   color: var(--clr-primary);
   margin-top: 2px;
`