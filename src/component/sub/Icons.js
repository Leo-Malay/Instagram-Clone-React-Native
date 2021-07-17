import React from 'react';
import Ion from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const IonIcons = ({props}) => {
  return (
    <Ion
      name={props.name}
      size={props.size || 20}
      color={props.color || '#000'}
    />
  );
};
const FAIcons = ({props}) => {
  return (
    <FA
      name={props.name}
      size={props.size || 20}
      color={props.color || '#000'}
    />
  );
};
const FA5Icons = ({props}) => {
  return (
    <FA5
      name={props.name}
      size={props.size || 20}
      color={props.color || '#000'}
    />
  );
};
const EntypoIcons = ({props}) => {
  return (
    <Entypo
      name={props.name}
      size={props.size || 20}
      color={props.color || '#000'}
    />
  );
};

export {IonIcons, FAIcons, FA5Icons, EntypoIcons};
