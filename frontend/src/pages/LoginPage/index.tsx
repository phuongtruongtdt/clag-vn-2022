import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Feature from '../../components/Feature';
import Header from '../../components/Header';
import {
  PageContainer,
  StyledButton,
  StyledImage,
} from '../../components/styles';
import { useState } from 'react';
import {
  StyledIconButton,
  StyledInput,
  StyledLabel,
  StyledLink,
  StyledLinkContainer,
  StyledLoginButton,
  StyledTitle,
} from './style';

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
            <StyledInput
              id='email'
              placeholder='Enter your email or phone number'
              type={'text'}
              value={values.username}
              onChange={handleChange('username')}
            />
          </FormControl>
          <FormControl style={{ width: '60%', marginTop: '2rem' }}>
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
          </FormControl>
          <StyledLoginButton>Login</StyledLoginButton>
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
          <StyledImage src={process.env.PUBLIC_URL + '/img/banner.svg'} />
        </Grid>
      </Grid>
      <Feature />
    </PageContainer>
  );
};

export default LoginPage;
