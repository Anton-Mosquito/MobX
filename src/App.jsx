
import React from 'react';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';

const App = () => {
  return (
    <div className="app">
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
