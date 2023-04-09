import React from 'react'
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {

  const isAuthenticated = useSelector(state => state.isAuthenticated);


  return (
    <div className="App">
      <Header />
      {isAuthenticated && <>
        <UserProfile /> </>}
      <Auth />


      <Counter />
    </div>
  );
}

export default App;
