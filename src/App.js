import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TimelinePage from './components/TimelinePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <TimelinePage/>
    </div>
  );
}

export default App;
