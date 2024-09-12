import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Image, Animated } from "react-native";
import { TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { welcome } from "../../assets/images";
import { useLanguage } from "../components/language/LanguageProvider";
import LanguageButton from "../components/language/LanguageButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const WelcomeScreen = () => {
    // Crear valores animados para la opacidad y la posición Y (vertical)
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(50)).current; // Comienza 50px más abajo
    const { t } = useLanguage();
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        // Iniciar la animación cuando el componente se monta
        Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.timing(translateY, {
            toValue: 0, // Se mueve hacia arriba hasta su posición original
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePressContinueButton = () => {
        // Ir a la pantalla de inicio de sesión
        navigation.navigate("Login");
    }

    return (
        <>
            <LanguageButtonContainer>
                <LanguageButton />
            </LanguageButtonContainer>
            <AnimatedContainer style={{ opacity, transform: [{ translateY }] }}>
                <Logo source={welcome} />
                <Title>{t("welcomeTitle")}</Title>
                <Subtitle>{t("welcomeSubtitle")}</Subtitle>
                <Button onPress={handlePressContinueButton}>
                    <IonIcon name="arrow-forward" size={24} color="#fff" />
                </Button>
            </AnimatedContainer>
        </>
    );
};

const AnimatedContainer = styled(Animated.View)`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Logo = styled(Image)`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-bottom: 20px;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin-bottom: 10px;
    line-height: 42px;
`;

const Subtitle = styled.Text`
    font-size: 24px;
    color: #555;
    text-align: center;
    margin-bottom: 30px;
    line-height: 31px;
`;

const Button = styled(TouchableOpacity)`
    background-color: #ff9307;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

const LanguageButtonContainer = styled.View`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
`;

export default WelcomeScreen;
