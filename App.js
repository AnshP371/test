import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import propTypes from "prop-types";
import { TextForm } from './components/TextForm';
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const[Mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type:type
})
  }
   const toggleMode  = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.background = '#6562C7';
      setAlert("Dark mode has been enabled","success");
    }
    if(Mode==='dark'){
    setMode('light');
    document.body.style.background = 'white';
    setAlert("Light mode has been enabled","success")
    }
   }
  return (
    <>
      <Navbar title="TestUtils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container">
      < TextForm heading="Enter the text to analyze below" mode={Mode}/>
        {/*<About />*/}
      </div>
    </>
  );
}
// Prop types is a type of check help use fix the prop variable type so in future we are unable to send any other prop than string

Navbar.propTypes = {
  title: propTypes.string.isRequired, //isReqired makes is mandatory that the user has to send some text value
  aboutText: propTypes.string,
};
// default props enable use to store a predefined prop data that can be passed from the parent function component to child componets
Navbar.defaultProps = {
  title: "Text Mixer",
  aboutText: "About TextMixer",
};
export default App;
