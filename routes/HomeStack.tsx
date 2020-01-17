import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ActivityDetails from '../screens/ActivityDetails';
import AddActivity from '../screens/AddActivity';
import React from 'react';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='GoalTracker' navigation={navigation} />
            }
        },
    },
    ActivityDetails: {
        screen: ActivityDetails,
        navigationOptions: {
            title: 'Activity Details',
        }
    },
    AddActivity: {
        screen: AddActivity,
        navigationOptions: {
            title: 'Add New Activity',
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 60 },
    }
  });

export default HomeStack;