import React from 'react';
import './App.css';
import SearchPlayerForm from '../SearchPlayerForm/SearchPlayerForm';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
    </div>
  );
}

export default App;
