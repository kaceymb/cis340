import React from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

 const csuLogo ={
   uri:"https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png", 
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.Image}>

      <Text style={styles.text}>CSU Logo </Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  Image:{
    flex: 1,
    resizeMode : 'cover',
    justifyContent: 'center'
  }, 

 text:{
  color: 'red',
  fontSize: 40, 
  fontweight: 'bold'
 }, 
 
});

