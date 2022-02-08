// import {} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 40px;
    background-color: #b5c9ff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const HeaderItem = styled.div`
  color: #008b95;
  font-size: 20px;
`;

const Index =() => {
  return (
    <HeaderContainer>
      <HeaderItem>HOME</HeaderItem>
    </HeaderContainer>
  )
}

export default Index
