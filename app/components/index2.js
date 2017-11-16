import React, { Component } from 'react';
import {
    TouchableOpacity,
    PanResponder,
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { CHANGEURL } from '../constants'

class index2 extends Component {
  constructor(props) {
     super(props)
     this.state = {
         _panResponder: {},
         moveX:''
     }
  }
    componentDidMount (){

    }

    componentWillMount(){
  }


  render(){
    return (
      <View style={styles.container} >
          <Text >
            我是搜索
          </Text>
          <TouchableOpacity style={styles.welcome} onPress = { ()=>Actions.setting()}>
              <Text style={styles.text}>
                  go to Setting
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.welcome1} onPress = { ()=>Actions.ccc()}>
              <Text style={styles.text}>
                  go to Order
              </Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    welcome: {
        height:50,
        alignItems:'center',
        backgroundColor:'#80d2c9',
        width:Dimensions.get('window').width
      },
    welcome1: {
        height:50,
        marginTop:20,
        alignItems:'center',
        backgroundColor:'#65cbe6',
        width:Dimensions.get('window').width
    },
    text:{
      textAlign:'center'
    }
});

export default index2;
