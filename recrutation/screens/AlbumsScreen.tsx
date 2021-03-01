import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import AlbumItem from '../components/AlbumItem';
import {backgroundColor} from '../constants/Colors';

export default function AlbumsScreen() {
  const [albums, setAlbums] = React.useState(null)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(setAlbums)
  }, [])

  return (
    <View style={styles.container}>
      {albums === null ? <ActivityIndicator /> :
        <FlatList
          ListHeaderComponent={ <View style={styles.padding}/>}
          numColumns={2}
          style={styles.list}
          data={albums}
          renderItem={AlbumItem}
          keyExtractor={item => `${item.id}`} />}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: backgroundColor, 
    paddingHorizontal: 10
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
  padding: {
    height: 30
  }
});
