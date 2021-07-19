import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
// Components.
import Stories from '../component/Stories';
import Post from '../component/Post';
import {HomeHeader} from '../component/sub/HeaderBar';
// Style
import General from '../style/General';
// Demo images & data
import {
  People_Angelina,
  People_Lily,
  People_Mike,
  People_Sofia,
  People_Malay,
  Mountain0,
  Mountain1,
  Mountain2,
  Tree0,
  Tree1,
  Building,
} from '../assets/Images';

export default class Home extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
      post_data: [
        {
          name: 'Malay Bhavsar',
          avatar: People_Malay,
          image: Mountain0,
          date: '14-Jul-2021',
          aboutMe:
            'Software Engineer || Full Stack Developer\nMERN Stack Developer\nMail:- malaybhavsar.290@gmail.com',
        },
        {
          name: 'Lily Potter',
          avatar: People_Lily,
          image: Tree0,
          date: '13-Jul-2021',
          aboutMe: 'Mother of Harry Potter!\nKiller: Voldemort',
        },
        {
          name: 'Malay Bhavsar',
          avatar: People_Malay,
          image: Mountain1,
          date: '11-Jul-2021',
          aboutMe:
            'Software Engineer || Full Stack Developer\nMERN Stack Developer\nMail:- malaybhavsar.290@gmail.com',
        },
        {
          name: 'Angelina Johnson',
          avatar: People_Angelina,
          image: Building,
          date: '07-Jul-2021',
          aboutMe: 'Public Figure! Daily Vlogs! Youtuber',
        },
        {
          name: 'Mike Thomson',
          avatar: People_Mike,
          image: Tree1,
          date: '07-Jul-2021',
          aboutMe: 'Hola Amigo! Hello My Friends',
        },
        {
          name: 'Queen Sofia',
          avatar: People_Sofia,
          image: Mountain2,
          date: '05-Jul-2021',
          aboutMe: 'Queen of Narnia!',
        },
      ],
    };
  }
  render() {
    return (
      <View style={General.Container}>
        <HomeHeader navigation={this.state.navigation} />
        <ScrollView>
          <Stories props={{length: 10}} />
          {this.state.post_data.map((ele, i) => {
            return (
              <Post
                key={i}
                props={{
                  name: ele.name,
                  avatar: ele.avatar,
                  image: ele.image,
                  date: ele.date,
                  aboutMe: ele.aboutMe,
                  navigation: this.state.navigation.navigation,
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
