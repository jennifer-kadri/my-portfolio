import React from 'react'
import { 
  PortfolioSection,
  PortfolioSubtitle, 
  PortfolioTitle, 
  PortfolioContainer,
  PortfolioCard, 
  PortfolioCardImage, 
  PortfolioCardImg, 
  PortfolioCardTitle, 
  PortfolioCardButton, 
  PortfolioLink
} from './PortfolioElements'
import { PortfolioTitleAnimation } from '../animations/TypingAnimation'
import IMG1 from '../../assets/img/portfolio-1.png'
import IMG2 from '../../assets/img/portfolio-2.png'
import IMG3 from '../../assets/img/portfolio-3.png'
import IMG4 from '../../assets/img/portfolio-4.png'
import IMG5 from '../../assets/img/portfolio-5.png'
import IMG6 from '../../assets/img/portfolio-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'My first project',
    github: 'https://github.com/',
    demo: 'https:dribble.com'
  }
]

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">

      <PortfolioSubtitle>My Recent Work</PortfolioSubtitle>
      <PortfolioTitle><PortfolioTitleAnimation /></PortfolioTitle>

      <PortfolioContainer className="container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <PortfolioCard>
                <PortfolioCardImage>
                  <PortfolioCardImg src={image} alt={title} />
                  <PortfolioCardTitle>{title}</PortfolioCardTitle>
                  <PortfolioCardButton>
                    <PortfolioLink href={github} className="btn btn-primary" target="_blank" rel="noreferrer">Project
                    </PortfolioLink>
                  </PortfolioCardButton>
                </PortfolioCardImage>
              </PortfolioCard>
            )
          })
        }
      </PortfolioContainer>

    </PortfolioSection>
  )
}

export default Portfolio