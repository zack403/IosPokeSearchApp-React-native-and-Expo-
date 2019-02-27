import React, { Component } from 'react';

import {View, Image, Text} from "react-native";

class PokeLoader extends Component {
    
    render() { 
        return ( 
            <View style={{flex: 1}}>
            <Image source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}} 
            style={styles.img} />
            </View>
         );
    }
}
 
const styles = {
    img: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default PokeLoader;