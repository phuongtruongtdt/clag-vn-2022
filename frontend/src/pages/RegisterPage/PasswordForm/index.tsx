import { useState, useEffect } from 'react';
import { InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import {
  StyledFormControl,
  StyledIconButton,
  StyledLabel,
  StyledShadowInput,
  StyledTextValidator,
} from '../../../components/styles';
import { StyledFormControlLabel, StyledList } from './style';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}
interface State {
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const PasswordForm = (props: {
  values: any;
  setPasswordValues: any;
  termsError: any;
  setTermsError: any;
  passwordError: any;
  setPasswordError: any;
  confirmPassError: any;
  setConfirmPassError: any;
}) => {
  const {
    values,
    setPasswordValues,
    termsError,
    setTermsError,
    confirmPassError,
    setConfirmPassError,
    passwordError,
    setPasswordError,
  } = props;
  const [state, setState] = useState<State>({
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleValidatePassword = (password: string) => {
    if (password.length < 8)
      setPasswordError('Password must have at least 8 characters');
    else if (password.match('[a-z].*[A-Z]|[A-Z].*[a-z]') === null) {
      setPasswordError(
        'Password must have both uppercase and lowercase letters'
      );
    } else if (password.match(/\d+/) === null) {
      setPasswordError('Password must have at least a number');
    } else if (
      password.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@.]/g) === null
    ) {
      setPasswordError('Password must have at least a special character');
    } else setPasswordError('');
  };

  const handleValidateConfirmPassword = (confirmPassword: string) => {
    if (confirmPassword !== values.password) {
      setConfirmPassError('Confirm password does not match');
    } else setConfirmPassError('');
  };

  const handleChange =
    (prop: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (prop === 'password') handleValidatePassword(event.target.value);
      if (prop === 'confirmPassword')
        handleValidateConfirmPassword(event.target.value);
      setPasswordValues(prop, event.target.value);
    };

  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setState({
      ...state,
      showConfirmPassword: !state.showConfirmPassword,
    });
  };

  const handleCheck = (e: any, checked: boolean) => {
    setPasswordValues('agreeToTerms', checked);
    if (checked) setTermsError('');
  };

  return (
    <>
      <StyledFormControl>
        <StyledLabel>Email</StyledLabel>
        <StyledTextValidator
          onChange={handleChange('email')}
          name='email'
          value={values.email}
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Password</StyledLabel>
        {/* <StyledTextValidator
          onChange={handleChange('password')}
          name='password'
          value={values.password}
          validators={['required']}
          errorMessages={['This field is required']}
        /> */}
        <StyledShadowInput
          id='password'
          type={state.showPassword ? 'text' : 'password'}
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
                {state.showPassword ? <VisibilityOff /> : <Visibility />}
              </StyledIconButton>
            </InputAdornment>
          }
          label='Password'
        />
        <p style={{ color: 'red' }}>{passwordError}</p>
        <StyledList>
          <li>At least 8 characters</li>
          <li>A mixture of both uppercase and lowercase letters</li>
          <li>A mixture of letters and numbers</li>
          <li>Inclusion of at least one special character, e.g., ! @ # ? ]</li>
        </StyledList>
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Confirmation Password</StyledLabel>
        {/* <StyledTextValidator
          onChange={handleChange('confirmPassword')}
          name='confirmPassword'
          value={values.confirmPassword}
          validators={['required', 'isPasswordMatch']}
          errorMessages={[
            'This field is required',
            'Confirmation password does not match',
          ]}
        /> */}
        <StyledShadowInput
          id='confirmPassword'
          type={state.showConfirmPassword ? 'text' : 'password'}
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
          endAdornment={
            <InputAdornment position='end'>
              <StyledIconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </StyledIconButton>
            </InputAdornment>
          }
          label='Confirm Password'
        />
        <p style={{ color: 'red' }}>{confirmPassError}</p>
      </StyledFormControl>
      <StyledFormControlLabel
        control={<Checkbox />}
        label='I agree to the terms'
        onChange={handleCheck}
      />
      <p style={{ color: 'red' }}>{termsError}</p>
    </>
  );
};

export default PasswordForm;
