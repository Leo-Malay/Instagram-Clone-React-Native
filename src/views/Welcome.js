import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Button, Card, Input} from 'react-native-elements';
import Instagram from '../assets/Instagram.png';
// Style
import General from '../style/General';
export default class Welcome extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
      username: '',
      password: '',
      showLoading: false,
    };
  }
  render() {
    return (
      <View style={[General.Container, General.AlignCenter]}>
        <Image source={Instagram} style={{position: 'absolute', top: 100}} />
        <Card containerStyle={{width: 350}}>
          <Card.Title style={[General.Bold, General.TextLarger]}>
            Login
          </Card.Title>
          <Input
            placeholder="Username"
            leftIcon={{type: 'ionicon', name: 'person-circle-outline'}}
            onChangeText={value => this.setState({username: value})}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={{type: 'feather', name: 'lock'}}
            onChangeText={value => this.setState({password: value})}
          />
          <Button
            title="Login"
            type="solid"
            loading={this.state.showLoading}
            onPress={() => {
              this.setState({showLoading: true});
              this.state.navigation.navigation.navigate('TabNav');
              this.setState({showLoading: false});
            }}
          />
          <Button
            title="New Here? Create Account"
            type="clear"
            onPress={() => {
              this.state.navigation.navigation.navigate('NewAccount');
            }}
          />
          <Card.Divider />
          <Text style={[{alignSelf: 'center'}, General.Bold]}>
            Made with 💛 by Malay Bhavsar
          </Text>
        </Card>
      </View>
    );
  }
}
