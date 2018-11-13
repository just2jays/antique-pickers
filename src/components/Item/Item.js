import React, { Component } from 'react';
import random from 'lodash/random';
import sample from 'lodash/sample';
import config from './item_config.json';

class item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: random(1800, new Date().getFullYear()),
      name: undefined,
      worth: 0
    };

    this.currentYear = new Date().getFullYear();
  }

  generateName() {
    const prefix = sample(config.prefixes);
    const object = sample(config.objects);
    const suffix = sample(config.suffixes);

    let itemWorth = this.determineWorth(prefix, object, suffix);
    
    this.setState({
      name: `${prefix.name} ${object.name} ${suffix.name}`,
      worth: `$${itemWorth}`
    });
  }

  determineItemAge(age_differential) {
    if( age_differential > 100 ) {
      return 'antique';
    }else if( age_differential > 20 ) {
      return 'old';
    }else{
      return 'modern';
    }
  }

  determineWorth(prefix, object, suffix){
    const age_differential = this.currentYear%this.state.year;
    
    let itemAge = this.determineItemAge(age_differential);
    let value_multiplier = 0;

    // Calculate prefix/suffix stats
    switch(itemAge) {
      case 'antique':
        value_multiplier += prefix.age_multiplier.old;
        break;
      case 'old':
        value_multiplier += prefix.age_multiplier.default;
        break;
      case 'modern':
        value_multiplier += prefix.age_multiplier.new;
        break;
      default:
        break;
    }

    // Calculate suffix stats
    switch(itemAge) {
      case 'antique':
        value_multiplier += suffix.age_multiplier.old;
        break;
      case 'old':
        value_multiplier += suffix.age_multiplier.default;
        break;
      case 'modern':
        value_multiplier += suffix.age_multiplier.new;
        break;
      default:
        break;
    }

    return object.price * value_multiplier;
  }

  componentDidMount() {
    this.generateName();
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Year made: {this.state.year}</p>
        <p>Value: {this.state.worth}</p>
      </div>
    )
  }
}

export default item;