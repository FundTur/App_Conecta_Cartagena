import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import { useLanguage } from './LanguageProvider'; // Asegúrate de que el LanguageProvider esté configurado

const LanguageButton = () => {
    const { changeLanguage, lang } = useLanguage(); // Obtener la función para cambiar idioma y las traducciones
    const [selectedLang, setSelectedLang] = useState(''); // Estado temporal para mostrar el idioma seleccionado
    const opacity = useRef(new Animated.Value(0)).current; // Estado de animación para la opacidad
    const translateX = useRef(new Animated.Value(-50)).current; // Estado de animación para la posición
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Para entornos Node.js


    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'es' : 'en';
        changeLanguage(newLang);
        setSelectedLang(newLang); // Cambiar el estado para mostrar el idioma seleccionado

        // Cancelar cualquier animación en curso
        opacity.stopAnimation();
        translateX.stopAnimation();
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Limpiar el timeout si está activo
        }

        // Reiniciar la animación para mostrar el texto
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1, // Hacer que el texto aparezca
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateX, {
                toValue: 0, // Mover el texto hacia su posición original
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => {
            // Después de 2 segundos, ocultar el texto
            timeoutRef.current = setTimeout(() => {
                Animated.parallel([
                    Animated.timing(opacity, {
                        toValue: 0, // Hacer que el texto desaparezca
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateX, {
                        toValue: -50, // Mover el texto hacia la izquierda fuera de la vista
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]).start();
            }, 1000); // Puedes ajustar el tiempo para mostrar el texto
        });
    };

    // Limpiar el timeout al desmontar el componente
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <Container>
            <AnimatedMessage style={{ opacity, transform: [{ translateX }] }}>
                {selectedLang === 'en' ? 'English selected' : 'Español seleccionado'}
            </AnimatedMessage>
            <ButtonContainer onPress={toggleLanguage}>
                <FontAwesome name="language" size={30} color="#2C3E50" />
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonContainer = styled(TouchableOpacity)`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const AnimatedMessage = styled(Animated.Text)`
  font-size: 16px;
  color: #2C3E50;
  margin-right: 10px; /* Añadir un margen entre el texto y el icono */
`;

export default LanguageButton;
