import React from 'react'
import { 
  CarouselSection, 
  CarouselSubtitle, 
  CarouselTitle, 
  CarouselContainer, 
  CarouselBox, 
  CardLeft, 
  CardRight, 
  ProjectImage, 
  ProjectImg,
  ProjectTitle, 
  ProjectCTA,
  ProjectBtn, 
  ProjectReview, 
} from './CarouselElements'
import './Carousel.css'
import { CarouselTitleAnimation } from '../animations/TypingAnimation'
import IMG1 from '../../assets/img/portfolio-1.png'
import IMG2 from '../../assets/img/portfolio-2.png'
import IMG3 from '../../assets/img/portfolio-3.png'
import IMG4 from '../../assets/img/portfolio-4.png'

import { Pagination, Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Connect 4',
    review: '« I really liked this JS project. This is a very fun and cute game and relatively simple to understand ! »',
    github: 'https://github.com/miyuna-projects/connect-4',
    demo: 'https://miyuna-projects.github.io/connect-4',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Internet Relay Chat',
    review: '« Made with socket.io. I absolutely loved this project and will continue to work on it. »',
    github: 'https://github.com/miyuna-projects/miyuchat-irc',
    demo: 'https://miyuna-projects.github.io/miyuchat-irc',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WYSIWYG',
    review: '« It really made me understand how frameworks in PHP are working and how to use them. »',
    github: 'https://github.com/miyuna-projects/wysiwyg',
    demo: 'https://miyuna-projects.github.io/wysiwyg',
  },
  {
    id: 4,
    image: IMG4,
    title: 'CSS Generator',
    review: '« Entertaining project, I actually enjoyed coding in PHP while I was working on this. »',
    github: 'https://github.com/miyuna-projects/',
    demo: 'https://miyuna-projects.github.io/',
  },
]

const Carousel = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <CarouselSection id="carousel">

      <CarouselSubtitle>Most liked</CarouselSubtitle>
      <CarouselTitle><CarouselTitleAnimation /></CarouselTitle>

      <CarouselContainer className="container">
        <Swiper 
            modules={[ Pagination, Navigation, Autoplay ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{ 
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false}}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
      
                // Re-init navigation
                swiper.navigation.destroy()
                swiper.autoplay.update()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
          >
          {
            data.map(({id, image, title, review, github, demo}) => {
              return (
                <CarouselBox id="carousel-box">
                  <SwiperSlide key={id}  id="carousel-box" className="carousel">
                    <CardLeft>
                      <ProjectImage>
                        <ProjectImg src={image} alt="project" />
                      </ProjectImage>
                      <ProjectTitle className="project__title">{title}</ProjectTitle>
                        <ProjectCTA>
                          <ProjectBtn href={github} className=" btn" target="_blank" rel="noreferrer">Project</ProjectBtn>
                          <ProjectBtn href={demo} className=" btn" target="_blank" rel="noreferrer">Demo</ProjectBtn>
                        </ProjectCTA> 
                    </CardLeft>
                    <CardRight>
                        <ProjectReview>{review}</ProjectReview> 
                    </CardRight>
                  </SwiperSlide>
                </CarouselBox>
              )
            })
          }
        </Swiper>
      </CarouselContainer>
    </CarouselSection>
  )
}

export default Carousel