import React from "react";
import { StatusBar,View,Text,StyleSheet,TouchableHighlight,TouchableOpacity } from "react-native";
import {
  Button,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import {observer} from 'mobx-react'; 
import MapStore from './MapStore.js';
import Geocoder from 'react-native-geocoder';
import RNGooglePlaces from 'react-native-google-places';
import ScreenTen from "./ScreenTen.js";

@observer
class ScreenSeven extends React.Component {
  componentDidMount(){
    Geocoder.geocodePosition(MapStore.cords).then(res => {
      MapStore.Address =res[0].formattedAddress;
     });
    address=(value)=>{
      return ""+value+""
    } 
    MapStore.value=address(MapStore.Address);
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({type: 'geocode',country: 'EG'})
    .then((place) => {
    // place represents user's selection from the
    // suggestions and it is a simplified Google Place object.
    MapStore.dropLocationAddress=place.address;
    MapStore.drop="Search another location";
    MapStore.dropLocation={lat:place.latitude,lng:place.longitude};
    MapStore.destination = {latitude:MapStore.dropLocation.lat,longitude:MapStore.dropLocation.lng}
	
    
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }


  render() {
    return (
      <Container  style={{backgroundColor:"white"}}>
        <Header style={{marginTop:0,backgroundColor:"white",elevation:0}}>
          <Left style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"black",fontSize:30}}/>
            </Button>
          </Left>
          <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color:"black"}}>New Pickup</Title>
          </Body>
          <Right style={{flex:1}}/>
        </Header>
        <Content style={{marginTop:0}}contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.textHead}>Pickup location</Text>
          <TouchableOpacity style={styles.touchableHighlight}>
            <Text style={styles.textInside}>{MapStore.Address+" "+"(current location)"}</Text>
          </TouchableOpacity>
        <View style={styles.lineSeprator}/>
          <Text style={styles.textHead1}>Drop location</Text>
          <TouchableOpacity
            style={styles.touchableHighlight}
            onPress={() => this.openSearchModal()}>
            <Text style={styles.textInside1}>{MapStore.drop}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableHighlight}>
            <Text style={styles.textInside}>{MapStore.dropLocationAddress }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:"10%",flexDirection:"row",marginLeft:"7%"}}
            onPress={()=>this.props.navigation.navigate("ScreenNine",{screen:"ScreenNine"})}
          >
            <Icon name="pin" style={{color :"rgb(102,205,204)",fontSize:18,marginTop:"1%"}} /><Text style={styles.textLocation}>Set location on map</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{marginTop:"6%",flexDirection:"row",marginLeft:"7%"}}>
            <Icon name="pin" style={{color :"rgb(102,205,204)",fontSize:18,marginTop:"1%"}} /><Text style={styles.textLocation}>Set Drop Location Later</Text>
          </TouchableOpacity >


          <TouchableHighlight style={styles.touchableHighlight1}  
            onPress={()=>this.props.navigation.navigate("ScreenTen",{screen:"ScreenTen"})}>
              <Text style={{color:"white",fontSize:19,textAlign:"center",marginTop:"4%"}}>DONE</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  textHead:{
    color : "black",
    marginTop:"1%",
    marginLeft:"7%",
    fontSize:17,


  },
  touchableHighlight:{
    backgroundColor:"white",
    width:"80%",
    height:"8%",
    marginTop:"5%",
    marginLeft:"10%",
    marginRight:"10%",
    borderRadius:100,
    elevation:1,
    alignItems:"center",
    justifyContent:"center",
  },
  textInside:{
    fontSize:13,
    color:"black",
    textAlign:"center",
    marginLeft:"2%",
    marginRight:"2%",
  },
  lineSeprator:{
    backgroundColor : "rgb(161,159,159)",
    width: "70%",
    height: 0.5,
    marginTop:"6%",
    marginLeft: "15%",
    marginRight:"15%",

  },
  textHead1:{
    color : "black",
    marginTop:"5%",
    marginLeft:"7%",
    fontSize:17,


  },
  textInside1:{
    fontSize:15,
    color:"rgb(161,159,159)",
    textAlign:"center",
    marginLeft:"2%",
    marginRight:"2%",
  },
  textLocation:{
    color :"rgb(102,205,204)",
    fontSize:18,
    marginLeft:"2%",
  },
  touchableHighlight1:{
    width:"50%",
    height:"8%",
    alignItems:"center",
    backgroundColor:"rgb(102,205,204)",
    borderRadius:100,
    marginTop:"8%",
    marginLeft:"25%",
    marginRight:"25%",
    

  },

})

export default  ScreenSeven ;