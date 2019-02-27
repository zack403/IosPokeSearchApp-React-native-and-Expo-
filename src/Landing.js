import React, { Component } from 'react';
import {View, ImageBackground,Text, Platform} from "react-native";
import {Button} from "native-base";

const myBackground = require("../assets/landing.jpg");


class Landing extends React.Component {

    render() {
      const {toggleScreen} = this.props;
        return (
            <View style={styles.container}>
            <ImageBackground style={styles.viewStyle} source={myBackground}>
            <Text style={styles.titleStyle}>
            Welcome to PokeSearch
            </Text>
            <Button 
            block={true} 
            style={styles.buttonStyle} 
            onPress={() => toggleScreen("search")} >
            <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
            </ImageBackground>
          </View>
        )
    }

}

const styles = {
    container : {
      flex: 1,
      marginTop: Platform.OS === 'android' ? 24 : 0
    },
    viewStyle : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
     titleStyle : {
       color: 'blue',
       fontSize: 30,
       alignItems : 'center'
     },
     buttonStyle: {
       margin : 10,
       
     },
  
     buttonText : {
       color : 'white'
     }
  }

  export default Landing;
