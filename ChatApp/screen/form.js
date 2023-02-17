import {
    StyleSheet,
    View,
    Text,
    TextInput,
  } from 'react-native';
  import React, { useState } from 'react';
import Card from '../component/card';
  const Form = () =>{
    const [channelTitle, setChannelTitle] = useState('')
    const [channelType, setChannelType] = useState('')
    return(
<Card>
<Text style ={styles.title}>Create a channel</Text>
<Text>Channel title</Text>
<TextInput
        style={styles.input}
        onChangeText={setChannelTitle}
        value={channelTitle}
        placeholder="set the channel title"
      
      />
      <Text>Channel type</Text>
      <TextInput
        style={styles.input}
        onChangeText={setChannelType}
        value={channelTitle}
        placeholder="set the channel type"
      
      />
</Card>
    )
  }
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title :{
    textAlign : "center",
    fontSize : 20,
    color : "#0E30CE",
  }
})
  export default Form