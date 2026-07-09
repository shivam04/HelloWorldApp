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
import { Button, Text } from 'react-native';
import { useCounter } from './hooks/useCounter';

function App() {

  const { count, increment, decrement, reset } = useCounter();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Count {count}</Text>
        <Button title='+' onPress={increment} />
        <Button title='-' onPress={decrement} />
        <Button title='Reset' onPress={reset} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
