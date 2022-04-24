import React from 'react';
import {Text , View, Image } from 'react-native';

export default function MyDog() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'    
    }}>
    <Image></Image> source="https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png">
      style={{width: 200, height: 200}}
    <Image/>
    <Text> Hello , this is my dog</Text>
    </View>
  );
}

