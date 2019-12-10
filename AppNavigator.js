import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// const {createStackNavigator} = require("react-navigation-stack").default;
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AddWishlist from './screens/AddWishlist';
import CreateEvent from './screens/CreateEvent';
import LoginScreen from './screens/LoginScreen';
import AllEvents from './screens/AllEvents';
import AddEvents from './screens/AddEvents';
import Profile from './screens/Profile';
import SignUpScreen from './screens/SignUpScreen';
import ViewEvent from './screens/ViewEvent';
// import Button from 'react-native-flat-button';

const TabNavigator = createMaterialBottomTabNavigator({
 Profile: {
   screen: Profile,
   navigationOptions: { title: 'My Profile',
   tabBarColor: '#165b33',
   tabBarIcon: <MatIcon size={24} color="white" name="star" />
  },
   },
 AllEvents: {
   screen: AllEvents,
   navigationOptions: { title: 'My Events',
   tabBarColor: '#bb2528',
   tabBarIcon: <MatIcon size={24} color="white" name="phone" />,
},
 },
 AddEvents: {
   screen: AddEvents,
   navigationOptions: { title: 'Add Events',
   tabBarColor: '#f8b229',
   tabBarIcon: <MatIcon size={24} color="white" name="wb-sunny" />
},
 },
},
 {
   initialRouteName: 'AllEvents',
   shifting: true,
},
);

const FeedStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen, navigationOptions: ({navigation}) => ({
      header: null,
    })
  },
  SignUpScreen: {

    screen: SignUpScreen, navigationOptions: ({navigation}) => ({
      header: null,
    })
    },
    ViewEvent: {

      screen: ViewEvent, navigationOptions: ({navigation}) => ({
        header: null,
              headerLeft: () => <Button
              onPress={() => navigation.navigate('AllEvents')}>&#8592; Back to My Events</Button>,
          })
        },
  CreateEvent: {

    screen: CreateEvent, navigationOptions: ({navigation}) => ({
      header: null,
            headerLeft: () => <Button
            onPress={() => navigation.navigate('AllEvents')}>&#8592; Back to My Events</Button>,
        })
      },
  AddWishlist: {

    screen: AddWishlist, navigationOptions: ({navigation}) => ({
      header: null,
            headerLeft: () => <Button
            onPress={() => navigation.navigate('Profile')}>&#8592; Back to Profile</Button>,
        })
      },
// },
// {
//    initialRouteName: "LoginScreen",
});

 const SwitchNavigator = createSwitchNavigator({ Opening: FeedStack, Tabs: TabNavigator,}, { initialRouteName: 'Opening', resetOnBlur: true, }, );

 export default createAppContainer(SwitchNavigator);
