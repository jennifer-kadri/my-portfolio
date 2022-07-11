import React from "react"
import Typical from "react-typical"
import styled from "styled-components"

export default function HelloAnimation() {
   return (
      <Wrapper className="hello">
         <Typical
            wrapper="span"
            
            steps={[
               ' ',
               1000,
               '‹ Hello, I am ›',
               1000
            ]}
            />
      </Wrapper>
   )
}

export function MyNameAnimation() {
   return (
      <Wrapper className="name">
         <Typical
            wrapper="span"
            
            steps={[
               ' ',
               2000,
               'Jennifer KADRI',
               1000,
            ]}
            />
      </Wrapper>
   )
}

export function AboutTitleAnimation() {
   return (
      <Wrapper className="title">
            <Typical
               wrapper="span"
                  
               steps={[
                 ' ',
                 1000,
                 'About Me',
                  1000,
                  ' ',
                  1000,
                  'About Me',
                  1000,
                  ' ',
                  1000,
                  'About Me',
                  1000
               ]}
            />
      </Wrapper>
   )
}

export function AboutHelloAnimation() {
   return (
      <Wrapper className="description hello">
         <Typical
            wrapper="span"
            steps={[
               ' ',
               10000,
               ' Hello there ~',
            ]}
          />
      </Wrapper>
   )
}

export function AboutDescriptionAnimation() {
   return (
      <Wrapper className="description">
         <Typical 
            wrapper="span"
            steps={[
               ' ',
               14000,
               ' My name is Jennifer, I am 24 years old and love creating things. I am very passionate about web development, designing and programming. I am currently studying at Web@cadémie by Epitech in the south of France where I live.',
            ]}
         />
      </Wrapper>
   )
}

export function ExperienceTitleAnimation() {
   return (
      <Wrapper className="title">
            <Typical
               wrapper="span"
               loop={5}
               steps={[
                  ' ',
                  1000,
                 'My Experience',
                  1000,
               ]}
            />
      </Wrapper>
   )
}

export function PortfolioTitleAnimation() {
   return (
      <Wrapper className="title">
            <Typical
               wrapper="span"
               loop={5}
               steps={[
                  ' ',
                  1000,
                 'Portfolio',
                  1000,
                  ' ',
                  1000,
                  'Portfolio',
                  1000,
                  ' ',
                  1000,
                  'Portfolio',
                  1000
               ]}
            />
      </Wrapper>
   )
}

export function CarouselTitleAnimation() {
   return (
      <Wrapper className="title">
            <Typical
               wrapper="span"
               loop={5}
               steps={[
                  ' ',
                  1000,
                 'Projects',
                  1000,
                  ' ',
                  1000,
                  'Projects',
                  1000,
                  ' ',
                  1000,
                  'Projects',
                  1000
               ]}
            />
      </Wrapper>
   )
}

export function EmailAnimation() {
   return (
      <Wrapper>
         <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
               'Write me an email',
               1000,
               '',
               1000,
               'Write me an email',
               1000
            ]}
         />
      </Wrapper>
   )
}

const Wrapper = styled.span`
   &.hello {
      transition-delay: 1300ms;
      & ::after {
         visibility: hidden;
      }
   }
   &.name {
      & ::after {
         visibility: hidden;
      }
   }
   &.title {
      & ::after {
         visibility: hidden;
      }
   }
   &.description {
      text-align: center;
      & ::after {
         color: var(--clr-dark);
      }

      &.hello {
         padding-bottom: 1rem;
         & ::after {
            display: none;
         }
      }
   }
   & ::after {
      font-weight: 300;
      color: var(--clr-light-pink);
   }
`