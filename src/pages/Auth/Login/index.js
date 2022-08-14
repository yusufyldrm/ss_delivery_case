import React from 'react'
import { observer } from 'mobx-react';
import {
  Wrapper,
  Logo,
  Container,
  Description,
  Error
} from './style'
import userStore from 'store/user.store';
import { Button, TextInput } from 'components';
import { GoSearch as MailIcon } from 'react-icons/go';
import { AiFillLock as PassIcon } from 'react-icons/ai';
import {
  emailValidator,
  passwordValidator
} from 'helpers/validation';

const USER_STATE = {
  email: { value: '', error: '' },
  password: { value: '', error: '' },
  error: ''
};

const Login = observer(() => {
  const [user, setUser] = React.useState(USER_STATE);
  const [process, isProcess] = React.useState(false);

  const handleLogin = async () => {
    isProcess(true);
    const emailError = emailValidator(user.email.value);
    const passwordError = passwordValidator(user.password.value);
    if (emailError || passwordError) {
      setUser({
        ...user,
        email: { ...user.email, error: emailError },
        password: { ...user.password, error: passwordError },
      });
      isProcess(false);
      return;
    }
    const { hasError, data } = await userStore.login({
      email: user.email.value,
      password: user.password.value
    });
    if (hasError)
      setUser({ ...user, error: data })

    isProcess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: { value, error: '' }, error: '' });
  };

  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod posuere
        turpis in fringilla. Phasellus vitae velit mi. Aliquam molestie est non tristique.
      </Description>
      <Container>
        <TextInput
          type={'email'}
          label={'Email'}
          name={'email'}
          placeholder='Email'
          value={user.email.value}
          error={user.email.error}
          onChange={handleChange}
          Icon={<MailIcon size={'20px'} color={'#212121'} />}
        />

        <TextInput
          type={'password'}
          label={'Password'}
          name={'password'}
          placeholder='Password'
          value={user.password.value}
          error={user.password.error}
          onChange={handleChange}
          Icon={<PassIcon size={'20px'} color={'#212121'} />}
        />
        {user.error && <Error>Error: {user.error}</Error>}
        <Button
          onClick={handleLogin}
          isLoading={process}
        >
          Login
        </Button>
      </Container>
    </Wrapper>
  )
});

export default Login;
