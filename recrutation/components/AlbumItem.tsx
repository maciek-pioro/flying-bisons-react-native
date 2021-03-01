
import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Album } from '../types';


interface AlbumItemArgs {
    item: Album
}

function AlbumItem({ item }: AlbumItem) {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                style={styles.card}
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: item.thumbnailUrl }}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: 'black',
        lineHeight: 21,
        textAlign: 'center',
        fontFamily: 'Gilroy-ExtraBold'
    },
    cardContainer: {
        width: '50%',
        height: 150,
        marginBottom: 10,
        backgroundColor: '#0000',
    },
    card: {
        borderRadius: 10,
        margin: 5,
        height: '100%',
        justifyContent: 'flex-end',
    },
    textContainer: {
        backgroundColor: 'white',
        position: 'relative',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '40%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default AlbumItem;