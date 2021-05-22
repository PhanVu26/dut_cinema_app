import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import Confirmation from './Confirmation';

// @connect(
//   state => ({
//     movies: state.movies,
//     loading: state.loading,
//     movieShowtime: state.movieShowtime
//   }),
//   dispatch => ({
//     refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
//     getShowtime : () => dispatch({type: 'GET_SHOWTIME_DATA', payload: movie})
//   }),
// )
class Movies extends Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.refresh();
    this.props.fetchTheaterData();
    const willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        this.props.refresh();
      }
    );
  }

  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
  }
  openMovie = async (movie) => {
    await this.props.getShowtime(movie);
    //console.log(this.props.movieShowtime)
    //this.props.navigation.navigate("MovieDetail")
    this.setState({
      popupIsOpen: true,
      movieShowtime: this.props.movieShowtime,
      movie
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
      // Reset values to default ones
      chosenDay: 0,
      chosenTime: null,
    });
    this.props.refresh()
  }

  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (time) => {
    this.setState({
      chosenTime: time,
    });
  }

  bookTicket = () => {
    // Make sure they selected time
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      // Close popup
      this.closeMovie();
      //Navigate away to Confirmation route
      this.props.navigation.navigate('Confirmation',{
        // Generate random string
        code: Math.random().toString(36).substring(6).toUpperCase(),
      });
    }
  }

  render() {
    const { movies, loading, refresh, navigation } = this.props;
    // console.log("movie hhhh", movies)
    // console.log("showtime hhhh", this.props.movieShowtime )
    return (
      <View style={styles.container}>
        {movies
          ? <ScrollView
              contentContainerStyle={styles.scrollContent}
              // Hide all scroll indicators
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={refresh}
                />
              }
            >
              {movies.map((movie, index) => <MoviePoster
                movie={movie}
                navigation = {navigation}
                onOpen={this.openMovie}
                key={index}
              />)}
            </ScrollView>
          : <ActivityIndicator
              animating={loading}
              style={styles.loader}
              size="large"
            />
        }
        <MoviePopup
          movieShowtime = {this.props.movieShowtime}
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookTicket}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // take up all screen
    paddingTop: 20,         // start below status bar
  },
  loader: {
    flex: 1,
    alignItems: 'center',     // center horizontally
    justifyContent: 'center', // center vertically
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.loading,
    movieShowtime: state.movieShowtime,
    theater: state.theater
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
    getShowtime : (movie) => dispatch({type: 'GET_SHOWTIME_DATA', payload: movie}),
    fetchTheaterData : () => dispatch({type: 'GET_THEATER_DATA'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);