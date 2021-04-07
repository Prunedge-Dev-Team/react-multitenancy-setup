import logo from './logo.svg';
import './App.css';
import { getSubdomain } from 'helpers/get-tenant';

function App() {
  const domain = getSubdomain();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Domain is running on {`${domain}.leadwayhealth.com`}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Away
        </a>
      </header>
    </div>
  );
}

export default App;
