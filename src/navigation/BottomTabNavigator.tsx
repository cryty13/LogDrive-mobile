import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import Screen2 from '../screens/teste/Screen2';
import Screen3 from '../screens/teste/Screen3';
import Screen4 from '../screens/teste/Screen4';
import HistoryScreen from '../screens/History/History';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
    
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Historico':
              iconName = 'list-outline';
              break;
            case 'Screen2':
              iconName = 'settings-outline';
              break;
            case 'Screen3':
              iconName = 'person-outline';
              break;
            case 'Screen4':
              iconName = 'information-circle-outline';
              break;
            default:
              iconName = 'ellipse-outline';
              break;
          }
    
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Historico" component={HistoryScreen} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;