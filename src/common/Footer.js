import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  Text,
  EmailWrapper,
  EmailInput,
  ArrowButton,
  QRImage,
  StoreImage,
  SocialIcons,
  CopyRight
} from "./FooterStyles";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Exclusive</Heading>
            <Text style={{ marginTop: "10px", fontWeight: "600" }}>Subscribe</Text>
            <Text>Get 10% off your first order</Text>
            <EmailWrapper>
              <EmailInput placeholder="Enter your email" />
              <ArrowButton></ArrowButton>
            </EmailWrapper>
          </Column>

          <Column>
            <Heading>Support</Heading>
            <Text>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Text>
            <Text>exclusive@gmail.com</Text>
            <Text>+88015-88888-9999</Text>
          </Column>

          <Column>
            <Heading>Account</Heading>
            <FooterLink href="#" naem="MY Account ">My Account</FooterLink>
            <FooterLink href="#" naem="Login / Register">Login / Register</FooterLink>
            <FooterLink href="#" name="Cart">Cart</FooterLink>
            <FooterLink href="#" name="Wishlist">Wishlist</FooterLink>
            <FooterLink href="#" name="Shop">Shop</FooterLink>
          </Column>

          <Column>
            <Heading>Quick Link</Heading>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms Of Use</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Column>

          <Column>
            <Heading>Download App</Heading>
            <Text>Save $3 with App New User Only</Text>
            <QRImage src="QR.jpg" alt="QR" />
            <StoreImage
              src="png-transparent-google-play-store-logo.png"
              alt="Google Play"
            />
            <StoreImage
              src="png-transparent-app-store-apple.png"
              alt="App Store"
            />
            <SocialIcons>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </SocialIcons>
          </Column>
        </Row>
        <CopyRight>© Code school</CopyRight>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
