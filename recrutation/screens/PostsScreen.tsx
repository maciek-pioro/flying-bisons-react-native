import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import NewsItem from '../components/NewsItem';
import { backgroundColor } from '../constants/Colors';
import { Post } from '../types';



interface PostItem {
  item: Post
}

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = React.useState(null)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(setPosts)
  }, [])

  return (
    <View style={styles.container}>
      { posts === null ? <ActivityIndicator /> :
        <FlatList
          style={styles.list}
          ListFooterComponent={<View style={styles.padding}></View>}
          data={posts}
          renderItem={({ item }) => NewsItem(item, () => navigation.navigate('PhotoDetails', { itemId: item.id }))}
          keyExtractor={item => `${item.id}`} />
      }
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
    backgroundColor: backgroundColor,
    paddingTop: 30,
    paddingBottom: 100
  },
  padding: {
    height: 50
  }
});
