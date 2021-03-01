import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
        />
      ) : (
          null)}
      <Appbar.Content
        title={
          previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        }
      />
    </Appbar.Header>
  );
};

export default Header;