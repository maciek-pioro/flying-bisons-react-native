import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import Button from '../components/Button';
import CommentItem from '../components/CommentItem';
import Post from '../components/Post';
import { backgroundColor } from '../constants/Colors';

export default function PhotoDetailsScreen({ route }) {
  const { itemId } = route.params;
  const [comments, setComments] = React.useState(null)
  const [comment, setComment] = React.useState('')
  const [post, setPost] = React.useState(null)
  const [sendingComment, setSendingComment] = React.useState(false)

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
      .then(response => response.json())
      .then(setComments)
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then(response => response.json())
      .then(setPost)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Post
              post={post} />
            <Text style={styles.sectionTitle}>
              Comments
            </Text>
            <TextInput
              style={styles.textInput}
              multiline
              editable
              placeholder={"Here you can add your comment..."}
              numberOfLines={5}
              defaultValue={comment}
              onChangeText={(text) => setComment(text)}>
            </TextInput>
            <Button
              title="Add"
              loading={sendingComment}
              onPress={() => {
                setSendingComment(true)
                fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`, {
                  method: 'POST',
                  body: JSON.stringify({
                    postId: itemId,
                    body: comment,
                    userId: 1,
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                })
                  .then((response) => {
                    if (response.status !== 201)
                      throw Error("Unexpected response from the server");
                    return response.json()
                  })
                  .then((json) => setComments([{ ...json, email: 'You' }, ...comments]))
                  .then(() => setComment(''))
                  .then(() => setSendingComment(false))

              }}
            />
          </>
        }
        ListEmptyComponent={
          comments === null ?
            <ActivityIndicator /> :
            <Text>
              No comments yet
          </Text>
        }
        style={styles.list}
        data={comments}
        renderItem={({ item }) => <CommentItem item={item} />}
        keyExtractor={item => `${item.id}`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  list: {
    width: '100%',
    backgroundColor: backgroundColor
  },
  sectionTitle: {
    color: '#586976',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
    marginLeft: 20
  },
  textInput: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    textAlignVertical: 'top',
    padding: 10,
    fontFamily: 'Gilroy-Light',
    fontSize: 16
  }
});
