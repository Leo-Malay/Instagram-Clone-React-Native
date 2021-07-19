import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Badge} from 'react-native-elements';
import {IonIcons, FAIcons, FA5Icons} from './Icons';
// Image
import Instagram from '../../assets/Instagram.png';
// Style.
const localStyle = StyleSheet.create({
  Container: {
    paddingBottom: 3,
  },
  Icons: {margin: 12},
  Logo: {
    width: 100,
    resizeMode: 'contain',
  },
  SearchBar: {
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
  },
});
// Style
import General from '../../style/General';

const HomeHeader = ({navigation}) => {
  return (
    <View style={[General.Inline, localStyle.Container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('NewPost');
        }}
        style={localStyle.Icons}>
        <FAIcons props={{name: 'plus-square-o', size: 25}} />
      </TouchableOpacity>
      <View style={General.AlignCenter}>
        <Image source={Instagram} style={localStyle.Logo} />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Messenger');
        }}
        style={localStyle.Icons}>
        <FA5Icons props={{name: 'facebook-messenger', size: 25}} />
        <Badge
          value="2"
          status="error"
          containerStyle={{position: 'absolute', top: -5, right: -5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const AccountHeader = ({props, navigation}) => {
  return (
    <View style={[General.Inline, localStyle.Container]}>
      <Text
        style={[
          General.Bold,
          General.TextLarge,
          {flex: 1, padding: 6, marginTop: 4},
        ]}>
        Malay_Bhavsar_29
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('NewPost');
        }}
        style={localStyle.Icons}>
        <FAIcons props={{name: 'plus-square-o', size: 25}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Settings');
        }}
        style={localStyle.Icons}>
        <IonIcons props={{name: 'menu', size: 25}} />
      </TouchableOpacity>
    </View>
  );
};

const PreviewAccountHeader = ({props, navigation}) => {
  return (
    <View style={[General.Inline, localStyle.Container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.goBack();
        }}
        style={localStyle.Icons}>
        <IonIcons props={{name: 'arrow-back', size: 25}} />
      </TouchableOpacity>
      <Text
        style={[
          General.Bold,
          General.TextLarge,
          {flex: 1, padding: 6, marginTop: 4},
        ]}>
        {props.name}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('NewPost');
        }}
        style={localStyle.Icons}>
        <FAIcons props={{name: 'plus-square-o', size: 25}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Settings');
        }}
        style={localStyle.Icons}>
        <IonIcons props={{name: 'menu', size: 25}} />
      </TouchableOpacity>
    </View>
  );
};
const Header = ({props}) => {
  return (
    <View style={[General.Inline, localStyle.Container]}>
      <Text
        style={[
          General.Bold,
          General.TextLarge,
          {padding: 10, alignSelf: 'center', marginTop: 4},
        ]}>
        {props.name}
      </Text>
    </View>
  );
};

export {HomeHeader, Header, AccountHeader, PreviewAccountHeader};
