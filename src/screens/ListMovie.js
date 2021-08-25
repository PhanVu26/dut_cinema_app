import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import * as actions from '../actions/index';
class ListMovie extends Component {
    constructor(props){
      
        super(props)
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        const {id} = this.props.route.params;
        this.props.getListMovies(id);
    }
    
    isMovieShowing = (date) => {
      const now = new Date().setHours(0, 0, 0, 0);
      if (Date.parse(date) < now) return true;
      else return false;
    };

    renderCinema(list){
        const rs = list?.map(item => {
            return (
                <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-pvc-02_1557133353602.jpg' }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>{item.producer}</Text>
                </Body>
                <Right>
                  <Button
                    onPress = {()=> {this.props.navigation.navigate('MovieShowtime',{
                      movie: item, cinema: this.props.route.params.cinema
                    })}}
                   >
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem> 
            )
        })
        return rs;
    }
  render() {
    const cinemas = this.props.cinemas;
    const {cinemaShowtime} = this.props;
    let movieShowing = cinemaShowtime.filter((item) =>
      this.isMovieShowing(item.releaseDate)
    );
    return (
      <ScrollView>  
      <Container>
        <Content>
          <List style={styles.container}>
            {this.renderCinema(movieShowing)}
          </List>
        </Content>
      </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop:0
    },
  });

  const mapStateToProps = (state) => {
    return {
        cinemas: state.cinemas,
        cinemaShowtime: state.cinemaShowtime
    }
  }
  
  const mapDispatchToProps = (dispatch, props) =>{
    return {
        getListMovies : (id) => {
        dispatch(actions.actFetchCinemaShowtimesRequest(id))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);  
  