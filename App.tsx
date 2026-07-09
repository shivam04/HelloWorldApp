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

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <MyText />
        <MyText />
        <MyText />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
