import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PostsScreen from '../screens/PostsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import MyTabBar from './TabBar';
import PhotoDetailsScreen from '../screens/PhotoDetailsScreen';
import HeaderStyle from '../constants/Header';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{headerVisible: false}}
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="News"
        component={NewsNavigator}
      />
      <BottomTab.Screen
        name="Albums"
        component={AlbumsNavigator}
      />
    </BottomTab.Navigator>
  );
}

const NewsStack = createStackNavigator<TabOneParamList>();

function NewsNavigator() {
  return (
    <NewsStack.Navigator
      screenOptions={HeaderStyle}>
      <NewsStack.Screen
        name="TabOneScreen"
        component={PostsScreen}
        options={{
          title: 'News list',
        }}
      />
      <NewsStack.Screen
        name="PhotoDetails"
        component={PhotoDetailsScreen}
        options={{
          title: 'News Details',
        }}
      />
    </NewsStack.Navigator>
  );
}

const AlbumsStack = createStackNavigator<TabTwoParamList>();

function AlbumsNavigator() {
  return (
    <AlbumsStack.Navigator
    screenOptions={HeaderStyle}
    >
      <AlbumsStack.Screen
        name="TabTwoScreen"
        component={AlbumsScreen}
        options={{ headerTitle: 'Albums' }}
      />
    </AlbumsStack.Navigator>
  );
}