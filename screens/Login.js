import React from 'react';
import {View,Text, TextInput, Button, StyleSheet } from 'react-native';
import { 
    useRecoilState, 
  } from 'recoil';
import { loggedInUserType } from '../recoil/store'; 

const Login = (props) =>{ 
    const [userType, setText] = useRecoilState(loggedInUserType);
    const operatorLogin = ()=>{
      setText("operator")
    } 
    const supervisorLogin = ()=>{
        setText("supervisor")
    }
    return (
        <View style={styles.container}>
             <Button 
             title = "Operator"
             onPress={operatorLogin}
             />
             <Button
             onPress={supervisorLogin}
             title = "Supervisor"
             />
    </View>
    )
}
 const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', justifyContent:'space-around' }
 })
export default Login;