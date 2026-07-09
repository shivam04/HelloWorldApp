/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{
          //margin: 100,
          backgroundColor: 'red',
          marginLeft: 32,
          //paddingLeft: 10,
          marginRight: 32,
          //paddingRight: 10,
          marginTop: 10,
          //paddingTop: 10,
          marginBottom: 10,
          //paddingBottom: 10,
          textAlign: 'right',
          paddingVertical: 100,
          //paddingHorizontal: 100,
          padding: 10
        }}>Hello World!</Text>
        <Text style={{
          backgroundColor: 'red'
        }}>Hello World 2</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
