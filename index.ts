import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app-temp/screens/login';
import Plantilla from './app-temp/screens/Plantilla';
import Calculadora from './app-temp/screens/Calculadora';
import FakeStore from './app-temp/screens/FakeStore';
import PantallaLogin from './app/proy_IoT-main/Integrador/backend/ProyectoIOTT/componentes/PantallaLogin';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(PantallaLogin);
