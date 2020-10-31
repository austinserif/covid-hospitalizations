import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Routes from './components/Routes';

//baseui imports
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

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
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <div className="App">
            <Routes/>
          </div>  
        </Centered>
      </BaseProvider>
    </StyletronProvider>

  );
}

export default App;