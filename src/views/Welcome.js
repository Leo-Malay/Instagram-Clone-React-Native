import React, {Component} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import Instagram from '../assets/Instagram.png';
// Components
import {Button} from '../component/sub/Button';
// Style
import General from '../style/General';
class Welcome extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
    };
  }
  render() {
    return (
      <View style={[General.Container, General.AlignCenter]}>
        <Image source={Instagram} />
        <Text style={[General.Bold, General.TextLarger, {paddingVertical: 20}]}>
          Login
        </Text>
        <TextInput placeholder="Admin@gmail.com" style={General.TextIn} />
        <TextInput placeholder="AdminPass" style={General.TextIn} />
        <Button
          props={{
            text: 'Login',
            color: '#fff',
            bgcolor: '#000',
            onPress: () => {
              this.state.navigation.navigation.navigate('TabNav');
            },
          }}
        />
      </View>
    );
  }
}

export default Welcome;
