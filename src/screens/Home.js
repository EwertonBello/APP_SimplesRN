import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native'


export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Lista de filmes',
        headerTintColor: "#FFFFFF",
        headerStyle: {
            backgroundColor:"#000000"
          }
    }
    state = {
        data: []
    }
    
    async componentDidMount() {
       
        const response = await fetch('https://swapi.dev/api/films/?format=json')
        const responseJson = await response.json()
        this.setState({data: responseJson.results})
    }

    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: 'https://cdn.ome.lt/yEtdepDF1RbjezTmm2axDO2Hdn4=/223x169/smart/extras/capas/wAya5L2.png' }} />
                <Text style={{marginLeft: 10}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    _onItemPress = (item) => {
        this.props.navigation.navigate('Details', {filme: item})
    } 

    render() {
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.episode_id.toString()}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}}/>
                }
            />
        )
    }
}
