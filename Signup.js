import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SecureTextEntry} from 'react-native';
import Favorites from "./Favorites"

class Signup extends Component {
    state={
        username: "",
        password: "",
        password2: ""
    }



    signupHandler=(state)=>{
        if (!state.username || !state.password || !state.password2) {
            alert("Please enter valid username/password")
        } else{
            if (state.password === state.password2) {
                fetch("https://chewsy-backend-api.herokuapp.com/users", {
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        user: {
                            username: state.username,
                            password: state.password
                        }
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.errors) {
                        alert(data.errors)
                    } else {
                        this.props.clickHandler(this.state)
                    }
                })
            } else {
                alert("Passwords must match")
                this.setState({
                    password: "",
                    password2: ""
                })
            }
        }
        
    }




    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.centerTitle}>Create Account</Text>
                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                placeholder="Username"
                placeholderTextColor = "grey"
                // selectionColor="#fff"
                />
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                
                placeholder="Password"
                secureTextEntry={true}
                type="password"
                placeholderTextColor = "grey"
                />

                <TextInput style={styles.inputBox}
                onChangeText={(password2) => this.setState({password2})} 
                placeholder="Re-enter Password"
                secureTextEntry={true}
                type="password"
                placeholderTextColor = "grey"
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text onPress={()=>this.signupHandler(this.state)} style={styles.buttonText} >SIGN UP</Text>
                </TouchableOpacity>

                <Text>Have An Account Already? <Text style={{color: '#FF6700'}}
                onPress={() => this.props.loginHandler()}>Log In</Text></Text>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
        borderColor: '#FF6700',
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
        marginBottom: 10
      },
});




export default Signup;