import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
// Components.
import Stories from '../component/Stories';
import {ShowPosts} from '../component/Post';
import {HomeHeader} from '../component/sub/HeaderBar';
// Style
import General from '../style/General';
export default class Home extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {navigation: navigation};
  }
  render() {
    return (
      <View style={General.Container}>
        <HomeHeader navigation={this.state.navigation} />
        <ScrollView>
          <Stories props={{length: 10}} />
          <ShowPosts navigation={this.state.navigation} />
        </ScrollView>
      </View>
    );
  }
}
