import React from "react"
import styled, { keyframes } from "styled-components"

export default function ProfessionAnimation() {
   const WebDevArray = "Fullstack Web Developer".split("")

    return (
        <Wrapper>
            {WebDevArray.map((item, i) => (
	      <span key={i}>{item}</span>
	))}
         </Wrapper>
    )
}

const animation = keyframes`
   25% {
      opacity: 0; 
      transform: 
         scale(1)
         translateY(0px) 
         skewY(0deg) 
         skewX(0deg) 
         rotateZ(0deg); 
         filter: blur(0px);
   }
   50% { 
      opacity: 1; 
      transform: 
         scale(1)
         translateY(0px) 
         skewY(0deg) 
         skewX(0deg) 
         rotateZ(0deg); 
         filter: blur(0px); 
   }
    60% { 
      opacity: 0; 
      transform: 
         scale(2)
         translateY(0px) 
         skewY(0deg) 
         skewX(0deg) 
         rotateZ(0deg); 
         filter: blur(0px);
   }
    70% { 
      opacity: 0; 
      transform: 
         scale(2)
         translateY(0px) 
         skewY(0deg) 
         skewX(0deg) 
         rotateZ(0deg); 
         filter: blur(0px); 
   }
    80% { 
      opacity: 1; 
      transform: 
         scale(1)
         translateY(0px) 
         skewY(0deg) 
         skewX(0deg) 
         rotateZ(0deg); 
         filter: blur(0px); 
   }
`

// span doesn't work well with translations
const Wrapper = styled.span`
   display: inline-block;

   span {
     animation-name: ${animation};
    //  animation-delay: 8000ms;
     animation-duration: 10s;
     animation-fill-mode: forwards;
     animation-iteration-count: infinite;
    //  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
   }
   span:nth-child(1) {
     animation-delay: 0.1s;
   }
   span:nth-child(2) {
     animation-delay: 0.2s;
   }
   span:nth-child(3) {
     animation-delay: 0.3s;
   }
   span:nth-child(4) {
     animation-delay: 0.4s;
   }
   span:nth-child(5) {
     animation-delay: 0.5s;
   }
   span:nth-child(6) {
     animation-delay: 0.6s;
   }
   span:nth-child(7) {
     animation-delay: 0.7s;
   }
   span:nth-child(8) {
     animation-delay: 0.8s;
   }
   span:nth-child(9) {
     animation-delay: 0.9s;
   }
   span:nth-child(10) {
     animation-delay: 1s;
   }
   span:nth-child(11) {
     animation-delay: 1.1s;
   }
   span:nth-child(12) {
     animation-delay: 1.2s;
   }
   span:nth-child(13) {
     animation-delay: 1.3s;
   }
   span:nth-child(14) {
     animation-delay: 1.4s;
   }
   span:nth-child(15) {
      animation-delay: 1.5s;
    }
    span:nth-child(16) {
      animation-delay: 1.6s;
    }
    span:nth-child(17) {
      animation-delay: 1.7s;
    }
    span:nth-child(18) {
      animation-delay: 1.8s;
    }
    span:nth-child(19) {
      animation-delay: 1.9s;
    }
    span:nth-child(20) {
      animation-delay: 2s;
    }
    span:nth-child(21) {
      animation-delay: 2.1s;
    }
    span:nth-child(22) {
      animation-delay: 2.2s;
    }
    span:nth-child(23) {
      animation-delay: 2.3s;
    }
`