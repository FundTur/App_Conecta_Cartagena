import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo
const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const HealthScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Health Screen</Text>
    </View>
);

const LocationScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Location Screen</Text>
    </View>
);

const StarScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Star Screen</Text>
    </View>
);

const CalendarScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar Screen</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
    </View>
);

// Componente BottomTabNavigator con iconos de FontAwesome
export default function BottomTabNavigator() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Health') {
                        iconName = 'plus-square';
                    } else if (route.name === 'Location') {
                        iconName = 'location-arrow';
                    } else if (route.name === 'Star') {
                        iconName = 'star';
                    } else if (route.name === 'Calendar') {
                        iconName = 'calendar-check-o';
                    } else if (route.name === 'Settings') {
                        iconName = 'cog';
                    }

                    // Retorna el icono correspondiente de FontAwesome
                    return <FontAwesome name={iconName as string} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#808080',
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Health" component={HealthScreen} />
            <Tab.Screen name="Location" component={LocationScreen} />
            <Tab.Screen name="Star" component={StarScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
