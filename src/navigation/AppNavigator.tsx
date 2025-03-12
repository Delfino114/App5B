import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen1 from '../screens/RegisterScreen1';
import RegisterScreen2 from '../screens/RegisterScreen2';
import ProductCatalogScreen from '../screens/ProductCatalogScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register1" component={RegisterScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="Register2" component={RegisterScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="ProductCatalog" component={ProductCatalogScreen} options={{ title: 'Catálogo de Productos' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalles del Producto' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;