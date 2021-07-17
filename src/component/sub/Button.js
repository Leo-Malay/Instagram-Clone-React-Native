import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IonIcons} from './Icons';
// Style
import General from '../../style/General';

const Button = ({props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          alignItems: 'center',
          backgroundColor: props.bgcolor,
          width: 300,
          padding: 10,
          borderRadius: 50,
        },
      ]}>
      <Text style={[General.TextMedium, General.Bold, {color: props.color}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const Tab = ({props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          backgroundColor: props.bgcolor,
          padding: 10,
          height: 50,
          borderBottomWidth: 0.5,
          borderColor: '#000',
        },
        General.Inline,
      ]}>
      <IonIcons
        props={{
          name: props.iconName,
          size: 20,
          color: props.iconColor || '#000',
        }}
      />
      <Text
        style={[
          General.TextMedium,
          General.Bold,
          {color: props.color, paddingLeft: 10},
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export {Button, Tab};
