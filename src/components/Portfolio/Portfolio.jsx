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
    title: 'Connect 4',
    github: 'https://github.com/miyuna-projects/connect-4',
    demo: 'https://miyuna-projects.github.io/connect-4/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'MiyuChat IRC',
    github: 'https://github.com/miyuna-projects/miyuchat-irc',
    demo: 'https://miyuna-projects.github.io/miyuchat-irc'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Spotify',
    github: 'https://github.com/miyuna-projects/spotify/',
    demo: 'https://miyuna-projects.github.io/spotify'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Snapchat',
    github: 'https://github.com/miyuna-projects/snapchat/',
    demo: 'https://miyuna-projects.github.io/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Tweet Academia',
    github: 'https://github.com/miyuna-projects/tweet-academia/',
    demo: 'https://miyuna-projects.github.io/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Free Ads',
    github: 'https://github.com/miyuna-projects/free-ads/',
    demo: 'https://miyuna-projects.github.io/'
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
                    <PortfolioLink href={github} id="github" className="btn" target="_blank" rel="noreferrer">Project
                    </PortfolioLink>
                    <PortfolioLink href={demo} id="demo" className="btn btn-primary" target="_blank" rel="noreferrer">Demo
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