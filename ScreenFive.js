
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Text,

} from 'react-native';

class ScreenFive extends Component {

  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.main2}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
            source={require("./logo.png")} />
        </View>

      <View style={styles.fieldcontainer}>

      <View style={styles.border}>
        <TextInput
          placeholder="First Name"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}/>
      </View>
      <View style={styles.border}>
        <TextInput
          placeholder="Last Name"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}/>
      </View>

      <View style={styles.border}>
        <TextInput
          placeholder="Phone Number"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}/>
      </View>

      <View style={styles.border}>
        <TextInput
          placeholder="E-mail"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.input}/>
      </View>



      <View style={styles.border}>
      <TextInput
        placeholder="Password"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        style={styles.input}/>
      </View>

      </View>
      <View style={styles.submit}>
        <TouchableHighlight
          color="black"
          style={styles.TouchableHighlight}
          onPress={() => navigate("ScreenFive", { screen: "ScreenFive" })}
          >
          <Text style={styles.texts}>SIGN UP</Text>
          </TouchableHighlight>
      </View>

        <Text
        style={styles.already}
        onPress={() => navigate("ScreenFour", { screen: "ScreenFour" })}>
        already have an account? </Text>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  main2:{
    flex:1,
    backgroundColor:'white',


  },
  logocontainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,



  }
,
  logo :{
    width: 139,
    height: 28
  }
  ,
fieldcontainer:{

margin:10,
marginTop:40,


},
border:{
  marginRight:20,
  marginLeft:20,
  borderRadius:100,
  marginBottom:15,
  elevation:1
 


},

input:{
  backgroundColor:'white',
  height:38,
  marginBottom:10,
  marginTop:5,
  color:"black",
  paddingHorizontal:1,
  marginLeft:20,
  marginRight:20,
  fontSize:15,
  opacity:0.2,

}
,
submit:{
marginTop:5,
marginLeft:30,
marginRight:30,

}
,

TouchableHighlight:{
  padding:15,
  alignItems:"center",
  backgroundColor:"rgb(102,205,204)",
  borderRadius:500,

}
,
texts:{
  color:"white",
  fontSize:19,
  fontFamily:"sans-serif-light"


},
already:{
  marginTop:11,
  alignItems:"center",
  justifyContent:"center",
  fontSize:17,
  textAlign:"center",
  color:"rgb(161,159,159)"

},

});
export default ScreenFive;
