import React, { Component } from 'react';
import {View, ImageBackground, Text} from "react-native";
import {Form, Input, Label, Button, Item} from "native-base";

class Login extends Component {
    state = { 
        email: "", 
        password: ""
     }
    render() { 
        return (  
            <View style={{flex: 1}}>
            <ImageBackground source={} style={}>
                <view style={styles.inputStyle}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                            style={}
                            autoCorrect={false}
                            onChangeText={email => this.setState({email})}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                            secureTextEntry
                            style={}
                            autoCorrect={false}
                            onChangeText={password => this.setState({password})}
                            />
                        </Item>
                    </Form>
                    <View>
                        <Button
                        primary
                        block
                        onPress={}
                        >
                        <Text>Sign/SignUp</Text>
                        </Button>
                    </View>
                </view>
            </ImageBackground>
            </View>
        );
    }
}
 
const styles = {
    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    }
}

export default Login;