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
      <SafeAreaView style={{ backgroundColor: 'green' }}>
        <Text style={{
          //margin: 100,
          backgroundColor: 'blue',
          marginLeft: 32,
          //paddingLeft: 10,
          marginRight: 32,
          //paddingRight: 10,
          //marginTop: 10,
          //paddingTop: 10,
          //marginBottom: 10,
          marginVertical: 100,
          //paddingBottom: 10,
          textAlign: 'right',
          paddingVertical: 100,
          //paddingHorizontal: 100,
          padding: 10,
          position: 'relative',
          zIndex: 2
        }}>Hello World!</Text>

        <Text style={{
          backgroundColor: 'red',
          position: 'absolute',
          left: 150,
          right: 100,
          top: 150,
          bottom: 100,
          zIndex: 1
        }}>Hello World 2</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
