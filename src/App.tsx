// import { View, Text ,Pressable,StyleSheet,Image} from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// function App () {
//   const [result,setResult] = useState(1)
//   const rollTheDice =() => {
//     let number= Math.floor(Math.random() * (6)+1);
//     setResult(number)
//   }
//   const diceImages : Record<number,any> ={
//     1: require('../assets/One.png'),
//     2: require('../assets/Two.png'),
//     3: require('../assets/Three.png'),
//     4: require('../assets/Four.png'),
//     5: require('../assets/Five.png'),
//     6: require('../assets/Six.png'),
//   }
//   return (
//     <SafeAreaView  style={styles.container}>
//     <View>
//       <Image 
//           source={diceImages[result]}
//           style={styles.diceImage}
//       />
//       <Pressable
//       onPress={rollTheDice}
//       style={styles.rollBtn}
//       >
//         <Text style={styles.rollText}>Roll The Dice</Text>
//       </Pressable>
//     </View>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"space-around",
//     alignItems:"center",
//     color:"#ffffff"
//   },
//   rollText:{
//     color :"#0b0909ff",
//     fontSize:23,
//     margin:15,
//     fontWeight:'bold'
//   },
//   rollBtn:{
//     backgroundColor:"#7a76cfff",
//     borderRadius:8,
//     justifyContent:'center',
//     alignItems:'center',
//     borderColor:"#000000ff",
//     borderWidth:2
//   },
//   diceImage:{
//     height:200,
//     width:200,
//     margin:20,
//     padding:10,
//   }
// })



import React, {useState} from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  Vibration
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true
};

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
        Vibration.vibrate(100); // vibrate for 100ms
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;