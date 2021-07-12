import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import {isUserLoggedIn, getAllCategory, getInitialData } from './actions';

function App() {
  const dispatch = useDispatch();
  const auth= useSelector(state => state.auth);
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
    // dispatch(getAllCategory());
    
    
  }, [auth.authenticate])
  return (
    <div className="App">
      <Switch>
       
       <PrivateRoute path="/" exact component={Home} />
       <Route path="/signin"  component={Signin}></Route>
       <Route path="/signup" component={Signup}></Route>
       
     </Switch>
    </div>
  );
}

export default App;
