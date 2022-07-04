import React from 'react';
import {View,Text } from 'react-native';
import Header from '../../components/Header';

const Track  = (props)=>{
    return (
        <View>
             <Header title={props.route.name}/>
            <Text >Home</Text>
        </View>
    )
}

export default Track;