import React, { Component } from 'react';
import {View, Text} from "react-native";
import {Header, Item, Icon, Input, Button} from "native-base";
import axios from "axios";
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';

class Search extends Component {

    state = {
        pokeSearch: "",
        onCall: "true",
        data: {}
    }

    searchPoke = async () => {
        this.setState({onCall : true});
        try {
            const {data} = await axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
            this.setState({data : data});
            this.setState({onCall: false});
        } catch (error) {
            console.log(error);
        }
       
    }

    renderBody = () => {
        if(this.state.onCall){
            return(
                <PokeLoader />
            )
        }
        else {
            return (
                <SearchBody data={this.state.data} />
            )
        }
    }

    render() { 
        return ( 
            <View style={{flex: 1}}>
            <Header searchBar={true} rounded>
            <Item>
                <Icon name="ios-search" onPress={this.searchPoke} />
                <Input placeholder="Search Pokemon" 
            value={this.state.pokeSearch} 
            onChangeText={pokeSearch => this.setState({pokeSearch})} />
            </Item>
            </Header>
            {this.renderBody()}
            </View>
         );
    }
}
 

const styles = {
    searchStyle : {

    }
}

export default Search;