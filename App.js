import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// Importing Views.
import Account from './src/views/Account';
import NewAccount from './src/views/NewAccount';
import AccountPreview from './src/views/AccountPreview';
import Activity from './src/views/Activity';
import Home from './src/views/Home';
import Search from './src/views/Search';
import Reels from './src/views/Reels';
import Welcome from './src/views/Welcome';
import Settings from './src/views/Settings';
import NewPost from './src/views/NewPost';
import Messenger from './src/views/Messenger/Messenger';
import Chat from './src/views/Messenger/Chat';
// Components
import {IonIcons, EntypoIcons} from './src/component/sub/Icons';
// Tab Navigation
const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonIcons
              props={{name: 'home-outline', color: color, size: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonIcons props={{name: 'search', color: color, size: size}} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({color, size}) => (
            <EntypoIcons
              props={{name: 'folder-video', color: color, size: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonIcons
              props={{name: 'heart-outline', color: color, size: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonIcons
              props={{name: 'person-circle-outline', color: color, size: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
// Stack Navigation
const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewAccount"
        component={NewAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Messenger" component={Messenger} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AccountPreview"
        component={AccountPreview}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
