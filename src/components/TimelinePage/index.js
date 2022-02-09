import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import neu from '../../assets/northeastern.png';
import harvard from '../../assets/Harvard-Catalyst.png';
import loomis from '../../assets/loomis.png';

const TimelinePageContainer = styled.div`
  height: 100vh;
  background-color: #B5C9FF;
  width: 100vw;
`;
const TimelineCard = styled(Card)`
  height: 150px;
  margin: 40px 0;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
`;
const TimelineImg = styled.img`
  width: 7vw;
`;
const TimelineText = styled.p`
  width: 70%;
`;
const TimelineMainLine = styled.div`
  height: 100%;
  width: 4px;
  background-color: black;
  &.first {
    margin-top: 115px;
  }
  &.last {
    height: 50%;
    margin-bottom: 115px;
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
    <TimelinePageContainer container>
      <Grid container item>
        <Grid xs={2} />
        <Grid xs={1} container alignItems="center">
          <TimelineMainLine className="first"></TimelineMainLine>
          <TimelineSubLine></TimelineSubLine>
        </Grid>
        <Grid xs={7}>
          <TimelineCard>
            <CardContainer>
              <TimelineImg
                src={neu}
                alt="Northeastern University Logo"
              />
              <TimelineText>
                Vestibulum hendrerit sed erat tincidunt semper.
                Suspendisse potenti. Mauris fermentum, est quis
                lobortis venenatis, nisi dolor condimentum dui,
                quis auctor risus lacus dapibus orci.
              </TimelineText>
            </CardContainer>
          </TimelineCard>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid xs={2} />
        <Grid xs={1} container alignItems="center">
          <TimelineMainLine></TimelineMainLine>
          <TimelineSubLine></TimelineSubLine>
        </Grid>
        <Grid xs={7}>
          <TimelineCard>
            <CardContainer>
              <TimelineImg
                src={harvard}
                alt="Harvard Catalyst Logo"
              />
              <TimelineText>
                Vestibulum hendrerit sed erat tincidunt semper.
                Suspendisse potenti. Mauris fermentum, est quis
                lobortis venenatis, nisi dolor condimentum dui,
                quis auctor risus lacus dapibus orci.
              </TimelineText>
            </CardContainer>
          </TimelineCard>
        </Grid>
        <Grid container item>
          <Grid xs={2} />
          <Grid xs={1} container alignItems="center">
            <TimelineMainLine className="last"></TimelineMainLine>
            <TimelineSubLine></TimelineSubLine>
          </Grid>
          <Grid xs={7}>
            <TimelineCard>
              <CardContainer>
                <TimelineImg
                  src={loomis}
                  alt="Loomis Sayles Logo"
                />
                <TimelineText>
                  Vestibulum hendrerit sed erat tincidunt
                  semper. Suspendisse potenti. Mauris fermentum,
                  est quis lobortis venenatis, nisi dolor
                  condimentum dui, quis auctor risus lacus
                  dapibus orci.
                </TimelineText>
              </CardContainer>
            </TimelineCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={2} />
    </TimelinePageContainer>
  );
}

export default TimelinePage;
