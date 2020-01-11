import React from 'react';
import './App.css';
import SearchPlayerForm from '../SearchPlayerForm/SearchPlayerForm';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <Route expact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
