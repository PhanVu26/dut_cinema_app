import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import ShowtimeCard from '../Card/ShowtimeCard';

import { defaultStyles } from '../styles';
import ShowtimeBlock from "./ShowtimeBlock"

class Showtime extends Component {
  constructor(props){
    super(props)
  }

  render() {
      const days = ["Cinema 1","Cinema 2"]; 
      const times = ["10:22","20:00", "21:00"]; 
    const {movie, cinemas} = this.props.route.params;
    return (
      // <View>
      //       {/* Showduration */}
      //       <View>
      //         {/* Day */}
      //         <Text style={styles.sectionHeader}>Cinema</Text>
      //         <ShowtimeBlock
      //           values = {days}
      //           // chosen = {chosenDay}
      //           // onChoose = {onChooseDay}
      //         />
      //         {/* Time */}
      //         <Text style={styles.sectionHeader}>Showtime</Text>
      //         <ShowtimeBlock
      //           values = {times}
      //           // chosen = {chosenTime}
      //           // onChoose = {onChooseTime}
      //         />
      //       </View>

      //     {/* Book ticket */}
      //     <View style={styles.footer}>
      //       <TouchableHighlight
      //         underlayColor="#9575CD"
      //         style={styles.buttonContainer}
      //       //   onPress={onBook}
      //       >
      //         <Text style={styles.button}>Book My Tickets</Text>
      //       </TouchableHighlight>
      //     </View>
      //   </View>
      <View>
        <ShowtimeCard movie={movie} cinemas={cinemas}></ShowtimeCard>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showtime);

const styles = StyleSheet.create({
  // Main container
  container: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    justifyContent: 'flex-end',         // align popup at the bottom
    backgroundColor: 'transparent',     // transparent background
  },
  // Semi-transparent background below popup
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
  },
  // Popup
  modal: {
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  // Movie container
  movieContainer: {
    flex: 1,                            // take up all available space
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,                            // take up all available space
  },
  image: {
    borderRadius: 10,                   // rounded corners
    ...StyleSheet.absoluteFillObject,   // fill up all space in a container
  },
  movieInfo: {
    backgroundColor: 'transparent',     // looks nicier when switching to/from expanded mode
  },
  name: {
    ...defaultStyles.text,
    fontSize: 20,
  },
  country: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 14,
  },
  sectionHeader: {
    marginTop:10,
    ...defaultStyles.text,
    color: '#AAAAAA',
  },
  // Footer
  footer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#673AB7',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  button: {
    ...defaultStyles.text,
    color: '#FFFFFF',
    fontSize: 18,
  },
});
