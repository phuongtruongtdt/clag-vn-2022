import { Box, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import Header from '../../components/Header';
import InformationForm from './InformationForm';
import { StyledArrow } from '../../components/styles';
import {
  StyledContainer,
  StyledTitle,
  StyledNextButton,
  StyledNavigationContainer,
} from './style';
import PasswordForm from './PasswordForm';
import VerificationForm from './VerificationForm';
interface State {
  step: 'info' | 'password' | 'verification';
}
const RegisterPage = () => {
  const [values, setValues] = useState<State>({
    step: 'info',
  });
  const handleNext = useCallback(() => {
    if (values.step === 'info') setValues({ step: 'password' });
    if (values.step === 'password') setValues({ step: 'verification' });
  }, [values]);
  return (
    <Box>
      <Header isRegisterPage />
      <StyledTitle>REGISTER HERE</StyledTitle>
      <StyledContainer
        style={{ backgroundImage: `url('/img/information.png')` }}
        container
      >
        <Grid style={{ display: 'flex', alignItems: 'center' }} xs={6}>
          <p style={{ fontSize: '3rem' }}>
            {values.step === 'verification' ? (
              <>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    color: '#AEE5D4',
                  }}
                >
                  Identity
                </span>
                <br />
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    color: '#AEE5D4',
                  }}
                >
                  Verification
                </span>
              </>
            ) : (
              <>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    color: '#AEE5D4',
                  }}
                >
                  Input
                </span>
                <br />
                <span style={{ fontWeight: '300' }}>your</span>
                <br />
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    color: '#AEE5D4',
                  }}
                >
                  information
                </span>
              </>
            )}
          </p>
        </Grid>
        <Grid xs={6}>
          {values.step === 'info' && <InformationForm />}
          {values.step === 'password' && <PasswordForm />}
          {values.step === 'verification' && <VerificationForm />}
        </Grid>
      </StyledContainer>
      <StyledNavigationContainer>
        <StyledNextButton onClick={handleNext}>
          Next
          <StyledArrow />
          <StyledArrow style={{ marginLeft: '-0.25rem' }} />
        </StyledNextButton>
      </StyledNavigationContainer>
      <div className='content-wrap'>
        <i className='fas fa-user-alt icon'></i>
        <span className='icon'>
          <img
            style={{ width: '100%', height: '100%' }}
            src={process.env.PUBLIC_URL + '/img/lock.svg'}
          />
        </span>
        <img
          src={process.env.PUBLIC_URL + '/img/checkmark.svg'}
          className='icon'
        />
      </div>
    </Box>
  );
};

export default RegisterPage;
