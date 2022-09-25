import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import neu from '../../assets/northeastern.png';
import harvard from '../../assets/Harvard-Catalyst.png';
import loomis from '../../assets/loomis.png';
import chewy from '../../assets/chewy.png';

const TimelinePageContainer = styled.div`
  height: 100%;
  background-color: #B5C9FF;
`;
const TimelineCard = styled(Card)`
  height: 150px;
  margin: 40px 0;
  @media (max-width: 600px) {
    height: 180px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;
const TimelineImg = styled.img`
  width: 9vw;
  @media (max-width: 600px) {
    width: 13vw;
  }
`;
const TimelineText = styled.p`
  width: 70%;
  font-size: 1.1rem;
`;
const TimelineDate = styled.p`
  font-size: 1.4rem;
`;
const TimelineMainLine = styled.div`
  height: 100%;
  width: 4px;
  background-color: black;
  &.first {
    margin-top: 115px;
    @media (max-width: 600px) {
      margin-top: 130px;
    }
  }
  &.last {
    height: 50%;
    margin-bottom: 115px;
    @media (max-width: 600px) {
      margin-bottom: 130px;
    }
  }
`;
const TimelineSubLine = styled.div`
  width: 8.33vw;
  height: 4px;
  background-color: black;
  position: absolute;
`;

const TimelinePage = () => {
  return (
    <TimelinePageContainer container id="timeline">
      <Grid container item>
        <Grid xs={0} sm={1}/>
        <Grid xs={2} container alignItems="center"><TimelineDate>Now</TimelineDate></Grid>
        <Grid xs={1} container alignItems="center">
          <TimelineMainLine className="first"></TimelineMainLine>
          <TimelineSubLine></TimelineSubLine>
        </Grid>
        <Grid xs={8} sm={7}>
          <TimelineCard>
            <CardContainer>
              <TimelineImg
                src={chewy}
                alt="ChewyLogo"
              />
              <TimelineText>
                Software Engineer II in the pet health department at Chewy.
                </TimelineText>
            </CardContainer>
          </TimelineCard>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid xs={0} sm={1} />
        <Grid xs={2} container alignItems="center"><TimelineDate>2021-2022</TimelineDate></Grid>
        <Grid xs={1} container alignItems="center">
          <TimelineMainLine></TimelineMainLine>
          <TimelineSubLine></TimelineSubLine>
        </Grid>
        <Grid xs={8} sm={7}>
          <TimelineCard>
            <CardContainer>
              <TimelineImg
                src={loomis}
                alt="Loomis Sayles Logo"
              />
              <TimelineText>
                Built, deployed, and maintained several applications with regular
                use by the fixed income analysts at Loomis, Sayles & Company.
                </TimelineText>
            </CardContainer>
          </TimelineCard>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid xs={0} sm={1} />
        <Grid xs={2} container alignItems="center"><TimelineDate>2019,<br/>2020-2021</TimelineDate></Grid>
        <Grid xs={1} container alignItems="center">
          <TimelineMainLine></TimelineMainLine>
          <TimelineSubLine></TimelineSubLine>
        </Grid>
        <Grid xs={8} sm={7}>
          <TimelineCard>
            <CardContainer>
              <TimelineImg
                src={harvard}
                alt="Harvard Catalyst Logo"
              />
              <TimelineText>
                Worked on national-scale grant-funded projects to facilitate
                clinical and translational research at Harvard Catalyst.
              </TimelineText>
            </CardContainer>
          </TimelineCard>
        </Grid>
        <Grid container item>
          <Grid xs={0} sm={1} />
          <Grid xs={2} container alignItems="center"><TimelineDate>2020</TimelineDate></Grid>
          <Grid xs={1} container alignItems="center">
            <TimelineMainLine className="last"></TimelineMainLine>
            <TimelineSubLine></TimelineSubLine>
          </Grid>
          <Grid xs={8} sm={7}>
            <TimelineCard>
              <CardContainer>
                <TimelineImg
                  src={neu}
                  alt="Northeastern University Logo"
                />
                <TimelineText>
                  Graduated from Northeastern University with a combined degree in
                  computer science and accounting.
              </TimelineText>
              </CardContainer>
            </TimelineCard>
          </Grid>
        </Grid>
      </Grid>
    </TimelinePageContainer>
  );
}

export default TimelinePage;
