import React, { Component } from 'react';
import Profile from './components/Profile';
import TypedText from './components/TypedText';
import WorkItem from './components/WorkItem';
import './LandingPage.scss';
import zyloLogo from '../../assets/zylotech.webp';
import tlcLogo from '../../assets/tlc.jpg';
import neuLogo from '../../assets/neu.png';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <TypedText />
        <Profile />
        <div className="work">
          <WorkItem 
            description="Full-stack Developer" 
            atColor="#D36E14" 
            href="https://www.zylotech.com" 
            src={zyloLogo}
          />
          <WorkItem
            description="React Developer"
            atColor="#76BD43"
            href="https://www.tlcdeaf.org/page.cfm?p=627"
            src={tlcLogo}
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
