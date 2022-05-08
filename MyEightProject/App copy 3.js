import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const[count, setCout] = useState(0);
  const onTap = () => setCout(count => count + 1);

  return (
    <View style={styles.container}>
      <Image source={{uri:'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-768x768.jpg'}}
    style={styles.logo}
    />
    <Text style={styles.insts}>
      Press the Button below to select an image on your phone! </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')} >
          
          <Text style={styles.buttonText}> Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    backgroundColor: '#778899',
    padding: 20,
    borderRadius: 5,

  }, 

  insts:{
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,

  },

  logo:{
    width: 310, 
    height: 300,
    marginBottom: 20
  },

  buttonText:{
    fontSize: 20,
    color:"#000000"
  }
});
