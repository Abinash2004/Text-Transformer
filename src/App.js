import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null) ;
    }, 3000)
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success")
    }
  }

  return (
    <>
      <NavBar title="Text Transformer" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <TextForm showAlert={showAlert} heading="Text Operations" mode={mode}/>
      </div>
    </>
  );
}

export default App;
