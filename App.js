import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from './components/ListItem'
import dummyArticles from './dummies/articles'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default function App() {
  const [articles, setArticles] = useState(dummyArticles)
  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error)
    }
  }
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
