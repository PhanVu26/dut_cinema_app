import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Movies from '../components/Movies';
import * as actions from '../actions/index'

export default function HomePage(props) {
    // const dispatch = useDispatch();
    // const movies = useSelector(state => state.movies)
    // useEffect(() => {
    //     dispatch(actions.actFetchDataMoviesRequest())
    //     console.log("movie: ", movies)
    // }, [])
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <View style={{ flex: 2}} >
                <Carousel></Carousel>
            </View>
            <View style={{ flex: 5, backgroundColor:333 }} >
                <Text>In comming</Text>
                <Movies navigation={props.navigation}></Movies>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});