import React,{ Component } from "react";
import { ScrollView, View, StyleSheet} from 'react-native';
import {Button,Text} from 'native-base';
import { Card } from 'react-native-elements'

class MovieShowtime extends Component{
    constructor(props) {
        super(props);
        const {movie} = this.props.route.params;
        console.log("movieshowtime", movie)
        let showtimes = movie.showtimes.filter((item) =>
          this.isShowing(item.startTime.split("T")[0])
        );
        var TOS = [];
        var dates =[];
        showtimes.map((item,index) => {
          TOS.push(item.startTime.split("T")[0]);
        });
        var TiOfS =[];
        TOS.map((item,index)=>{
          var ShowTimes =[];
          showtimes.map((i,index) => {
            if(i.startTime.split("T")[0]==item){
              var O={
                id: i.id,
                time: i.startTime.split("T")[1].slice(0,5),
              }
              ShowTimes.push(O);
            }
          });
          var obj = {
            dateMovie: item,
            showtimes: ShowTimes,
          }
          if(!dates.includes(item)){
            console.log("a")
            TiOfS.push(obj)
            dates.push(item)
          }
        });
        let TimeOfShowtime = Array.from(new Set(TiOfS));
        console.log(TimeOfShowtime)
        this.state = {
            timeOfMovie: TimeOfShowtime
        };
    }
    showtime = (showtimes) =>{
        return showtimes.map((item,index) =>{
            return(
            <View style={{ flex: 1, marginLeft: index===0 ? 0 : 10 }} >
                <Button
                    onPress = {()=> {this.props.navigation.navigate('SeatPicker',{
                      showtimeId: item.id, cinema: this.props.route.params.cinema
                    })}}
                   ><Text>{item.time}</Text></Button>
            </View>)
        })
    }
    showdate = () =>{
        return this.state.timeOfMovie.map(item => {
            return(
                <Card>
                    <Card.Title>{item.dateMovie}</Card.Title>
                    <Card.Divider/>
                    <View style={[styles.container, { flexDirection: "row"}]}>
                        {this.showtime(item.showtimes)}
                    </View>
                </Card>
            )
        })
    };

    isShowing = (date) => {
      const now = new Date().setHours(0, 0, 0, 0);
      if (Date.parse(date) >= now) return true;
      else return false;
    };
    
    render() {
        return (
            <ScrollView>
                {this.showdate()}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexWrap: "wrap",
      justifyContent:"space-between"
    },
  });
export default MovieShowtime