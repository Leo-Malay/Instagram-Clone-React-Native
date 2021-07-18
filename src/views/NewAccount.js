import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Card, Input} from 'react-native-elements';
// Style
import General from '../style/General';
export default class Welcome extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
      username: '',
      password: '',
      email: '',
      mobile: '',
      name: '',
      address: '',
      showLoading: false,
    };
  }
  render() {
    return (
      <View style={[General.Container, General.AlignCenter]}>
        <Card containerStyle={{width: 350}}>
          <Card.Title style={[General.Bold, General.TextLarger]}>
            New Account
          </Card.Title>
          <Input
            placeholder="Name"
            leftIcon={{type: 'ionicon', name: 'person-circle-outline'}}
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            placeholder="Email"
            leftIcon={{type: 'ionicon', name: 'mail-outline'}}
            onChangeText={value => this.setState({email: value})}
          />
          <Input
            placeholder="Address"
            leftIcon={{type: 'ionicon', name: 'home-outline'}}
            onChangeText={value => this.setState({address: value})}
          />
          <Input
            placeholder="Mobile No."
            leftIcon={{type: 'ionicon', name: 'call-outline'}}
            onChangeText={value => this.setState({username: value})}
          />
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
            title="Journey Begins"
            type="solid"
            loading={this.state.showLoading}
            onPress={() => {
              this.setState({showLoading: true});
              this.state.navigation.navigation.navigate('Welcome');
              this.setState({showLoading: false});
            }}
          />
          <Button
            title="Already have an Account?"
            type="clear"
            onPress={() => {
              this.setState({showLoading: true});
              this.state.navigation.navigation.navigate('Welcome');
              this.setState({showLoading: false});
            }}
          />
        </Card>
      </View>
    );
  }
}
