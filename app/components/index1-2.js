import React, { Component } from 'react';
import {
  TouchableOpacity,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { CHANGEURL } from '../constants'

class index1 extends Component {

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
                <TouchableOpacity onPress={()=>Actions.A3()}>
                    <Text style={styles.welcome}> A2 </Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default index1
