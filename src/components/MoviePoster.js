
import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3;
const rows = 3;

export default class MoviePoster extends Component {
  // Component prop types
  // static propTypes = {
  //   // Movie obj with title, country, and poster
  //   movie: PropTypes.object.isRequired,
  //   // Called when user taps on a poster
  //   onOpen: PropTypes.func.isRequired
  // }

  render() {
    const { movie, movie: { name, country, duration }, onOpen } = this.props;
    const poster = "https://th.bing.com/th/id/R9d00690a9f0f98794933edcfd7567444?rik=8htbu1GVX%2bQ7gw&pid=ImgRaw";
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.country} numberOfLines={1}>{country}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height + 10) / rows + 10,
    width: (width + 50) / cols + 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  name: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  country: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});
