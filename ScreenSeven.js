import React from "react";
import { StatusBar,View,Text,TouchableHighlight,StyleSheet} from "react-native";
import {
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import Map from "./Map.js";
import Overlay from 'react-native-modal-overlay';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import MapStore from "./MapStore.js";
import { observer } from "mobx-react";


@observer
class ScreenSeven extends React.Component {
  render() {
    const {goBack} = this.props.navigation;
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
        <View style={{height:"89%"}}>
        <Map navigation={this.props.navigation}/>
        </View>
        <View style={{height:"11%",alignItems:'flex-end',marginRight:"8%",marginTop:"5%",}}>
        <Text style={{color:"rgb(255,73,103)",fontSize:15}} onPress={() => MapStore.toggleModal1() }>Cancel pickup</Text>
        </View>
        <Overlay visible={MapStore.isModalVisible1}  animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}} childrenWrapperStyle={{backgroundColor: 'white',height:"35%"}} >
          <View style={{borderBottomWidth: 0, width: 100,}}><Text style={{ fontSize: 30, textAlign: 'center',color:"red"}}> <FontAwesome>{Icons.close}</FontAwesome> </Text></View>
          <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center',color:"black"}}>
          Do you want to cancel the order?
          </Text>
          <TouchableHighlight onPress={() => {goBack();MapStore.toggleModal1()}} style={styles.modalTouchable}>
                <Text style={styles.textTouchable}>YES</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>MapStore.toggleModal1()} style={styles.modalTouchable1}>
                <Text style={styles.textTouchable1}>No</Text>
              </TouchableHighlight>
        </Overlay>
      
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textTouchable:{
    marginLeft:"40%",
    marginTop:"4%",
    marginRight:"40%",
    color:"white",
    fontSize:15,
    textAlign:'center',
  
  },
  modal:{
    marginTop:"50%",
    marginLeft:"15%",
    height:"25%",
    width:"70%",
    backgroundColor:"white",
  },
  modalTouchable:{
    backgroundColor:"rgb(102,205,204)",
    borderRadius:100,
    marginTop:"5%",
    marginLeft:"5%",
    marginRight:"5%",
    height:"18%",
    width:"42%",
  
  
  },
  modalTouchable1:{
    backgroundColor:"white",
    borderRadius:100,
    marginTop:"5%",
    marginLeft:"5%",
    marginRight:"5%",
    height:"18%",
    width:"42%",
    marginBottom:"1%"
  },
  textTouchable1:{
    marginLeft:"40%",
    marginTop:"4%",
    marginRight:"40%",
    color:"black",
    fontSize:15,
    textAlign:'center',
  
  },


})


export default  ScreenSeven ;