import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { User, fetchUsers, deleteUser } from './store/actions';
import { StoreState } from './store/reducer';

interface AppProps {
  users: User[];
  fetchUsers(): any;
  deleteUser(id: number): any;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User)=>{
        return (
          <div key={user.id}>
            {user.id}) {user.name}
            <button onClick={() => props.deleteUser(user.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(App);
