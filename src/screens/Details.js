import React, { Component } from 'react'
import { ScrollView, Text, Image, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

export default class Details extends Component {
    static navigationOptions = {
        title: 'Detalhes',
        headerTintColor: "#FFFFFF",
        headerStyle: {
            backgroundColor:"#000000"
          }
    }
            render() {
                const { filme } = this.props.navigation.state.params
                return (
                   <ScrollView>
                       <Image 
                            source={{uri: 'https://cdn.ome.lt/yEtdepDF1RbjezTmm2axDO2Hdn4=/223x169/smart/extras/capas/wAya5L2.png'}} 
                            style={{width:'100%', height:WIDTH}}
                        />
                        <Text style={{padding:5, fontSize:20}}>{filme.title}</Text>
                        <Text style={{padding:5}}>{filme.opening_crawl}</Text>
                   </ScrollView> 
                )
            }
}