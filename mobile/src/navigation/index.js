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

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Cidades" component={CitiesScreen}/>
                <Stack.Screen name="Turisticos" component={TouristListScreen}/>
                <Stack.Screen name="Detalhes" component={TouristDetailScreen}/>
                <Stack.Screen name="cadastro" component={TouristFormScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
