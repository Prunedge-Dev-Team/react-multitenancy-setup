import './App.css';
import { getSubdomain, DOMAIN } from 'helpers/get-tenant';
import { useEffect } from 'react';

const simulateLogin = () => {
  const data = {
      accessToken: "98765tfdfgyu765tgffgvcderf45678jjkk878",
      id: "98765",
      subDomain: '45323432'
  }
  localStorage.setItem('token', JSON.stringify(data));
  return data;
}

const setStorageDataOnSiteLoad = () => {
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
    setStorageDataOnSiteLoad();
  }, [])

  const handleLogin = () => {
    const loginData = simulateLogin();
    const token = localStorage.getItem('token');
    window.location.href = `http://${loginData.subDomain}.${DOMAIN}/?token=${token}`;
  }

  return (
    <div className="App">
      <p>Domain is running on {`${domain}.${DOMAIN}`}</p>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
