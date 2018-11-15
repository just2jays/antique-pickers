import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './components/Item/Item';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Item></Item>
        </div>
      </div>
    );
  }
}

App.propTypes = {

}

export default App;
