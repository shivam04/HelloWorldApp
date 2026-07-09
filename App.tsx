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
          // borderLeftWidth: 10,
          // borderWidth: 5,
          // borderTopWidth: 10,
          // borderBottomWidth: 8,
          borderColor: 'red',
          //borderRadius: 50
          // borderTopLeftRadius: 50,
          // borderBottomLeftRadius: 50,
          // borderTopRightRadius: 50,
          // borderBottomRightRadius: 50
          borderWidth: 1,
          borderStyle: 'dashed'
        }}>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
