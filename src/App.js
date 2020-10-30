import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Routes from './components/Routes';

function App() {

  //temporary is loading state
  const [ isLoading, setIsLoading ] = useState(false);

  //conditional loading render
  if (isLoading) {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;