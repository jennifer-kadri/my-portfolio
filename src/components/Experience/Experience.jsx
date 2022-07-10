import React from 'react'
import { 
  ExperienceSection, 
  ExperienceSubtitle, 
  ExperienceTitle, 
  ExperienceContainer, 
  ExperienceFrontend, 
  ExperienceBackend, 
  CardTitle, 
  ExperienceContent, 
  SkillsBox, 
  SkillsDetails, 
  SkillsIcon, 
  SkillsDiv, 
  SkillsTitle, 
  SkillsText
} from './ExperienceElements'
import { ExperienceTitleAnimation } from '../animations/TypingAnimation'
import { HiOutlineBadgeCheck  } from 'react-icons/hi'

const Experience = () => {
  return (
    <ExperienceSection id="experience">

      <ExperienceSubtitle>The Skills I Have</ExperienceSubtitle>
      <ExperienceTitle><ExperienceTitleAnimation /> </ExperienceTitle>

      <ExperienceContainer className="container">

        <ExperienceFrontend>

          <CardTitle>Frontend Development</CardTitle>

          <ExperienceContent>
            <SkillsBox>
              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>HTML</SkillsTitle>
                  <SkillsText className="text-dark">Experienced</SkillsText>
                  </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>CSS</SkillsTitle>
                  <SkillsText className="text-dark">Intermediate</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>JavaScript</SkillsTitle>
                  <SkillsText className="text-dark">Experienced</SkillsText>
                </SkillsDiv>
              </SkillsDetails>
            </SkillsBox>

            <SkillsBox>
              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>React</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Bootstrap</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Tailwind</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

            </SkillsBox>

          </ExperienceContent>
        </ExperienceFrontend>

        <ExperienceBackend>
      
        <CardTitle>Backend Development</CardTitle>

          <ExperienceContent>
            <SkillsBox>
              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Tailwind</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Tailwind</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Tailwind</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>
            </SkillsBox>

            <SkillsBox>
              <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Tailwind</SkillsTitle>
                    <SkillsText className="text-dark">Basic</SkillsText>
                  </SkillsDiv>
                </SkillsDetails>

                <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Tailwind</SkillsTitle>
                    <SkillsText className="text-dark">Basic</SkillsText>
                  </SkillsDiv>
                </SkillsDetails>

                <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Tailwind</SkillsTitle>
                    <SkillsText className="text-dark">Basic</SkillsText>
                  </SkillsDiv>
            </SkillsDetails>
    
                </SkillsBox>
              </ExperienceContent>
        </ExperienceBackend>

      </ExperienceContainer>

    </ExperienceSection>
  )
}

export default Experience