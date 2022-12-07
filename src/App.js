import './App.css';
import { useState } from 'react';
import LitLogo from './LitLogo';
import Editor from '@monaco-editor/react';

function App() {

  // ----- autogen:app-name:start  -----
  const [appName, setAppName] = useState('@lit-protocol/demo');
  // ----- autogen:app-name:end  -----

  const [lang, setLang] = useState('json');
  const [data, setData] = useState({
    data: {
      name: 'Lit Protocol',
      description: 'Threadshold cryptography for the win!',
    }
  });

  const go = async () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <LitLogo />
        <h4>
          React Demo for: {appName}
        </h4>
        <button onClick={go}>Go!</button>
      </header>

      <div className='editor'>
        <Editor
          theme="vs-dark"
          height="100vh"
          language={lang}
          value={lang === 'json' ? JSON.stringify(data, null, 2) : data}
        />
      </div>
    </div>
  );
}


export default App;
