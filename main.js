import React, { Component } from 'react';
import { Text,Image,View,StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';//引入包

import index1 from './app/components/index1' //引入文件
import index2 from './app/components/index2'//引入文件
import index3 from './app/components/index3'
import index4 from './app/components/index4'
import index5 from './app/components/index5'
import  Test from './app/components/test'
import indexA1 from './app/components/index1-1'
import indexA2 from './app/components/index1-2'
import indexA3 from './app/components/index1-3'
import indexB1 from './app/components/index4-1'

const TabIcon = ({ selected, title }) => {
    let icon = selected ? require('./app/images/home1.png') : require('./app/images/home.png')
    let icon1 = selected ? require('./app/images/my1.png') : require('./app/images/my.png')
    if(title=='主页'){
        return (
            <View style={styles.imgview}>
                <Image style={styles.img} source={icon} />
                <Text style={[styles.text,{color: selected ? 'red' :'black'}]}>{title}</Text>
            </View>
        )
    }else {
        return (
            <View style={styles.imgview}>
                <Image style={styles.img} source={icon1} />
                <Text style={[styles.text,{color: selected ? 'red' :'black'}]}>{title}</Text>
            </View>
        )
    }
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _navBarContent(){
        return(
            <View><Text>bbb</Text></View>
        )
    }
    render(){
        return (
            <Router>
                <Scene key="root" >
                    <Scene  key="tabbar" tabs={true}  tabBarStyle={styles.tabBarStyle} >
                        <Scene key="aaa" title="主页"  icon={TabIcon} initial={true} component={index1} title="主页" hideNavBar  />
                        <Scene key="bbb" title="搜索" icon={TabIcon} component={index2}  title="搜索"  />
                        <Scene key="eee" title="手势" icon={TabIcon} >
                            <Scene key="test" titleStyle={{color:'red'}}  navigationBarStyle={styles.navigationBarStyle} component={Test}  title="手势响应测试"  />
                        </Scene>
                        <Scene swipeEnabled={true} key="ccc" title="订单" icon={TabIcon}>
                            <Scene  key="order"  component={index3}  title="订单"  />
                        </Scene>
                        <Scene key="ddd" title="我的" icon={TabIcon}>
                            <Scene key="mine"  component={index4}  title="我的"  />
                        </Scene>
                    </Scene>
                    <Scene key="setting"  component={index5}  title="设置" hideTabBar />
                    <Scene key="A1"  component={indexA1}  title="A1" hideTabBar />
                    <Scene key="A2"  component={indexA2}  title="A2" hideTabBar />
                    <Scene key="A3"  component={indexA3}  title="A3" hideTabBar />
                    <Scene key="B1"  component={indexB1}  title="B1" hideTabBar />
                </Scene>
            </Router>
        )
    }
}
const styles = StyleSheet.create({
    imgview:{
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:20,
        width:20
    },
    text:{
        fontSize:12
    },
    tabBarStyle:{
        backgroundColor:'#ececec',
        borderTopWidth:1,
        borderTopColor:'red'
    },
    navigationBarStyle:{        
        backgroundColor:'#a2cbda',
        borderBottomWidth:1,
        borderBottomColor:'red'
    }
})
export default App
