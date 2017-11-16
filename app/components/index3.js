import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { CHANGEURL } from '../constants'

class index3 extends Component {
  constructor(props) {
     super(props)
     this.state = {
         _panResponder: {},
         moveX:''
     }
  }
    componentDidMount (){

    }

    componentWillMount=()=> {

  }


  render(){
  return (
    <View style={styles.container} >
      <Text
        style={styles.welcome}
        onPress={() => alert(123)} // New Code
      >
        我是订单
      </Text>
     </View>
   );
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});

export default index3
