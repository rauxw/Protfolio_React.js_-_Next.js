import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:699-699-6999'>tel:699-699-6999</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:contact@lorem.com'>contact@lorem.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one at a time ;)</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
