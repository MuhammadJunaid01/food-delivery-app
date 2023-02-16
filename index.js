/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
