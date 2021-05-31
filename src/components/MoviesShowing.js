import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import MoviePoster from '../components/Poster/MoviePoster';
import MoviePopup from '../components/Popup/MoviePopup';
import * as actions from '../actions/index'


class MoviesShowing extends Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.getMovies();
    const willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        this.props.refresh();
      }
    );
  }

  state = {
    popupIsOpen: false,
    chosenDay: 0,
    chosenTime: null,
  }
  openMovie = (movie) => {
    this.props.getCinemas();
    this.props.getShowtime(movie);
    console.log(this.props.movieShowtime)
    this.props.navigation.navigate("MovieDetail",{
      movie:movie,
      cinemas: this.props.cinemas
    })
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
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
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      this.closeMovie();
      this.props.navigation.navigate('Confirmation',{
        code: Math.random().toString(36).substring(6).toUpperCase(),
      });
    }
  }

  isMovieShowing = (date) => {
    const now = new Date().setHours(0, 0, 0, 0);
    if (Date.parse(date) <= now) return true;
    else return false;
  };

  render() {
    const { movies, loading, refresh, navigation } = this.props;
    let moviesShowing = movies.filter((item) =>
      this.isMovieShowing(item.releaseDate)
    );
    return (
      <View style={styles.container}>
        {moviesShowing
          ? <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={refresh}
                />
              }
            >
              {moviesShowing.map((movie, index) => <MoviePoster
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
          cinemas = {this.props.cinemas}
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
    cinemas: state.cinemas
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
    getShowtime : (movie) => dispatch({type: 'GET_SHOWTIME_DATA', payload: movie}),
    getCinemas : () => {
      dispatch(actions.actFetchDataCinemasRequest())
    },
    getMovies: () => {
      dispatch(actions.actFetchDataMoviesRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShowing);