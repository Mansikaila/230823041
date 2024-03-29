
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Interests from './Interests';
import Summary from './Summary';

function App() {
  return (
    <>
     <div style={{"height":"100%","width":"30%","backgroundColor":"#B38383","float":"left"}}>
        <Summary />
      </div>
    <div style={{"height":"80%","width":"40%","backgroundColor":"white","float":"left"}}>
    <div className="App">
        <Header />
       <hr></hr>
        <Experience />
        <hr></hr>
        <Education />
        <hr></hr>
        <Interests />
        </div>
        </div>
       
      </>
  );
}

export default App;
