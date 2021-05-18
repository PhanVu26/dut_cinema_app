import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import Carousel from '../components/Carousel';
import Movies from '../components/Movies';

export default function HomePage() {
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1}} >
                <Carousel></Carousel>
            </View>
            <View style={{ flex: 3 }} >
                <Text>In comming</Text>
                <Movies></Movies>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});