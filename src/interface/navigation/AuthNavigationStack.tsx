import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../application/store";
import { setIsFirstLaunch } from "../../application/slices/uiPersistentSlice";
import React, { useEffect } from "react";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import BottomTabNavigator from "./BottomNavigationBar";

const Stack = createNativeStackNavigator<any>();

const AuthNavigationStack = () => {
    const isFirstLaunch = useSelector((state: RootState) => state.uiPersistent.isFirstLaunch);
    const userData = useSelector((state: RootState) => state.auth.userData);
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
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={SignUpScreen} />

            {userData &&
                <Stack.Screen name="Home" component={BottomTabNavigator} />
            }
        </Stack.Navigator>
    );
}

export default AuthNavigationStack