import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const initialCount = 0;
  const [count,setCount]=useState(initialCount);
  const [name,setName]=useState({firstName:'',lastName:''})
  const[items,setItems]=useState([]);
  const addItem=()=>{
    setItems([...items,{
      id:items.length,
      value:Math.floor(Math.random() *10 )+1
    }])
  }
  return (
    <View style={styles.container}>
    <Text>Count:{count}</Text>
    <Button onPress={()=>setCount(count+1)}
    title='Increment'
    >
    </Button>
    <Button onPress={()=>setCount(count-1)}
    title='Decrement'
    >
    </Button>
    <Button onPress={()=>{setCount(initialCount)}}
    title='Reset'
    >
    </Button>
    <TextInput
    placeholder='First Name'
      type='text'
      value={name.firstName}
      onChangeText={(text)=>setName({...name,firstName:text})}
    />
    <TextInput
    placeholder='Last Name'
      type='text'
      value={name.lastName}
      onChangeText={(text)=>setName({...name,lastName:text})}
    />
    <Text>FirstName:{name.firstName}</Text>
    <Text>LastName:{name.lastName}</Text>
    {/* <Text>{JSON.stringify(name)}</Text> */}
    <Button 
    title='Add Items'
    onPress={addItem}
    />
    <View>
      {items.map(item=>(
        <Text>{item.value}</Text>
      ))}
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
