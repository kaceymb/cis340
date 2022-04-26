import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}> 
     <View style={{flex: 1, background:'red'}}/>
     <View style={{flex: 1, background:'yellow'}}/>
     <View style={{flex: 1, background:'blue'}}/>
     </View>
  
  );
}


