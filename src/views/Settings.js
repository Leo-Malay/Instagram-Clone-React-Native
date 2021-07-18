import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';
export default class Settings extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <ListItem key={0} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Follow and Invite Friends</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem key={1} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Notifications</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem key={2} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Privacy</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem key={3} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Account</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem key={4} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Help</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem key={5} bottomDivider onPress={() => {}}>
          <ListItem.Content>
            <ListItem.Title>Theme</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  }
}
