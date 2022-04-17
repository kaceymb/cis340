import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

function getFullName(fName, mName, LName){
  return fName + " " + mName + " " + LName;
}
const pet = "Dog";
  return (
      <Text> 
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340!("\n")
        My full name is {getFullName("Kacey", "Mae", "Murphy-Brandt")} ("\n")
        I have a {pet}
      </Text>
      
      
  );
}

