import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {backgroundColor} from '../constants/Colors';

function CommentItem({item}) {
  return (
    <View
      style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.user}>
          {item.email}
        </Text>
        <Text style={styles.text}>
          {item.body.replace('\n', ' ')}
        </Text>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  card: {
    margin: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row'
  },
  user: {
    color: 'black',
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 21,
    letterSpacing: 0.2,
    fontFamily: 'Gilroy-ExtraBold'
  },
  textContainer: {
    backgroundColor: 'white',
    width: '100%'
  },
  text: {
    color: 'black',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.25,
    fontFamily: 'Gilroy-Light',
  },
});

export default CommentItem;