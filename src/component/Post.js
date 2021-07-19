import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
// Component
import {Avatar} from './sub/Avatar';
import {IonIcons, EntypoIcons, FeatherIcons} from './sub/Icons';
import Comment from './sub/Comments';
// Style
import General from '../style/General';
const localStyle = StyleSheet.create({
  Header: {
    padding: 5,
    marginHorizontal: 5,
    height: 45,
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
  Logo: {paddingVertical: 10, paddingHorizontal: 7},
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

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option_name: 'dots-three-vertical',
      like_name: 'heart-outline',
      like_color: '#000',
      comment_name: 'chatbubble-outline',
      message_name: 'send',
      save_name: 'bookmark-outline',
    };
  }
  render() {
    return (
      <View style={General.Container}>
        <View style={[General.Inline, localStyle.Header]}>
          <TouchableOpacity
            style={[General.Inline, {flex: 1}, localStyle.Header]}
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
          <TouchableOpacity style={localStyle.Logo} onPress={() => {}}>
            <EntypoIcons
              props={{
                name: this.state.option_name,
                size: 15,
                color: this.state.like_color,
              }}
            />
          </TouchableOpacity>
        </View>
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
              <TouchableOpacity style={localStyle.Logo} onPress={() => {}}>
                <FeatherIcons
                  props={{
                    name: this.state.message_name,
                    size: 23,
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
