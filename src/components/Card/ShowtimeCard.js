
import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'

   
export default MovieCard = (props) =>{
    const {movie, cinemas} = props;
    const showLists = (lists) => {
        const rs = lists.map(l => {
            return l.name
        })
        return rs.toString();
    }
    const showCinemas = (cinemas) =>{
        const rs = cinemas.map(cinema => {
            return(
                <Card>
                    <Card.Title>{cinema.name}</Card.Title>
                    <Card.Divider/>
                    <View style={[styles.container, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row",
                        }]}>
                        <View style={{ flex: 1 }} >
                            <Button
                                title="10:20"
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft:10}} >
                            <Button
                                title="10:20"
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft:10 }} >
                            <Button
                                title="10:20"
                            />
                        </View>
                        
                        </View>
                    {/* <Button
                        title="10:20"
                        style={{marginTop : 10}}
                    />
                     <Button
                        title="10:20"
                        style={{marginTop : 10}}
                    />
                     <Button
                        title="10:20"
                        style={{marginTop : 10}}
                    />
                     <Button
                        title="10:20"
                        style={{marginTop : 10}}
                    />

                    <Text style={{marginTop: 10}}>
                    {"Mô tả phim: " + cinema.address}
                    </Text> */}
                </Card>
            )
        })
        return rs;
    }
return(
    <ScrollView>
    {showCinemas(cinemas)}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexWrap: "wrap",
      justifyContent:"space-between"
    },
  });
// implemented without image with header
