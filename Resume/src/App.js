
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Interests from './Interests';

function App() {
  return (
    <>
    <div className="container" style={{"padding": "15px","margin":"0 auto", "max-width": "800px"}}> 
     <div style={{"height":"100%","width":"30%","backgroundColor":"#B38383","float":"left","padding":"0 15px"}}>
     <div>
      <img style={{"border-radius":"50%" , "width":"150px" , "height":"150px" , "padding":"0 50px" }} src="one.jfif" alt="avtar"/>
    </div>
      <h5>+91 81726 73828</h5>
      <h5>ishaan@gmail.com</h5> 
      <hr/>
        <h2>Professional Summary</h2>
        <div>
          <p>2018<br/>
          Financial Accounting<br/>
          Oxford Software institute India
          Start with a strong adjective or achievement:
           Highlight a key strength or quantifiable achievement that showcases your value.</p>
        </div>
        <hr/>
        <h2>Core Qualifications</h2>
        <div>
          <p>cash register opertor<br/>
          pos system opertor<br/>
          Teamwork<br/>
          Inventory Management<br/>
         </p>
        </div>
        <hr/>
        <h2>Languages</h2>
        <div>
          <p>Hindi<br/>
          English<br/>
          Gujrati<br/>
         </p>
        </div>
        <hr/>
        <h2>Additional Information</h2>
        <div>
          <p>Taught lifesaving skills nad CPI classes<br/>
            Red cross volunteer<br/>
          </p>
        </div>
      </div>
</div>

    <div style={{"height":"80%","width":"40%","backgroundColor":"white","float":"left","padding":"0 20px"}}>
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
