import styled from 'styled-components'

export const FooterSection = styled.footer`
   background: var(--clr-lighter-pink);
   padding: 2rem 0 0.4rem 0;
   text-align: center;
   font-size: 0.9rem;
`

export const FooterLink = styled.a`
color: var(--clr-white);

   &.footer__logo {
      text-shadow: 1px 2px 2px #dfb1e3;
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      display: inline-block;
   }
`

export const Permalinks = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 2rem;
   margin: 0 auto 1.5rem;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
   }
`
export const FooterList = styled.li``

export const FooterSocials = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   margin-bottom: 5rem;

   & ${FooterLink} {
      background: var(--clr-bg);
      color: var(--clr-black);
      padding: 0.8rem;
      border-radius: 0.7rem;
      display: flex;
      border: 1px solid var(--clr-dark-green);
      
      &:hover {
         color: var(--clr-dark-purple);
         border-color: var(--clr-dark-purple);
      }
   }
`
export const FooterCopyright = styled.div``
export const FooterCopy = styled.small`
   margin: -7px auto;
   color: var(--clr-bg);
`

