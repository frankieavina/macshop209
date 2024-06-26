import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color:  rgb(235,235,235);
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  bottom:0;
  width:100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Francisco Avina © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;