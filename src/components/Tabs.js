import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import calendar from './Calendar/calendar';
import chatInbox from './Chat/chatInbox';
import chatRoom from './Chat/chatRoom';
import Schedule from './Calendar/Schedule';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

export default function Tabs() {
 
  return (
  
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
    switch(route.name){
        case 'chatInbox':
        iconName = focused ? 'chat': 'chat';
        return  <Entypo  name={iconName} size={size} color={color} />;
        case 'chatRoom':
        iconName = focused ? 'inbox' : 'inbox';
        return  <Entypo  name={iconName} size={size} color={color} />;
        case 'calendar':
        iconName = focused ? 'calendar' : 'calendar';
        return  <Entypo  name={iconName} size={size} color={color} />;
        case 'Schedule':
        iconName = focused ? 'back-in-time' : 'back-in-time';
        return  <Entypo  name={iconName} size={size} color={color} />;
        
    }
       

      },
    })}
    tabBarOptions={{
      activeTintColor: '#4D7CFE',
      inactiveTintColor: 'gray',
    }}
  >
          <Tab.Screen  name="chatInbox" component={chatInbox} />
        <Tab.Screen   name="chatRoom" component={chatRoom} />
        <Tab.Screen   name="calendar" component={calendar} />
        <Tab.Screen  name="Schedule" component={Schedule} />
      </Tab.Navigator>
   
  );
}
