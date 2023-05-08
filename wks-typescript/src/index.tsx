import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  title: string;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {counter: 0};
  }
}

onIncrement = ():void => {
  this.setState({this.state.counter + 1})
}

onDecrement = ():void => {
  this.setState({this.state.counter - 1})
}

 return (
 <div>
  <h3>Henry Workshop - {title}</h3>
  <hr></hr>
  <button onClick={() => setCounter(counter+1)}>Increment</button>
  <button onClick={() => setCounter(counter-1)}>Decrement</button>
  <br></br>
  <span>{counter}</span>
  </div>
  );
}

ReactDOM.render(<App title="Typescript" />, document.querySelector('#root'));