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
import { ExperienceTitleAnimation } from '../_animations/TypingAnimation'
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
                  <SkillsText className="text-dark">Advanced</SkillsText>
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
                  <SkillsText className="text-dark">Advanced</SkillsText>
                </SkillsDiv>
              </SkillsDetails>
            </SkillsBox>

            <SkillsBox>
              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>React</SkillsTitle>
                  <SkillsText className="text-dark">Advanced</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Angular</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>Vue.js</SkillsTitle>
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
                  <SkillsTitle>JavaScript</SkillsTitle>
                  <SkillsText className="text-dark">Advanced</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>PHP</SkillsTitle>
                  <SkillsText className="text-dark">Advanced</SkillsText>
                </SkillsDiv>
              </SkillsDetails>

              <SkillsDetails>
                <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                <SkillsDiv>
                  <SkillsTitle>MongoDB</SkillsTitle>
                  <SkillsText className="text-dark">Basic</SkillsText>
                </SkillsDiv>
              </SkillsDetails>
            </SkillsBox>

            <SkillsBox>
              <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Laravel</SkillsTitle>
                    <SkillsText className="text-dark">Basic</SkillsText>
                  </SkillsDiv>
                </SkillsDetails>

                <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Symfony</SkillsTitle>
                    <SkillsText className="text-dark">Basic</SkillsText>
                  </SkillsDiv>
                </SkillsDetails>

                <SkillsDetails>
                  <SkillsIcon className="icon"><HiOutlineBadgeCheck /></SkillsIcon>
                  <SkillsDiv>
                    <SkillsTitle>Python</SkillsTitle>
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