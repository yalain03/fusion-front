import React, { Component } from 'react';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import logo from './logo.svg';
import './App.css';

const store = configureStore();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
