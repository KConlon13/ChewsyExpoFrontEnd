import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SecureTextEntry, Linking} from 'react-native';
import { Icon } from 'react-native-elements'

 
class Login extends Component {
    state={
        username: "",
        password: ""
    }
 
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.centerTitle}>Welcome Back</Text>

                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                placeholder="Username"
                placeholderTextColor = "grey"
                />

                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                placeholder="Password"
                secureTextEntry={true}
                type="password"
                placeholderTextColor = "grey"
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text onPress={()=>this.props.clickHandler(this.state)} style={styles.buttonText} >LOG IN</Text>
                </TouchableOpacity>

                <Text>Don't Have An Account? <Text style={{color: '#FF6700'}}
      onPress={() => this.props.loginHandler()}>Sign Up</Text></Text>
            </View>
            
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    inputBox: {
        width: 290,
        backgroundColor: 'white', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 11,
        borderBottomColor: "#FF6700",
        borderBottomWidth: 0.2
    },
    button: {
        width: 300,
        backgroundColor: '#FF6700',
        borderWidth: 0.2,
        borderColor: "#FF6700",
        borderRadius: 7,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    centerTitle: {
        color: "#FF6700",
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 8,
        fontWeight: 1,
        marginBottom: 12
      },
});

export default Login;