import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
// Components.
import {PreviewAccountHeader} from '../component/sub/HeaderBar';
import {Avatar} from '../component/sub/Avatar';
import Stories from '../component/Stories';
// Style
import General from '../style/General';
import AccountStyle from '../style/Account';
class AccountPreview extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {navigation};
  }
  render() {
    const data = this.state.navigation.route.params;
    return (
      <View style={[General.Container]}>
        <PreviewAccountHeader
          props={{name: data.name}}
          navigation={this.state.navigation}
        />
        <ScrollView>
          <View style={[General.Inline]}>
            <View style={AccountStyle.Avatar}>
              <Avatar props={{length: 100, image: data.avatar}} />
            </View>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>10</Text>
              {'\n'}Posts
            </Text>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>167</Text>
              {'\n'}Followers
            </Text>
            <Text
              style={[
                General.AlignCenter,
                General.TextMedium,
                AccountStyle.HeaderText,
              ]}>
              <Text style={[General.TextLarge, General.Bold]}>154</Text>
              {'\n'}Following
            </Text>
          </View>
          <Text style={[General.TextSmall, General.Pad]}>{data.aboutMe}</Text>
          <Stories props={{length: 2, width: 50}} />
          <View></View>
        </ScrollView>
      </View>
    );
  }
}

export default AccountPreview;
