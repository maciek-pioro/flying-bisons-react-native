import React from 'react';
import BackButton from '../components/BackButton';

// interface HeaderStyleInterface {
//     headerShown: boolean,
//     headerStyle: object,
//     headerTitleStyle: object,
// }

const HeaderStyle = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: 'white',
        height: 150,
        elevation: 0
    },
    headerTitleStyle: {
        width: '100%',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Gilroy-ExtraBold'
    },
    headerLeft: ({ onPress }) => (
        onPress ? <BackButton onPress={onPress} /> : null
    )
}

export default HeaderStyle;