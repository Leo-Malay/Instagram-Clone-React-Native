import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {PreviewAccountHeader} from '../../component/sub/HeaderBar';
import General from '../../style/General';
const localStyle = StyleSheet.create({
  msg: {
    color: '#fff',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    maxWidth: 350,
    marginHorizontal: 10,
    marginVertical: 4,
  },
  sender: {backgroundColor: '#006AFF'},
  receiver: {backgroundColor: '#00B2FF'},
});
export default class Chats extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation,
      message: navigation.route.params.messages,
      name: navigation.route.params.name,
      newMessage: '',
    };
  }
  render() {
    return (
      <View style={General.Container}>
        <PreviewAccountHeader
          props={{name: this.state.name}}
          navigation={this.state.navigation}
        />
        <ScrollView style={{flex: 1, marginVertical: 10}}>
          {this.state.message.map((ele, i) => {
            if (ele.type == 1) {
              return (
                <Text
                  key={i}
                  style={[
                    localStyle.msg,
                    localStyle.receiver,
                    General.Bold,
                    General.TextMedium,
                    {alignSelf: 'flex-start'},
                  ]}>
                  {ele.message}
                </Text>
              );
            } else {
              return (
                <Text
                  key={i}
                  style={[
                    localStyle.msg,
                    localStyle.sender,
                    General.Bold,
                    General.TextMedium,
                    {alignSelf: 'flex-end'},
                  ]}>
                  {ele.message}
                </Text>
              );
            }
          })}
        </ScrollView>
        <Input
          placeholder="Write here.."
          onChangeText={value => this.setState({newMessage: value})}
          inputContainerStyle={{
            position: 'absolute',
            bottom: 2,
            left: 10,
            border: 0,
          }}
          rightIcon={{
            name: 'arrow-forward',
            size: 30,
            color: '#fff',
            iconStyle: {
              backgroundColor: '#006AFF',
              padding: 5,
              borderRadius: 50,
            },
            onPress: () => {},
          }}
        />
      </View>
    );
  }
}
