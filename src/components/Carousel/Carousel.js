import * as React from 'react';
import {
  Text, 
  View,
  Image,
  SafeAreaView, StyleSheet, Platform } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { ParallaxImage } from 'react-native-snap-carousel';

import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          entries : [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    thumbnail: 'https://mb.cision.com/Public/14247/2902071/856b720fb81856ec_org.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    thumbnail: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/07/hpphilosopherquadlarge1-482x360.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    thumbnail: 'https://static.mservice.io/blogscontents/momo-upload-api-210312150001-637511580015634364.jpg',
  }]
      }
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    render() {
        return (
          <View style={{ marginBottom:20}} >
            <Carousel
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 20}
              data={this.state.entries}
              renderItem={this._renderItem}
              hasParallaxImages={true}
          />
          </View>
          
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
