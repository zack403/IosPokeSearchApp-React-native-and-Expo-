import React, { Component } from 'react';
import {ScrollView, Image, ImageBackground, View, Dimensions, Text} from "react-native";
import { ListItem, List } from 'native-base';

const pic = require("../assets/raids_loading.png");
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
// https://pokemongolive.com/img/posts/raids_loading.png

class SearchBody extends Component {
    
    render() { 
        const {data} = this.props;
        if(!data) return <View />

        return ( 
            <ImageBackground source={pic} style={styles.backgroundImage}>
               <ScrollView style={{flex: 1}}>
                <Text style={styles.header}>#{data.id} - {data.name}</Text>
                <View style={styles.viewStyle}>
                    <Image 
                    source={{uri: data.sprites.front_default}}
                    style={styles.img}
                    />
                </View>
                <View style={styles.info}>
                <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}} >Size</Text>
                </ListItem>
                <ListItem >
                    <Text>Weight - {data.weight}kg</Text>
                </ListItem>
                <ListItem>
                    <Text>Height - {data.height/10}m</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}} >Abilities</Text>
                </ListItem>
                <List
                dataArray={data.abilities}
                renderRow={item => 
                <ListItem>
                    <Text>{item.ability.name}</Text>
                </ListItem>
                }
                >
                </List>
                </View>
            </ScrollView>
            </ImageBackground>
         );
    }
}
 
const styles = {
    backgroundImage : {
        flex: 1,
        reSizeMode: 'cover',
        height: height,
        width : width
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign : 'center'
    },
    viewStyle : {
        justifyContent : 'center',
        alignItems: 'center',
        flex: 1
    },
    img : {
        height : 200,
        width: 200,
        justifyContent : 'center',
        alignItems: 'center'
    },
    info : {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}

export default SearchBody;