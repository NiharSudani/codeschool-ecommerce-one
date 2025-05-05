import styled from "styled-components";

export const Box = styled.div`
  padding: 50px 20px;
  background: black;
  color: white;
  font-family: Arial, sans-serif;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1 1 180px;
  margin: 20px;
`;

export const Heading = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin: 6px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 4px;
  margin-top: 10px;
`;

export const EmailInput = styled.input`
  padding: 10px;
  border: none;
  background: black;
  color: white;
  flex: 1;
  font-size: 14px;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
  }
`;

export const ArrowButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 16px;
`;

export const QRImage = styled.img`
  width: 90px;
  height: 80px;
  margin-top: 10px;
`;

export const StoreImage = styled.img`
  width: 130px;
  margin-top: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  font-size: 18px;

  svg {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #999;
    }
  }
`;

export const CopyRight = styled.p`
  text-align: center;
  font-size: 13px;
  opacity: 0.6;
  margin-top: 50px;
`;
