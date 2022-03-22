import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <Logo>AVOCADO</Logo>
        <Hamgurger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamgurger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink>Home</MenuLink>
            <MenuLink>About</MenuLink>
            <MenuLink>Contact</MenuLink>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  flex-wrap: wrap;
  max-width: 1000px;
  padding: 1.5rem;

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background-color: #e7e9fc;
    }
  }
`;
const Logo = styled.div`
  color: #799651;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
`;
const Menu = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1 rgba(0, 0, 0, 0.07);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    width: 100%;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuLink = styled.a``;
const Hamgurger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 20px;
    background: #799651;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
