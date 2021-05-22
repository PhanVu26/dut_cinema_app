import React, { Component } from 'react';
import { connect } from "react-redux";
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
class Cinema extends Component {
    constructor(props){
        super(props)
        this.state = {
            // list : [
            //     {
            //         name: "Galaxy Cinema",
            //         addr: "60 Nguyến Tất Thành, Đà Nẵng",
            //         thumbnail: "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-nvq-02_1557131228718.jpg"
            //     },
            //     {
            //         name: "Cinema 1",
            //         addr: "60 Nguyến Tất Thành, Đà Nẵng",
            //         thumbnail: "https://s3img.vcdn.vn/123phim/2018/09/galaxy-vinh-15381284927851.jpg"
            //     },
            //     {
            //         name: "Cinema 2",
            //         addr: "60 Nguyến Tất Thành, Đà Nẵng",
            //         thumbnail: "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-pvc-02_1557133353602.jpg"
            //     }
            // ]
        }
    }
    componentDidMount() {
      // this.props.fetchTheaterData();
      // console.log("theater 30",this.props.theater);
      
    }
    renderCinema(list){
      let rs = list===undefined?[]: list;
      const res = rs.map(item => {
            return (
                <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-nvq-02_1557131228718.jpg" }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>{item.address}</Text>
                </Body>
                <Right>
                  <Button transparent
                    onPress = {()=> {this.props.navigation.navigate('BookTicket')}}
                   >
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem> 
            )
        })
        return res;
    }
  render() {

    const { theater } = this.props;
    console.log("theater a", theater)
    console.log("theater dsdfsd",theater);
    return (
      <Container>
        <Content>
          <List style={styles.container}>
            {this.renderCinema(theater)}
          </List>
        </Content>
      </Container>
    );

  }
}

const styles = StyleSheet.create({
    container: {
      marginTop:0
    },
  });

const mapStateToProps = (state) => {
  console.log("state zxcvzxvc",state)
  return {
    theater: state.theater
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    fetchTheaterData : () => dispatch({type: 'GET_THEATER_DATA'})
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);