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
        // // const cinemaId = this.props.navigation.getParams('id');
        // console.log(typeof id)
        // console.log("cinema id", id)
        this.props.getListMovies(id);
        // this.setState(prevState => ({
        //     movies: [...prevState.movies, this.props.movieShowtime.movies]
        // }))
    }
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
                  <Button transparent
                    //onPress = {()=> {this.props.navigation.navigate('ListMovie')}}
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
    console.log("qwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", cinemaShowtime)
    //const movies = this.state.movies;
    //console.log("movies in nnnnnnnnnnnnnnnnnnn", movies)
    return (
      <ScrollView>  
      <Container>
        <Content>
          <List style={styles.container}>
            {this.renderCinema(cinemaShowtime)}
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
  