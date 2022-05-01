import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
        onPress={() => {
        alert("You tapped a button");
        }}
        title="Press Button 1"
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton:{
    margin:25,
  },

  containerLayoutButton:{
    margin:20,
    flexDirection: 'row',
    justifyContent:'space-between',
  }
});
