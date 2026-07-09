/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { ThemeProvider } from './context/ThemeContext';
import Card from './components/Card/Card';
import Button from './components/Button/Button';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemeProvider>
          <Card />
          <View style={{ marginTop: 32 }}>
            <Button />
          </View>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
