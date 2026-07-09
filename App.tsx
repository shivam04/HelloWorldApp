/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useRef, useState } from 'react';
import { Text, TextInput } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {

  const [content, handleContent] = useState('Hello World, press me to know me');
  const [howManyTimesDidYouClickIt, updateClickCount] = useState(0);

  const inputBox = useRef<TextInput>(null);

  console.log(
    'This is a value of input box when the screen is empty',
    inputBox
  );

  useEffect(() => {
    console.log('Screen is rendered');
    setTimeout(() => {
      console.log(
        'After a little delay, show us how the inputBox value changes',
        inputBox,
      );
    }, 0);
  }, []);

  useEffect(() => {
    console.log("Screen is rendered")
  }, []);

  useEffect(() => {
    console.log("Content haas been updated")
  }, [content]);

  useEffect(() => {
    console.log("Click Count has been updated")
  }, [howManyTimesDidYouClickIt]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput ref={inputBox} style={{ borderWidth: 1, padding: 10 }} />
        <Text
          onPress={() => {
            handleContent('Hello World, my name is Shivam, you can type yours above!');
            updateClickCount(value => value + 1);
            inputBox?.current?.focus();
          }}
        >
          {content} {howManyTimesDidYouClickIt}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
