import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Profile(props) {
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
              <Text>sadasd</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});