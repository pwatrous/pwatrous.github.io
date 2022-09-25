// import {} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 40px;
  width: 100vw;
  background-color: #b5c9ff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  z-index: 99;
`;
const HeaderItem = styled.a`
  color: #008b95;
  font-size: 20px;
  padding-right: 30px;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Index =() => {
  return (
    <HeaderContainer>
      <HeaderItem href="#landing">HOME</HeaderItem>
      <HeaderItem href="#timeline">TIMELINE</HeaderItem>
    </HeaderContainer>
  )
}

export default Index
