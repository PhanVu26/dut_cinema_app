import React from "react";
import { View, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet, Text } from "react-native";

import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Animated from "react-native-reanimated";
const colorDefault = 'rgba(255, 255, 255, 1)',  // white
  colorSelected = 'rgba(103,58,183, 1)';        // purple
const Carousel = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity
            // activeOpacity={1}
            // onPress={onChoose}
        >
            <Animated.View
            style={[styles.container, { backgroundColor: 444 }]}
            >
            <Text style={{ color:colorSelected }}>
                {1223}
            </Text>
            </Animated.View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
export default Carousel;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderColor: colorSelected,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor:333,
      padding: 10,
      marginRight: 10,
    },
    text: {
    }
  });