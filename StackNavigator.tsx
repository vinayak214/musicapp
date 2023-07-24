import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "rgba(0,0,0,0.9)",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowOpacity: 4,
                    shadowRadius: 4,
                    elevation: 4,
                    shadowOffset: {
                        width: 0,
                        height: -4
                    },
                    borderTopWidth: 0
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="white" />

                        ) : (
                            <AntDesign name="home" size={24} color="white" />
                        )
                }} />
            <Tab.Screen name="Settings" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarLabelStyle: { color: 'white' },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person" size={24} color="white" />

                        ) : (
                            <Ionicons name="person-outline" size={24} color="white" />
                        )
                }}
            />
        </Tab.Navigator>
    )
}

const Stack: any = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation