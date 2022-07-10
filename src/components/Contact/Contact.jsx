import React, { useRef } from 'react';
import { 
  ContactSection, 
  ContactSubtitle, 
  ContactTitle, 
  ContactContainer, 
  ContactOptions,
  ContactCard,  
  CardIcon, 
  CardTitle, 
  CardInfo, 
  CardLink, 
  ContactForm, 
  FormTitle, 
  FormTextMail, 
  FormInput, 
  FormTextArea,
  FormButton
} from './ContactElements'
import { EmailAnimation } from '../animations/TypingAnimation';
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandMessenger, TbBrandWhatsapp } from 'react-icons/tb'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_izbgf3p', 'template_zq6jv4g', form.current, 'iKc5RuAQmswbFH-6x')

    e.target.reset()
  };

  return (
    <ContactSection id="contact">

      <ContactSubtitle>Let's Talk</ContactSubtitle>
      <ContactTitle>Contact Me</ContactTitle>
      
      <ContactContainer className="container">
        <ContactOptions>
          <ContactCard>
            <CardIcon><HiOutlineMail /></CardIcon>
            <CardTitle>Email</CardTitle>
            <CardInfo className="mail-addie" >jennifer.kdri@gmail.com</CardInfo>
            <CardLink href="mailto:jennifer.kdri@gmail.com" target="_blank" rel="noreferrer">Click me</CardLink> 
          </ContactCard>

          <ContactCard>
            <CardIcon><TbBrandMessenger /></CardIcon>
            <CardTitle>Linkedin</CardTitle>
            <CardInfo>Jennifer Kadri</CardInfo>
            <CardLink href="https://www.linkedin.com/in/jennifer-kadri" target="_blank" rel="noreferrer">Click me</CardLink> 
          </ContactCard>

          <ContactCard>
            <CardIcon><TbBrandWhatsapp /></CardIcon>
            <CardTitle>WhatsApp</CardTitle>
            <CardInfo>+33 7 61 05 80 86</CardInfo>
            <CardLink href="https://api.whatsapp.com/send?phone=+33761058086" target="_blank" rel="noreferrer">Click me</CardLink> 
          </ContactCard>
        </ContactOptions>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <FormTitle className="email__subtitle"><EmailAnimation /></FormTitle>
          <FormTextMail className="form__grid">
            <FormInput type="text" name="name" placeholder="Enter your name" required />
            <FormInput type="email" name="email" placeholder="Enter your email" required />
          </FormTextMail>
          <FormInput type="text" name="subject" placeholder="Enter the title" required />
          <FormTextArea name="message" id="" rows="7" placeholder="Enter your message" required></FormTextArea>
          <FormButton type="submit" id="send" className="btn btn-primary">Send Message</FormButton>
        </ContactForm>

      </ContactContainer>
    </ContactSection>
  )
}

export default Contact