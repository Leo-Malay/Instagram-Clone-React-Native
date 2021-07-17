import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
// Components.
import {Header} from '../component/sub/HeaderBar';
// Style
import General from '../style/General';
class Activity extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={General.Container}>
        <Header props={{name: 'Reels'}} />
        <ScrollView></ScrollView>
      </View>
    );
  }
}

export default Activity;
