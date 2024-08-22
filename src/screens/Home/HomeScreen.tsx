import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const HomeScreen: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { logout } = authContext;

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;