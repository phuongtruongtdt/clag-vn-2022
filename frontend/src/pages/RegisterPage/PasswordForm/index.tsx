import { useState } from 'react';
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
} from '../../../components/styles';
import { StyledFormControlLabel, StyledList } from './style';

interface State {
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const PasswordForm = () => {
  const [values, setValues] = useState<State>({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
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

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  return (
    <>
      <StyledFormControl>
        <StyledLabel>Email</StyledLabel>
        <StyledShadowInput id='email' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Password</StyledLabel>
        <StyledShadowInput
          id='password'
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
        <StyledList>
          <li>At least 8 characters</li>
          <li>A mixture of both uppercase and lowercase letters</li>
          <li>A mixture of letters and numbers</li>
          <li>Inclusion of at least one special character, e.g., ! @ # ? ]</li>
        </StyledList>
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Confirmation Password</StyledLabel>
        <StyledShadowInput
          id='password'
          type={values.showConfirmPassword ? 'text' : 'password'}
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
                {values.showConfirmPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </StyledIconButton>
            </InputAdornment>
          }
          label='Confirm Password'
        />
      </StyledFormControl>
      <StyledFormControlLabel
        control={<Checkbox />}
        label='I agree to the terms'
      />
    </>
  );
};

export default PasswordForm;
