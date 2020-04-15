import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Post from './components/Posts'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Post></Post>
        </header>
      </div>
    </Provider>
  );
}

export default App;
