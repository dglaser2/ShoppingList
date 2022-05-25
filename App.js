import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: '1234-abc-3574', text: 'Milk' },
    { id: '1234-def-3575', text: 'Eggs' },
    { id: '1234-ghi-3576', text: 'Bread' },
    { id: '1234-jkl-3577', text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' })
    } else {
      setItems(prevItems => {
        return [{ id: (Math.floor(Math.random() * 1000)), text }, ...prevItems];  // ... is "spread operator" which takes everything within items
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item}
            deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,  // to set padding for content to display below iPhone notch
  },
});

export default App;












// import {View, Text, Image, StyleSheet} from 'react-native';

// const App = () => { 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//       <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.img} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center'
//   },
//   text: { 
//     color: 'darkslateblue', 
//     fontSize: 30 
//   },
//   img: {
//     width: 100, 
//     height: 100,
//     borderRadius: 100 / 2, 

//   }
// })