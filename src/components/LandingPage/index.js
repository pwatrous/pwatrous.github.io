import React from 'react';
import styled from 'styled-components';
import pat from '../../assets/patrick.jpg';
import pwresume from '../../assets/pwresume.pdf';
import Grid from '@material-ui/core/Grid';

const LandingPageContainer = styled(Grid)`
  width: 100vw;
  height: calc(100vh - 40px);
  background-color: #B5C9FF;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const GridLeftContainer = styled(Grid)`
  padding-left: 5vw;
  align-self: center;
`;
const MainText = styled.div`
  font-size: 8vh;
  font-weight: 500;
  padding-bottom: 2vh;
`;
const SubText = styled.div`
  font-size: 1.4em;
`;
const GridRightContainer = styled(Grid)`
  display: flex;
  padding-right: 5vw;
`;
const PatImg = styled.img`
  width: 35vw;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  @media (max-width: 600px) {
    width: 45vw;
  }
`;

const LandingPage = () => {
  return (
      <LandingPageContainer container id="landing">
          <GridLeftContainer item xs={12} sm={6}>
            <MainText>Hi, I'm Patrick.</MainText>
            <SubText>I'm a software developer at Chewy in Boston.</SubText>
            <br />
            <SubText>Outside of work, I can be found doing origami, playing violin, 
              or endlessly tinkering with my 3D printers.</SubText>
            <br />
        <SubText>Check out my resume <a target="_blank" rel="noreferrer" href={pwresume}>here</a></SubText>
          </GridLeftContainer>
          <GridRightContainer item xs={12} sm={6} alignItems="center" justifyContent="center">
              <PatImg src={pat} alt="Me" />
          </GridRightContainer>
      </LandingPageContainer>
  );
}

export default LandingPage;
