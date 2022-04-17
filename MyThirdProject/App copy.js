import React from 'react';
import {Text , Image, View } from 'react-native';

export default function MyDog() {
  return (
    <View >
    <Image source="https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png">
      style={{width: 200, height: 200}}
    </Image>
    <Text> Hello , this is my dog</Text>
    </View>
  );
}

