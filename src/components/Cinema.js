import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : [
                {
                    name: "Galaxy Cinema",
                    addr: "60 Nguyến Tất Thành, Đà Nẵng",
                    thumbnail: "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-nvq-02_1557131228718.jpg"
                },
                {
                    name: "Cinema 1",
                    addr: "60 Nguyến Tất Thành, Đà Nẵng",
                    thumbnail: "https://s3img.vcdn.vn/123phim/2018/09/galaxy-vinh-15381284927851.jpg"
                },
                {
                    name: "Cinema 2",
                    addr: "60 Nguyến Tất Thành, Đà Nẵng",
                    thumbnail: "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-pvc-02_1557133353602.jpg"
                }
            ]
        }
    }
    renderCinema(list){
        const rs = list.map(item => {
            return (
                <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: item.thumbnail }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>{item.addr}</Text>
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
        return rs;
    }
  render() {
    
    return (
      <Container>
        <Content>
          <List style={styles.container}>
            {this.renderCinema(this.state.list)}
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
  