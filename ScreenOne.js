
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

class Splash extends Component {
  componentWillMount () {
          const { navigate } = this.props.navigation;
        setTimeout(() => navigate("ScreenTwo", {screen: "Screen Two"}),40);

      }
     
  render() {
    return (
      <View style={styles.bg}>
      <Image source={require("./logo.png")}/>
      </View>
    );

  }
};

const styles = StyleSheet.create({
  bg:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
});


export default Splash;
