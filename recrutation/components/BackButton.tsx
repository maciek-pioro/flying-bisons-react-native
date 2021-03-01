import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

function BackButton({ onPress }) {
  return (<TouchableOpacity
    style={{
      borderWidth: StyleSheet.hairlineWidth,
      width: 40, height: 40, borderRadius: 20, margin: 30, borderColor: '#F0F2F5',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={onPress}>
    <Ionicons name="chevron-back-outline" size={30} color="#147865"></Ionicons>
  </TouchableOpacity>)
}

export default BackButton;