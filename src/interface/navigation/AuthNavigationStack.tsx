import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../application/store";
import { useFocusEffect } from "@react-navigation/native";
import { setIsFirstLaunch } from "../../application/slices/uiPersistentSlice";
import React, { useEffect } from "react";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator<any>();

const AuthNavigationStack = () => {
    const isFirstLaunch = useSelector((state: RootState) => state.uiPersistent.isFirstLaunch);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsFirstLaunch(true));
    }, [])

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: !isFirstLaunch
            }}
        >
            {isFirstLaunch && (
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            )}
            <Stack.Screen name="Login" component={SignUpScreen} />
            <Stack.Screen name="Register" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigationStack