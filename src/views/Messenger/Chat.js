import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Input} from 'react-native-elements';
import General from '../../style/General';
export default class Chats extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {navigation, message: navigation.route.params, newMessage: ''};
  }
  render() {
    return (
      <View style={General.Container}>
        <Input
          placeholder="Write here.."
          onChangeText={value => this.setState({newMessage: value})}
          inputContainerStyle={{position: 'absolute', bottom: 0}}
        />
      </View>
    );
  }
}
