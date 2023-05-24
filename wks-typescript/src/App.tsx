import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import { User, fetchUsers } from './store/actions';
import { StoreState } from './store/reducers';

interface AppProps {
  users: User[];
  fetchUsers(): any;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <h1>return Typescript</h1>
    </div>
  );
}

export default App;
