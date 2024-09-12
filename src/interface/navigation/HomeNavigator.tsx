import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/Home"

const avigStack = createNativeStackNavigator<any>()

const HomeNavigator = () => {
    return (
        <avigStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <avigStack.Screen name="Home" component={HomeScreen} />
        </avigStack.Navigator>
    )
}

export default HomeNavigator