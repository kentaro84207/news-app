import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from './components/ListItem'
import articles from './dummies/articles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author}
            imageUrl={item.urlToImage}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}
