import React, {Component} from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
          clearIcon={true}
          round
          lightTheme={true}
        />
      </View>
    );
  }
}
