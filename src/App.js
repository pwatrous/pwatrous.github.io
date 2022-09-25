import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TimelinePage from './components/TimelinePage';
// import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <TimelinePage/>
      {/* <ContactPage/> */}
    </div>
  );
}

export default App;
