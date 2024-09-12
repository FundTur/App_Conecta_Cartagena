import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { signupHeader } from '../../assets/images';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <Logo source={signupHeader} />
          <Title>Conecta Cartagena</Title>
          <Subtitle>Personaliza tu visita a la ciudad con IA</Subtitle>
        </Header>

        <FormContainer>
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Contraseña" secureTextEntry />
          <StyledInput placeholder="Nombre" />
          <StyledInput placeholder="Apellidos" />
          <StyledInput placeholder="Número de celular" keyboardType="phone-pad" />
          <StyledInput placeholder="¿De dónde nos visita?" />

          {/* Picker para seleccionar el género */}
          <PickerContainer>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Selecciona tu sexo" value="" />
              <Picker.Item label="Masculino" value="male" />
              <Picker.Item label="Femenino" value="female" />
              <Picker.Item label="Otro" value="other" />
            </Picker>
          </PickerContainer>

          <StyledInput placeholder="Edad" keyboardType="numeric" />

          <TermsContainer>
            <FormCheckbox value={isChecked} onValueChange={setIsChecked} />
            <TermsText>Acepto los términos y condiciones.</TermsText>
          </TermsContainer>
          <SubmitButton>
            <ButtonText>Conectar</ButtonText>
          </SubmitButton>
        </FormContainer>

        <Footer>
          <FooterText>¿Ya tienes una cuenta? <BoldText>Inicia sesión.</BoldText></FooterText>
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

// Container para el Picker
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

const SubmitButton = styled(TouchableOpacity)`
  background-color: #d3d3d3;
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
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #666;
`;

const BoldText = styled.Text`
  font-weight: bold;
  color: #000;
`;
