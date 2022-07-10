import React from 'react'
import { 
  ServiceSection,
  ServiceSubtitle,
  ServiceTitle, 
  ServiceContainer, 
  Card, 
  CardTitleBox, 
  CardTitle, 
  CardList, 
  CardLi,
  CardText, 
  CardIcon
} from './ServicesElements'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <ServiceSection id="services">

      <ServiceSubtitle>What Can I Offer</ServiceSubtitle>
      <ServiceTitle>Services</ServiceTitle>

      <ServiceContainer className="container">
        <Card className="design">
            <CardTitleBox>
              <CardTitle>UI/UX Design</CardTitle>
            </CardTitleBox>
            <CardList>
              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>
          </CardList>
        </Card>

        <Card className="dev">
          <CardTitleBox >
            <CardTitle>Web Development</CardTitle>
          </CardTitleBox>
            <CardList>
              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>
          </CardList>
        </Card>

        {/* CONTENT CREATION */}
        <Card className="cc">
          <CardTitleBox>
            <CardTitle>Content Creation</CardTitle>
          </CardTitleBox>
            <CardList>
              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>

              <CardLi>
                <CardIcon><BiCheck /></CardIcon>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
              </CardLi>
          </CardList>
        </Card>

      </ServiceContainer>

    </ServiceSection>
  )
}

export default Services