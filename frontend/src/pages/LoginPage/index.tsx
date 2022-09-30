import { FormControl, Grid, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Feature from '../../components/Feature';
import Header from '../../components/Header';
import {
  PageContainer,
  StyledIconButton,
  StyledImage,
} from '../../components/styles';
import { useState } from 'react';
import {
  StyledErrorInput,
  StyledInput,
  StyledLink,
  StyledLinkContainer,
  StyledLoginButton,
  StyledTitle,
} from './style';
import axios from 'axios';
import querystring from 'querystring';
import { useNavigate } from 'react-router-dom';

interface State {
  password: string;
  username: string;
  showPassword: boolean;
}

const LoginPage = () => {
  const [values, setValues] = useState<State>({
    password: '',
    username: '',
    showPassword: false,
  });
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/clients/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: querystring.stringify({
        email: values.username,
        psword: values.password,
      }),
    })
      .then((response) => {
        if (response.data.error_code === 0) {
          setLoginError(false);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('ownerId', response.data.id);
          navigate('/');
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => error);
  };

  return (
    <PageContainer>
      <Header />
      <Grid container style={{ marginTop: '3rem' }}>
        <Grid xs={6} style={{ textAlign: 'center' }}>
          <StyledTitle>
            <span style={{ fontSize: '2.5rem' }}>WELCOME, </span>
            please login.
          </StyledTitle>
          <FormControl style={{ width: '60%' }}>
            {loginError ? (
              <StyledErrorInput
                id='email'
                placeholder='Enter your email or phone number'
                type={'text'}
                value={values.username}
                onChange={handleChange('username')}
              />
            ) : (
              <StyledInput
                id='email'
                placeholder='Enter your email or phone number'
                type={'text'}
                value={values.username}
                onChange={handleChange('username')}
              />
            )}
          </FormControl>
          <FormControl style={{ width: '60%', marginTop: '2rem' }}>
            {loginError ? (
              <StyledErrorInput
                id='adornment-password'
                placeholder='Password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position='end'>
                    <StyledIconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </StyledIconButton>
                  </InputAdornment>
                }
                label='Password'
              />
            ) : (
              <StyledInput
                id='adornment-password'
                placeholder='Password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position='end'>
                    <StyledIconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </StyledIconButton>
                  </InputAdornment>
                }
                label='Password'
              />
            )}
            {loginError && (
              <p
                style={{
                  color: 'red',
                  textAlign: 'left',
                  marginTop: '1rem',
                  marginLeft: '0.25rem',
                }}
              >
                Fail to login.
              </p>
            )}
          </FormControl>
          <StyledLoginButton onClick={handleLogin}>Login</StyledLoginButton>
          <StyledLinkContainer>
            <StyledLink href='/forgot-password'>Forgot password?</StyledLink>
            <p>
              Do not have an account?{' '}
              <StyledLink style={{ fontWeight: 'bold' }} href='/register'>
                Register.
              </StyledLink>
            </p>
          </StyledLinkContainer>
        </Grid>
        <Grid xs={6}>
          <StyledImage
            style={{ height: '25rem' }}
            src={process.env.PUBLIC_URL + '/img/banner.svg'}
          />
        </Grid>
      </Grid>
      <Feature />
    </PageContainer>
  );
};

export default LoginPage;
