import React from 'react'
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { authActions } from './store/redux-index';

function App() {

  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);


  return (
    <div className="App">
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}


      <Counter />
    </div>
  );
}

export default App;
