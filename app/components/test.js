/**
 *
 */
'use strict';

import React ,{Component} from 'react'
import {
    PanResponder,
    StyleSheet,
    StatusBar,
    View,
    Text
} from 'react-native'
import { Actions, Scene  } from 'react-native-router-flux'
import { CHANGEURL } from '../constants'

class test extends Component {
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
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
          onStartShouldSetPanResponder: (evt, gestureState) => false,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
          onMoveShouldSetPanResponder: (evt, gestureState) => false,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderGrant: (evt, gestureState) => {
            // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
            // gestureState.{x,y}0 现在会被设置为0
             this.setState({moveX:gestureState.x0})
          },
          onPanResponderRelease: (evt, gestureState) => {
            let cur = this.props.parent
            let index = CHANGEURL.indexOf(cur)
            // console.log('onPanResponderRelease',cur,index)
            if(index != -1){
              if((index == 0 && sthis.state.moveX-gestureState.moveX<-20) ||
                    (index == CHANGEURL.length - 1 && this.state.moveX-gestureState.moveX>20)){
                         return
              }else{
                if(this.state.moveX-gestureState.moveX>20){
                    Actions[CHANGEURL[index+1]]()
                }else if(this.state.moveX-gestureState.moveX<-20){
                      Actions[CHANGEURL[index-1]]()
                }
              }
            }
          }
     })
  }


  render(){
    return(
      <View style={styles.container} {...this._panResponder.panHandlers}>
          <StatusBar
              animated={true}
              backgroundColor='#db3a3a'
          />
          <Text style={styles.welcome}  >
            我是手势响应
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});

export default test
