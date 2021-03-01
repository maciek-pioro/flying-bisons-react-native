import * as React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';


function Button({ onPress, loading, title }) {
    return <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 10,
        backgroundColor: '#466BC9', 
        borderRadius: 10, 
        height: 48, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 20
      }}>
      {loading ? <ActivityIndicator color='white'/> :
        <Text style={{color: 'white'}}>
            {title}
      </Text>
      }
    </TouchableOpacity>
  }

  export default Button;