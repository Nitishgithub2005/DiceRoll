import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function App () {
  const [showResult,setShowResult] = useState(false)
  const [result,setResult] = useState(1)
  const rollTheDice =() => {
    let number= Math.floor(Math.random() * (6-1+1)+1);
    setResult(number)
    setShowResult(true)
  }
  return (
    <SafeAreaView  style={styles.container}>
    <View>
      <Text style={styles.resultText}>Dice</Text>
      <TouchableOpacity
      onPress={rollTheDice}
      >
        <Text style={styles.rollBtn}>Roll</Text>
      </TouchableOpacity>
      {showResult && 
      <Text style={styles.resultText}>{result}</Text>
      }
    </View>
    </SafeAreaView>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    color:"#ffffff"
  },
  resultText:{
    color :"#ffffff",
    fontSize:23
  },
  rollBtn:{
    backgroundColor:"#cdcbcbff",
    color :"#ffffff",
    fontSize:23,
    margin:20,
    padding:10,
    borderRadius:8
  }
})