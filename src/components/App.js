import './styles/App.css';
import Bubbles from './Bubbles';
import Header from './Header';
import Profile from './Profile';
import Knowledge from './Knowledge';
import Studies from './Studies';
import Experience from './Experience';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header> </Header><br></br><br></br>
        <Profile></Profile><br></br> 
        <Studies></Studies><br></br>
        <Knowledge></Knowledge><br></br>
        <Experience></Experience><br></br>
        <Contacts></Contacts><br></br>
        <Bubbles></Bubbles> 
      </header>
      </div>
  );
}

export default App;
