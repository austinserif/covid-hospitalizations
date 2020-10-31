import './App.css';
import { useState, useEffect } from 'react';
import Routes from './components/Routes';

//baseui imports
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {

  //temporary is loading state
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  //conditional loading render

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <div className="App">
            <Routes isLoading={isLoading}/>
          </div>  
        </Centered>
      </BaseProvider>
    </StyletronProvider>

  );
}

export default App;