import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { styles } from '../config/styles';
<config></config>

export default function NewsScreen() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=business&apiKey=2a7edd4c76da4d3593cccdd8ac945669') 
        .then(response => response.json()) 
        .then(data => setNews(data.articles)) 
        .catch(error => console.error(error)); 
    }, []);

    return (
        <SafeAreaView style={styles.container}> 
        <ScrollView style={styles.scroll}>
        {news.map((item, index) => (
            <View key={index} style={styles.noticia}> 
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.conteudo}>{item.description}</Text> 
            </View>
        ))}
        </ScrollView>
        </SafeAreaView> 
    ); 
    }
    