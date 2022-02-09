import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import neu from '../../assets/northeastern.png';
import harvard from '../../assets/Harvard-Catalyst.png';
import loomis from '../../assets/loomis.png';

const TimelinePageContainer = styled(Grid)`
  height: 100vh;
  background-color: #B5C9FF;
  width: 100vw;
`;
const TimelineCard = styled(Card)`
  height: 150px;
  margin: 50px 0;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-left: 30px;
`;
const TimelineImg = styled.img`
  width: 7vw;
`;

const TimelinePage = () => {
  return (
    <TimelinePageContainer container>
      <Grid xs={2} />
      <Grid xs={8}>
        <TimelineCard>
          <CardContainer>
            <TimelineImg
              src={neu}
              alt="Northeastern University Logo"
            />
          </CardContainer>
        </TimelineCard>
        <TimelineCard>
          <CardContainer>
            <TimelineImg
              src={harvard}
              alt="Harvard Catalyst Logo"
            />
          </CardContainer>
        </TimelineCard>
        <TimelineCard>
          <CardContainer>
            <TimelineImg
              src={loomis}
              alt="Loomis Sayles Logo"
            />
          </CardContainer>
        </TimelineCard>
      </Grid>
      <Grid xs={2} />
    </TimelinePageContainer>
  );
}

export default TimelinePage;
