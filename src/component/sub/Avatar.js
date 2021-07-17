import React from 'react';
import {View, Text, Image} from 'react-native';
// Style
import General from '../../style/General';

const Avatar = ({props}) => {
  return (
    <View>
      <Image
        source={props.image}
        style={{
          width: props.length || 10,
          height: props.length || 10,
          borderRadius: 50,
        }}
      />
    </View>
  );
};

const AvatarName = ({props}) => {
  return (
    <View
      style={[
        General.Container,
        {
          alignItems: 'center',
          padding: 5,
          paddingHorizontal: 10,
        },
      ]}>
      <Image
        source={props.image}
        style={{
          width: props.length || 60,
          height: props.length || 60,
          borderRadius: 50,
        }}
      />
      <Text style={General.TextSmall}>{props.name}</Text>
    </View>
  );
};

export {Avatar, AvatarName};
