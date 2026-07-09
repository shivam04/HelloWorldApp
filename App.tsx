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
          marginLeft: 100,
          marginRight: 100,
          marginTop: 10,
          marginBottom: 10
        }}>Hello World!</Text>
        <Text style={{
          backgroundColor: 'red'
        }}>Hello World 2</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
