import React, {Component} from 'react';
import {View} from 'react-native';
// Component
import {Tab} from '../component/sub/Button';
// Style
class Messenger extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Tab
          props={{
            iconName: 'person-circle',
            text: 'John Wick',
            onPress: () => {},
          }}
        />
        <Tab
          props={{
            iconName: 'person-circle',
            text: 'Iron Man',
            onPress: () => {},
          }}
        />
        <Tab
          props={{
            iconName: 'person-circle',
            text: 'Harley Quinn',
            onPress: () => {},
          }}
        />
      </View>
    );
  }
}

export default Messenger;
