import React from 'react';
//thirdPart libraries
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//components
import Main from './src/screens/mainPage';
import Edit from './src/screens/editBlog';
import {BlogProvider} from './src/context';
//
const AppNavigator = createStackNavigator(
  {
    Main,
    Edit,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'green',
    },
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
