import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface News {
  title: String,
  body: String
}

function NewsItem(item: News, onPress) {
  return (
    <View
      style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.subtitle}>
          {item.body}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onPress}
          style={styles.buttonStyle}>
          <Ionicons
            style={{ transform: [{ rotateY: '180deg' }] }}
            name="chevron-back-outline"
            size={20}
            color="#147865" />
        </TouchableOpacity>
      </View>
    </View>)
}

const textStyle = {
  fontSize: 16,
  fontFamily: 'Gilroy-ExtraBold',
  lineHeight: 21,
  marginBottom: 5,
}

const styles = StyleSheet.create(
  {
    title: {
      ...textStyle,
      color: 'black',
    },
    subtitle: {
      ...textStyle,
      color: '#A0ABB2',
      marginBottom: 0
    },
    card: {
      marginHorizontal: 20,
      marginVertical: 5,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      flexDirection: 'row'
    },
    textContainer: {
      backgroundColor: 'white',
      width: '80%',
    },
    actionContainer: {
      width: '20%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    buttonStyle: {
      height: 30,
      width: 30,
      backgroundColor: 'rgba(27, 55, 79, 0.1)',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
)

export default NewsItem;