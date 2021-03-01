import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Post({ post }) {
    return (<View style={styles.post}>
        <Text style={styles.title}>
            {post === null ? 'Loading' : post.title}
        </Text>
        <Text style={styles.body}>
            {post === null ? 'Loading' : post.body}
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    post: {
        marginTop: 30,
        marginBottom: 30,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20,
        paddingVertical: 30
    },
    title: {
        color: 'black',
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 22,
        letterSpacing: -0.4
    },
    body: {
        color: 'black',
        fontFamily: 'Gilroy-Light',
        fontSize: 16,
        lineHeight: 22
    }

})

export default Post;