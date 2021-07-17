import React, {Component} from 'react';
import {View} from 'react-native';
// Componenet
import {Tab} from '../component/sub/Button';
// Style
import General from '../style/General';
class Settings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Tab
          props={{
            iconName: 'person-add',
            text: 'Follow and Invite Friends',
            onPress: () => {},
          }}
        />
        <Tab
          props={{
            iconName: 'notifications',
            text: 'Notifications',
            onPress: () => {},
          }}
        />
        <Tab
          props={{iconName: 'lock-closed', text: 'Privacy', onPress: () => {}}}
        />
        <Tab
          props={{
            iconName: 'person-circle-outline',
            text: 'Account',
            onPress: () => {},
          }}
        />
        <Tab props={{iconName: 'help-buoy', text: 'Help', onPress: () => {}}} />

        <Tab
          props={{
            iconName: 'information-circle-outline',
            text: 'Theme',
            onPress: () => {},
          }}
        />
      </View>
    );
  }
}

export default Settings;
