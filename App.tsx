/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  const [content, handleContent] = useState('Hello World');
  const [howManyTimesDidYouClickIt, updateClickCount] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello World!</Text>
        <Text
          onPress={() => {
            handleContent('Hello World, my name is Shivam!');
            updateClickCount(value => value + 1);
          }}
        >
          {content} {howManyTimesDidYouClickIt}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
