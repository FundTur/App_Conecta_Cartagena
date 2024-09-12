import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { signupHeader } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import UserThunks from '../../application/thunks/UserThunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../application/store';

const userAuth = UserThunks.getInstance();

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Estado para habilitar o deshabilitar el botón
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Función para manejar cambios en los inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Habilitar el botón si ambos campos están llenos
  useEffect(() => {
    const { email, password } = formData;
    if (email && password) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [formData]);

  // Función para manejar el envío del formulario
  const handleLogin = async () => {
    try {
      // Convertir los datos a un objeto JSON
      const jsonFormData = JSON.stringify(formData);
      console.log('Formulario de inicio de sesión:', jsonFormData);

      // Llamada a la API para iniciar sesión
    //   dispatch(userAuth.Login({ email: formData.email, password: formData.password }));
    } catch (error) {
      console.error('Error al conectar con la API:', error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  const handleGoToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <Logo source={signupHeader} />
          <Title>Conecta Cartagena</Title>
          <Subtitle>Accede a tu cuenta</Subtitle>
        </Header>

        <FormContainer>
          <StyledInput
            placeholder="Email"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <StyledInput
            placeholder="Contraseña"
            secureTextEntry
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
          />
          <SubmitButton
            onPress={handleLogin}
            disabled={!isButtonEnabled}
            style={{ backgroundColor: isButtonEnabled ? '#ff9307' : '#aaaaaa' }}
          >
            <ButtonText>Iniciar sesión</ButtonText>
          </SubmitButton>
        </FormContainer>

        <Footer>
          <FooterText>¿No tienes una cuenta?</FooterText>
          <ButtonGoToRegister onPress={handleGoToRegister}>
            <BoldText>Regístrate.</BoldText>
          </ButtonGoToRegister>
        </Footer>
      </Container>
    </ScrollView>
  );
};

export default LoginScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.View`
  align-items: center;
  margin-bottom: 10px;
  height: 300px;
  width: 100%;
  gap: 12px;
  background-color: #ffeed9;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 65px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #030303;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 22px;
`;

const FormContainer = styled.View`
  width: 100%;
  padding: 30px;
  margin-bottom: 100px;
`;

const StyledInput = styled(TextInput)`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

const SubmitButton = styled(TouchableOpacity)`
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Footer = styled.View`
  margin: 30px 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #666;
`;

const BoldText = styled.Text`
  font-weight: bold;
  color: #000;
`;

const ButtonGoToRegister = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;
