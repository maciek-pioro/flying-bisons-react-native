import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { accentColor } from '../constants/Colors';

function Separator() {
  return <View
    style={{
      borderColor: 'rgba(0,0,0,0.1)',
      borderWidth: StyleSheet.hairlineWidth,
      alignSelf: 'center',
      height: 30
    }} />
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'white', height: 60, borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#F0F2F5' }}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <React.Fragment
            key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: accentColor,
                borderBottomWidth: isFocused ? 2 : 0
              }}
            >
              <Text style={{
                color: isFocused ? accentColor : '#222',
                fontWeight: isFocused ? '700' : '600'
              }}>
                {label}
              </Text>
            </TouchableOpacity>
            { index !== state.routes.length - 1 ?
              <Separator /> : null
            }
          </React.Fragment>
        );
      })}
    </View>
  );
}

export default MyTabBar;