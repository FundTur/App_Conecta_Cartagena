import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { signupHeader } from '../../assets/images';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        age: '',
        selectedGender: '',
        isChecked: false,
    });

    const navigation = useNavigation<any>();

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Función para manejar cambios en los inputs
    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    // Validar si todos los campos están completos y el checkbox está seleccionado
    useEffect(() => {
        const { email, password, firstName, lastName, phoneNumber, location, age, selectedGender, isChecked } = formData;

        if (
            email && password && firstName && lastName && phoneNumber && location && age && selectedGender && isChecked
        ) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [formData]);

    const handleRegister = () => {
        if (isButtonEnabled) {
            // Lógica para enviar los datos del formulario
            console.log("Formulario de registro:", formData);
            Alert.alert("Éxito", "Datos registrados con éxito");
        }
    };

    const handleGoToLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <Header>
                    <Logo source={signupHeader} />
                    <Title>Conecta Cartagena</Title>
                    <Subtitle>Personaliza tu visita a la ciudad con IA</Subtitle>
                </Header>

                <FormContainer>
                    <StyledInput
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(value) => handleInputChange('email', value)}
                        keyboardType="email-address"
                    />
                    <StyledInput
                        placeholder="Contraseña"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(value) => handleInputChange('password', value)}
                    />
                    <StyledInput
                        placeholder="Nombre"
                        value={formData.firstName}
                        onChangeText={(value) => handleInputChange('firstName', value)}
                    />
                    <StyledInput
                        placeholder="Apellidos"
                        value={formData.lastName}
                        onChangeText={(value) => handleInputChange('lastName', value)}
                    />
                    <StyledInput
                        placeholder="Número de celular"
                        value={formData.phoneNumber}
                        onChangeText={(value) => handleInputChange('phoneNumber', value)}
                        keyboardType="phone-pad"
                    />
                    <StyledInput
                        placeholder="¿De dónde nos visita?"
                        value={formData.location}
                        onChangeText={(value) => handleInputChange('location', value)}
                    />

                    {/* Picker para seleccionar el género */}
                    <PickerContainer>
                        <Picker
                            selectedValue={formData.selectedGender}
                            onValueChange={(value) => handleInputChange('selectedGender', value)}
                            style={{ height: 50 }}
                        >
                            <Picker.Item label="Selecciona tu sexo" value="" enabled={false} />
                            <Picker.Item label="Masculino" value="male" />
                            <Picker.Item label="Femenino" value="female" />
                            <Picker.Item label="Otro" value="other" />
                        </Picker>
                    </PickerContainer>

                    <StyledInput
                        placeholder="Edad"
                        value={formData.age}
                        onChangeText={(value) => handleInputChange('age', value)}
                        keyboardType="numeric"
                    />

                    <TermsContainer>
                        <FormCheckbox
                            value={formData.isChecked}
                            onValueChange={(value) => handleInputChange('isChecked', value)}
                        />
                        <TermsText>Acepto los términos y condiciones.</TermsText>
                    </TermsContainer>

                    <SubmitButton
                        onPress={handleRegister}
                        disabled={!isButtonEnabled}
                        style={{ backgroundColor: isButtonEnabled ? '#ff9307' : '#aaaaaa' }}
                    >
                        <ButtonText>Conectar</ButtonText>
                    </SubmitButton>
                </FormContainer>

                <Footer>
                    <FooterText>¿Ya tienes una cuenta?</FooterText>
                    <LoginButtonText onPress={handleGoToLogin}><BoldText>Inicia sesión.</BoldText></ LoginButtonText>
                </Footer>
            </Container>
        </ScrollView>
    );
};

export default SignUpScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 20px;
  line-height: 22px;
`;

const FormContainer = styled.View`
  width: 100%;
  padding: 30px;
`;

const StyledInput = styled(TextInput)`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

const PickerContainer = styled.View`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  justify-content: center;
`;

const TermsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const FormCheckbox = styled(CheckBox)`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: #ccc;
  margin-right: 10px;
`;

const TermsText = styled.Text`
  font-size: 12px;
  color: #666;
`;

const SubmitButton = styled(TouchableOpacity) <{ disabled: boolean }>`
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.disabled ? '#aaaaaa' : '#d3d3d3')};
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

const LoginButtonText = styled.TouchableOpacity`
`;
