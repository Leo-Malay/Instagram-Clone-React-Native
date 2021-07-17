import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
// Component
import {Avatar} from './sub/Avatar';
import {IonIcons} from './sub/Icons';
import Comment from './sub/Comments';
// Style
import General from '../style/General';
const localStyle = StyleSheet.create({
  Header: {
    padding: 5,
    margin: 5,
  },
  Img: {
    maxHeight: 450,
    resizeMode: 'contain',
  },
  ImgContainer: {
    width: '100%',
    backgroundColor: '#ccc',
    maxHeight: 450,
    alignItems: 'center',
  },
  Footer: {},
  Logo: {padding: 10},
  Hpad: {
    paddingHorizontal: 15,
  },
  Vpad: {
    paddingVertical: 10,
  },
  Rightpad: {
    marginRight: 20,
  },
});
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

const ShowPosts = ({props, navigation}) => {
  return (
    <View>
      <Post
        key={0}
        props={{
          name: 'Malay Bhavsar',
          avatar: People_Malay,
          image: Mountain0,
          date: '14-Jul-2021',
          aboutMe:
            'Software Engineer || Full Stack Developer\nMERN Stack Developer\nMail:- malaybhavsar.290@gmail.com',
          navigation: navigation.navigation,
        }}
      />
      <Post
        key={1}
        props={{
          name: 'Lily Potter',
          avatar: People_Lily,
          image: Tree0,
          date: '13-Jul-2021',
          aboutMe: 'Mother of Harry Potter!\nKiller: Voldemort',
          navigation: navigation.navigation,
        }}
      />
      <Post
        key={2}
        props={{
          name: 'Malay Bhavsar',
          avatar: People_Malay,
          image: Mountain1,
          date: '11-Jul-2021',
          aboutMe:
            'Software Engineer || Full Stack Developer\nMERN Stack Developer\nMail:- malaybhavsar.290@gmail.com',
          navigation: navigation.navigation,
        }}
      />
      <Post
        key={3}
        props={{
          name: 'Angelina Johnson',
          avatar: People_Angelina,
          image: Building,
          date: '07-Jul-2021',
          aboutMe: 'Public Figure! Daily Vlogs! Youtuber',
          navigation: navigation.navigation,
        }}
      />
      <Post
        key={4}
        props={{
          name: 'Mike Thomson',
          avatar: People_Mike,
          image: Tree1,
          date: '07-Jul-2021',
          aboutMe: 'Hola Amigo! Hello My Friends',
          navigation: navigation.navigation,
        }}
      />
      <Post
        key={5}
        props={{
          name: 'Queen Sofia',
          avatar: People_Sofia,
          image: Mountain2,
          date: '05-Jul-2021',
          aboutMe: 'Queen of Narnia!',
          navigation: navigation.navigation,
        }}
      />
    </View>
  );
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like_name: 'heart-outline',
      like_color: '#000',
      comment_name: 'chatbubble-outline',
      save_name: 'bookmark-outline',
    };
  }
  render() {
    return (
      <View style={General.Container}>
        <TouchableOpacity
          style={[General.Inline, localStyle.Header]}
          onPress={() => {
            this.props.props.navigation.navigate('AccountPreview', {
              name: this.props.props.name,
              avatar: this.props.props.avatar,
              aboutMe: this.props.props.aboutMe,
            });
          }}>
          <Avatar props={{length: 25, image: this.props.props.avatar}} />
          <Text style={[General.TextMedium, localStyle.Hpad]}>
            {this.props.props.name}
          </Text>
        </TouchableOpacity>
        <View style={localStyle.ImgContainer}>
          <Image source={this.props.props.image} style={localStyle.Img} />
        </View>
        <View style={localStyle.Footer}>
          <View style={General.Inline}>
            <View style={[General.Inline, {flex: 1}]}>
              <TouchableOpacity
                style={localStyle.Logo}
                onPress={() => {
                  if (this.state.like_name === 'heart-outline') {
                    this.setState({like_name: 'heart', like_color: '#ff0000'});
                  } else {
                    this.setState({
                      like_name: 'heart-outline',
                      like_color: '#000',
                    });
                  }
                }}>
                <IonIcons
                  props={{
                    name: this.state.like_name,
                    size: 25,
                    color: this.state.like_color,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={localStyle.Logo}
                onPress={() => {
                  if (this.state.comment_name === 'chatbubble-outline') {
                    this.setState({
                      comment_name: 'chatbubble',
                    });
                  } else {
                    this.setState({
                      comment_name: 'chatbubble-outline',
                    });
                  }
                }}>
                <IonIcons
                  props={{
                    name: this.state.comment_name,
                    size: 25,
                    color: this.state.comment_color,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={localStyle.Logo}
              onPress={() => {
                if (this.state.save_name === 'bookmark-outline') {
                  this.setState({
                    save_name: 'bookmark',
                  });
                } else {
                  this.setState({
                    save_name: 'bookmark-outline',
                  });
                }
              }}>
              <IonIcons
                props={{
                  name: this.state.save_name,
                  size: 25,
                  color: this.state.save_color,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={localStyle.Hpad}>
            <Comment
              props={{
                comments: [
                  {name: 'Malay', comment: 'Awesome Pic'},
                  {
                    name: 'John Wick',
                    comment: 'Wanna work with me in the movies. :)',
                  },
                  {name: 'Harry Potter', comment: 'Awesome Pic Brother!'},
                ],
              }}
            />
          </View>
          <Text style={[General.TextSmaller, localStyle.Hpad, localStyle.Vpad]}>
            {this.props.props.date}
          </Text>
        </View>
      </View>
    );
  }
}

export {ShowPosts, Post};
