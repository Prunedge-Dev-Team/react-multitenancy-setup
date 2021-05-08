import './App.css';
import { getSubdomain, DOMAIN } from 'helpers/get-tenant';
import { useEffect } from 'react';

const setDefaultStorage = () => {
  const data = {
      accessToken: "98765tfdfgyu765tgffgvcderf45678jjkk878",
      id: "98765"
  }
  localStorage.setItem('token', JSON.stringify(data));
}

const setStorageData = () => {
  const url = window.location.href;
  let query = url.split('?token=')[1]
  if (query){
    query = query.split("%22").join('"')
    localStorage.setItem('token', query)
    window.location.href = url.split('?token=')[0]
  }
}

function App() {
  const domain = getSubdomain();

  useEffect(() => {
    setStorageData();
  }, [])

  const handleLogin = () => {
    setDefaultStorage();
    const sub = '45323432';
    const token = localStorage.getItem('token');
    window.location.href = `http://${sub}.${DOMAIN}/?token=${token}`;
  }

  return (
    <div className="App">
      <p>Domain is running on {`${domain}.${DOMAIN}`}</p>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
