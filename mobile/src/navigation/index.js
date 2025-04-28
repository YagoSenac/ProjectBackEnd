import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import TouristListScreen from '../screens/TouristListScreen';
import TouristDetailScreen from '../screens/TouristDetailScreen';
import TouristFormScreen from '../screens/TouristFormScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cidades" component={CitiesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Turisticos" component={TouristListScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Detalhes" component={TouristDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="cadastro" component={TouristFormScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
