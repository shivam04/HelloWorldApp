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
          fontSize: 40,
          color: '#ff0000',
          fontFamily: 'Arial',
          fontStyle: 'italic',
          fontWeight: 900,
          backgroundColor: 'green',
          lineHeight: 70,
          textAlign: 'center'
        }}>Hello World!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
