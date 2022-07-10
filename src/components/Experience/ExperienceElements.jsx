import styled from 'styled-components'

export const ExperienceSection = styled.section``
export const ExperienceSubtitle = styled.h5``
export const ExperienceTitle = styled.h2``

export const ExperienceContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   place-content: center;
   align-items: center;
   justify-content: center;
   gap: 2rem;

   & > div {
      background: var(--clr-bg-variant);
      padding: 2.4rem 5rem;
      border-radius: 2rem;
      border: 3px solid var(--clr-pastel-green);
      transition: var(--transition);
      &:hover {
         border-color: var(--clr-light-pink);
         & .icon {
            color: #a96ab0;
         }
         & h3 {
            color: var(--clr-dark-purple);
            text-shadow: 1px 2px 2px var(--clr-pastel-purple);
         }
      }
      & h3 {
         text-align: center;
         margin-bottom: 2rem;
         color: var(--clr-primary);
            text-shadow: 1px 2px 2px var(--clr-light-green);
      }
   }

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1487px) {
      width: 64%;
      gap: 4rem;
   }


   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1064px) {
         grid-template-columns: 1fr;
         gap: 1.5rem;
      & > div {
         width: 75%;
         padding: 2rem;
         margin: 0 auto;
      }
   }

   /* ========== MEDIA QUERIES (Small to Medium) ========== */
   @media screen and (min-width: 600px) and (max-width: 842px ){
      width: 90%;
      padding: 2rem;
      margin: 0 auto;
   }

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
         gap: 1rem;
      & > div {
         width: 100%;
         padding: 2rem 1rem;
      }
   }
`

export const ExperienceFrontend = styled.div``
export const ExperienceBackend = styled.div``
export const CardTitle = styled.h3``

export const ExperienceContent = styled.div`
   display: flex;
   justify-content: center;
   row-gap: 2rem;
   column-gap: 3rem;

   /* ========== MEDIA QUERIES (Large) ========== */
   @media screen and (min-width: 1340px) {
      column-gap: 7rem;
   }
   
   /* ========== MEDIA QUERIES (Medium) ========== */
   @media screen and (max-width: 1064px) {
      padding: 1rem;
      column-gap: 7rem;
   }
   
   @media screen and (min-width: 600px) and (max-width: 842px ){
      column-gap: 4rem;
   }
   
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      column-gap: 3rem;
   }
`

export const SkillsBox = styled.div`
   display: grid;
   align-content: flex-start;
   row-gap: 1rem;
`

export const SkillsDetails = styled.article`
   display: flex;
   column-gap: 0.5rem;
   gap: 1rem;
`

export const SkillsIcon = styled.span`
   margin-top: 6px;
   color: var(--clr-primary);
`

export const SkillsDiv = styled.div``
export const SkillsTitle = styled.h4``
export const SkillsText = styled.small``