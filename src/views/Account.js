import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
// Components.
import {AccountHeader} from '../component/sub/HeaderBar';
import {Avatar} from '../component/sub/Avatar';
import Stories from '../component/Stories';
// Style
import General from '../style/General';
import AccountStyle from '../style/Account';
// Demo Image and data
import {People_Malay} from '../assets/Images';

class Account extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {navigation: navigation};
  }
  render() {
    return (
      <View style={[General.Container]}>
        <AccountHeader navigation={this.state.navigation} />
        <ScrollView>
          <View style={[General.Inline]}>
            <View style={AccountStyle.Avatar}>
              <Avatar props={{length: 100, image: People_Malay}} />
            </View>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>138</Text>
              {'\n'}Posts
            </Text>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>1M</Text>
              {'\n'}Followers
            </Text>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>235</Text>
              {'\n'}Following
            </Text>
          </View>
          <Text style={[General.TextSmall, General.Pad]}>
            Software Developer || Full Stack Developer{'\n'}MERN Stack Developer
            {'\n'}
            Mail:- malaybhavsar.290@gmail.com
          </Text>
          <Stories props={{length: 2, width: 50}} />
          <View></View>
        </ScrollView>
      </View>
    );
  }
}

export default Account;
