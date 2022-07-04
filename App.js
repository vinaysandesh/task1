/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppWrapper from './AppWrapper';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

 
const App = () => {
 

  return (
    <RecoilRoot>
     <SafeAreaView style={styles.backgroundStyle}> 
      <AppWrapper/> 
     </SafeAreaView>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  backgroundStyle : {
    flex:1
  }
});

export default App;
