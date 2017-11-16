import React, { Component } from 'react';
import {
  TouchableOpacity,
  PanResponder,
  StyleSheet,
  BackHandler,
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
       this.handleBack = this._handleBack.bind(this)
    }
    componentWillMount() {
        Actions.refresh({onBack:this.handleBack })
    }

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }

    _handleBack() {
        try {
            Actions.A1()
            return true;
        } catch (err) {
            return false;
        }
    }

    render(){
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={()=>Actions.B1()}>
                    <Text style={styles.welcome}> A3 </Text>
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
