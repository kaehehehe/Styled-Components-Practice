import React from 'react';
import styled from 'styled-components';
import { Container } from './styles/Container.styled';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Flex } from './styles/Flex.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo src="./images/logo_white.svg" alt="logo" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </SocialIcons>
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    text-align: center;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
`;

const Logo = styled.img`
  margin-bottom: 30px;
`;

export default Footer;
