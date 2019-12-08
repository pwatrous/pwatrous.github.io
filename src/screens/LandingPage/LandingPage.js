import React, { Component } from 'react';
import Profile from './components/Profile';
import TypedText from './components/TypedText';
import WorkItem from './components/WorkItem';
import './LandingPage.scss';
import attentlyLogo from '../../assets/attently.png';
import catalystLogo from '../../assets/catalyst.png';
import neuLogo from '../../assets/neu.png';
import RaisedButton from 'material-ui/RaisedButton';
import resume from '../../assets/PatrickWatrous2019.pdf'

class LandingPage extends Component {
  render() {
    return (
        <div className="landing-page">
            <TypedText />
            <Profile />
            <div className="work">
                <a href={resume} target="_blank">
                    <RaisedButton className="resume-button" variant="contained">
                        Resume</RaisedButton>
                </a>
                <WorkItem
                    description="Current: Junior Developer"
                    atColor="#FEF827"
                    href="https://www.attently.io/team/patrick-watrous/"
                    src={attentlyLogo}
                />
                <WorkItem
                    description="Previously: Software Engineering Co-op"
                    atColor="#721820"
                    href="https://open.med.harvard.edu/person/patrick-watrous/"
                    src={catalystLogo}
                />
                <WorkItem
                    description="BS Computer Science & Accounting"
                    atColor="#E01A2C"
                    href="https://www.northeastern.edu/"
                    src={neuLogo}
                />
            </div>
        </div>
    );
  }
}

export default LandingPage;
