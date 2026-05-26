import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  let [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      
      { isLogin ? <Dashboard/> : <Login setIsLogin = { setIsLogin }/> }
      
    </div>
  );
}

export default App;


