
/*
	deploy: /app
	dev: ''
*/
import { PanResponder } from 'react-native';
export const CHANGEURL = ['aaa','bbb','eee','ccc','ddd']

export const _panResponder =  PanResponder.create({
// 要求成为响应者：
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
      // gestureState.{x,y}0 现在会被设置为0
      let moveX = gestureState.x0
    },
    onPanResponderRelease: (evt, gestureState) => {
      console.log(this);
      let cur = this.props.parent
      let index = CHANGEURL.indexOf(cur)
      //  console.('onPanResponderRelease',cur,index)
      if(index != -1){
        if((index == 0 && moveX-gestureState.moveX<-20) ||
              (index == CHANGEURL.length - 1 && moveX-gestureState.moveX>20)){
                   return
        }else{
          if(moveX-gestureState.moveX>20){
              Actions[CHANGEURL[index+1]]()
          }else if(moveX-gestureState.moveX<-20){
                Actions[CHANGEURL[index-1]]()
          }
        }
      }
    }
})
