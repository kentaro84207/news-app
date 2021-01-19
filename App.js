import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ListItem from './components/ListItem'
import articles from './dummies/articles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        title={article.title}
        author={article.author}
        imageUrl={article.urlToImage}
        key={index}
      />
    )
  })
  return <View style={styles.container}>{items}</View>
}
