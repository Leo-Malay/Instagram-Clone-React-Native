import React, {Component} from 'react';
import {View} from 'react-native';
// Components
import {SearchHeader} from '../component/sub/HeaderBar';
// Style
import General from '../style/General';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <SearchHeader />
      </View>
    );
  }
}

export default Search;
