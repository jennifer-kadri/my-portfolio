import styled from 'styled-components'

export const ContactSection = styled.section`
   margin-top: 5rem;
   background: #ffffff;
   padding-bottom: 3rem;
`
export const ContactSubtitle = styled.h5`
   visibility: hidden;
`
export const ContactTitle = styled.h2`
   color: var(--clr-primary-variant);  
   text-shadow: 1px 2px 2px var(--clr-pastel-green);
`

export const ContactContainer = styled.div`
   width: 58%;
   display: grid;
   grid-template-columns: 30% 58%;
   gap: 12%;

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 1.2rem;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      width: var(--container-width-sm);
   }
`
export const ContactOptions = styled.div`
   display: grid;
   flex-direction: column;
   gap: 1.2rem;
   
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      overflow-wrap: break-word;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      gap: 1rem;
      grid-template-columns: 1fr;
   }
`

export const ContactCard = styled.article`
   background-color: var(--clr-lighter-pink);
   padding: 1.2rem;
   border-radius: 1.2rem;
   text-align: center;
   border: 2px solid var(--clr-pastel-purple);
   transition: var(--transition);

   &:hover {
      color: var(--clr-black);
      background: transparent;
      border-color: var(--clr-light-pink);

      & a {
         color: var(--clr-primary);
      }
   }
   
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      overflow-wrap: break-word;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      display: flex;
      margin: 0 auto;
      text-align: center;
      align-items: center;
      place-content: center;
      place-items: center;
      
      &.linkedin {
         display: none;
      }
      &.whatsapp {
         display: none;
      }
   }
`

export const CardIcon = styled.span`
   font-size: 1.5rem;
   margin-bottom: 0;
`

export const CardTitle = styled.h4`
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 440px) {
      display: none;
   }
   
   `
   export const CardInfo = styled.h5`
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
         display: none;
      }
`

export const CardLink = styled.a`
   color: var(--clr-white);
   margin-top: 0.4rem;
   display: inline-block;
   font-size: 0.8rem;

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 600px) {
      &.mailto-link {
         text-indent: -9999px;
         line-height: 0; /* Collapse the original line */
      }
      &.mailto-link:after {
         content: "Mail me";
         text-indent: 0;
         display: block;
         line-height: initial; /* New content takes up original line height */
      }
   }
`

export const FormInput = styled.input``
export const FormTextArea = styled.textarea``

export const ContactForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
   margin-top: 1rem;

   & ${FormInput},
   & ${FormTextArea} {
      font-size: 0.85rem;
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid var(--clr-light-pink);
      resize: none;
      color: var(--clr-black);

      &::placeholder {
         color: var(--clr-dark);
      }
   }

   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1024px) {
      margin-top: 0;
      height: 95%;
      & h3 {
         font-size: 1rem;
      }
   }
`

export const FormTitle = styled.h3`
   text-align: center;
   text-shadow: 1px 1px 1px var(--clr-light-pink);
`
export const FormTextMail = styled.div`
   display: grid;
   grid-template-columns: 1fr 1.2fr;
   column-gap: 1.2rem;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1.2rem;
   }

`
export const FormButton = styled.button`margin: 0 auto;`