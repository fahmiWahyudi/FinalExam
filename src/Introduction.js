import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Introduction extends Component{
    static navigationOptions = {
        title: 'Halaman Introduction',
      };
    render(){
        return(
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Image source={require('../img/logoToko.png')}/>
                <Button 
                    icon={
                        <Icon
                          name="whistle"
                          size={50}
                        />
                      }
                    title={"   KICK OFF"}
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
            </View>
        )
    }
}