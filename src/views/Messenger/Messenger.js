import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
// Style
export default class Messenger extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation,
      message_list: [
        {
          name: 'Lily Potter',
          image: '#',
          messages: [
            {type: 1, message: 'Hello'},
            {type: 0, message: 'Hello!!'},
            {
              type: 1,
              message: 'You coming to the ballet in Hogwartz? If yes who with?',
            },
            {
              type: 0,
              message: 'Yes! I will be accompanied by Hermione Granger',
            },
            {
              type: 1,
              message: 'Awesome!',
            },
          ],
        },
        {name: 'Angelina Johnson', image: '#', messages: []},
        {name: 'Mike Thomson', image: '#', messages: []},
      ],
    };
  }
  render() {
    return (
      <View>
        {this.state.message_list.map((ele, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                this.state.navigation.navigation.navigate('Chat', {
                  name: ele.name,
                  messages: ele.messages,
                });
              }}>
              <Avatar
                source={{uri: ele.image}}
                rounded
                title={ele.name.slice(0, 2).toUpperCase()}
              />
              <ListItem.Content>
                <ListItem.Title>{ele.name}</ListItem.Title>
                <ListItem.Subtitle>New Message</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </View>
    );
  }
}
