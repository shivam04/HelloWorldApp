/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import MyText from './components/MyText/MyText';
import { Text, View } from 'react-native';
import style from './style';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.header}>
          <Text style={style.headerTitle}>Home</Text>
        </View>
        <View>
          <MyText title={'Shivam'} fontSize={50} styles={{ color: 'green' }} />
          <MyText title={'My Content Goes Here'} />
          <MyText />
        </View>
        <View style={style.footer}>
          <Text style={style.footerText}>Copyright 2026</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
