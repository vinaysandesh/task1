import React from 'react';
import {View,Text } from 'react-native';
import Header from '../../components/Header';

const UserList  = (props)=>{
    return (
        <View>
             <Header title={props.route.name}/>
            <Text >UserList</Text>
        </View>
    )
}

export default UserList;