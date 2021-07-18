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
          paddingHorizontal: 6,
        },
      ]}>
      <View
        style={{
          borderRadius: 50,
          borderColor: '#dd2a7b',
          borderWidth: 2,
          padding: 2,
        }}>
        <Image
          source={props.image}
          style={{
            width: props.length || 60,
            height: props.length || 60,
            borderRadius: 50,
          }}
        />
      </View>
      <Text style={General.TextSmall}>{props.name}</Text>
    </View>
  );
};

export {Avatar, AvatarName};
