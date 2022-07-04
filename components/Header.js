import React from 'react';
import {View,Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilState } from 'recoil';
import { loggedInUserType } from '../recoil/store';

const Header = (props)=>{ 
    const [userType, setText] = useRecoilState(loggedInUserType);
    const logout = ()=>{
        setText(null)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <MaterialCommunityIcons onPress={logout} name="power" color={"#121212"} size={24} />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize:24,
        color:'#000',
        padding:4
    },
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:8,
        alignItems:'center'
    }
})
Header.defaultProps = {
    title:"Header", 
  }
    
export default Header;