import styled from 'styled-components'

export const Nav = styled.nav`
   background: rgba(225, 208, 224, 0.2);
   // background: rgba(337,80,145,0.3);
   
   width: max-content;
   display: block;
   padding: 0.6rem 1.6rem;
   z-index: 2;
   position: fixed;
   left: 50%;
   transform: translateX(-50%);
   bottom: 2rem;
   display: flex;
   gap: 1rem;
   border: 1px solid rgba(337, 80, 145, 0.1);
   border-radius: 3rem;
   backdrop-filter: blur(12px);
   
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      padding: 0.4rem 1rem;
      bottom: 0.6rem;
   }
`

export const NavLink = styled.a`
   cursor: pointer;
   background: transparent;
   padding: 1rem;
   border-radius: 50%;
   display: flex;
   color: var(--clr-black);
   stroke: var(--clr-black);
   &:hover {
      color: var(--clr-white);
      stroke: var(--clr-white);
      background: rgba(337, 80, 145, 0.3);
   }
   &.active {
      color: var(--clr-white);
      stroke: var(--clr-white);
      background: rgba(337, 80, 145, 0.3);
   }
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      padding: 0.9rem;
   }
`