import React, { useCallback } from 'react'
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'

import Button from '../../components/button'
import Input from '../../components/input'

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText
} from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form onSubmit={handleSignIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />

              <Input name="password" icon="lock" placeholder="Senha" />
            </Form>
            <Button onPress={() => { }}>Entrar</Button>
            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView >

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountText>Crie uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;