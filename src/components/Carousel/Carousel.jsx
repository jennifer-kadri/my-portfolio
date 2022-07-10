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
    title: 'My first project',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt repellendus porro fuga cupiditate modi maxime! Tenetur unde.',
    github: 'https://github.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'My first project',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sapiente quo fuga quaerat hic ullam nam adipisci enim voluptatibus eos.',
    github: 'https://github.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'My first project',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores delectus quibusdam dolores dolorem harum illo repudiandae nesciunt.',
    github: 'https://github.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'My first project',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ut minima labore reiciendis quasi hic ea iure velit voluptas.',
    github: 'https://github.com/',
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
            data.map(({id, image, title, review, github}) => {
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