import React from 'react';
import {View,Text } from 'react-native';
import Header from '../../components/Header';

const Shipment  = (props)=>{
    return (
        <View>
             <Header title={props.route.name}/>
            <Text>Home</Text>
        </View>
    )
}

export default Shipment;