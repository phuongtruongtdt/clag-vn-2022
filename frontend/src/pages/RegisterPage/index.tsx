import { Box, Grid } from '@mui/material';
import { useCallback, useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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

interface InformationValues {
  fullname: string;
  personalID: string;
  phoneNumber: string;
  address: string;
}

interface PasswordValues {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface State {
  step: 'info' | 'password' | 'verification';
  informationValues: InformationValues;
  passwordValues: PasswordValues;
}

const RegisterPage = () => {
  const [values, setValues] = useState<State>({
    step: 'info',
    informationValues: {
      fullname: '',
      personalID: '',
      phoneNumber: '',
      address: '',
    },
    passwordValues: {
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
  });
  const [termsError, setTermsError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');
  const handleNext = useCallback(
    (e: any) => {
      if (values.step === 'info') setValues({ ...values, step: 'password' });
      if (values.step === 'password') {
        if (passwordError || confirmPassError) return;
        if (!values.passwordValues.agreeToTerms) {
          setTermsError('You must agree to terms before continue');
        } else {
          setValues({ ...values, step: 'verification' });
        }
      }
    },
    [confirmPassError, passwordError, values]
  );

  const setInformationValues = (prop: keyof InformationValues, value: any) => {
    setValues({
      ...values,
      informationValues: { ...values.informationValues, [prop]: value },
    });
  };
  const setPasswordValues = (prop: keyof PasswordValues, value: any) => {
    setValues({
      ...values,
      passwordValues: { ...values.passwordValues, [prop]: value },
    });
  };

  // useEffect(() => {
  //   ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
  //     if (value !== values.passwordValues.password) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [values.passwordValues.password]);
  return (
    <Box>
      <Header isRegisterPage />
      <StyledTitle>REGISTER HERE</StyledTitle>
      <ValidatorForm onSubmit={handleNext}>
        <StyledContainer
          style={{ backgroundImage: `url('/img/information.png')` }}
          container
        >
          <Grid style={{ display: 'flex', alignItems: 'center' }} xs={6}>
            <p style={{ fontSize: '2.5rem' }}>
              {values.step === 'verification' ? (
                <>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '3rem',
                      color: '#AEE5D4',
                    }}
                  >
                    Identity
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '3rem',
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
                      fontSize: '3rem',
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
                      fontSize: '3rem',
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
            {values.step === 'info' && (
              <InformationForm
                values={values.informationValues}
                setInformationValues={setInformationValues}
              />
            )}
            {values.step === 'password' && (
              <PasswordForm
                values={values.passwordValues}
                setPasswordValues={setPasswordValues}
                termsError={termsError}
                setTermsError={setTermsError}
                passwordError={passwordError}
                setPasswordError={setPasswordError}
                confirmPassError={confirmPassError}
                setConfirmPassError={setConfirmPassError}
              />
            )}
            {values.step === 'verification' && (
              <VerificationForm email={values.passwordValues.email} />
            )}
          </Grid>
        </StyledContainer>
        <StyledNavigationContainer>
          <StyledNextButton type='submit'>
            Next
            <StyledArrow />
            <StyledArrow style={{ marginLeft: '-0.25rem' }} />
          </StyledNextButton>
        </StyledNavigationContainer>
      </ValidatorForm>

      <div className='content-wrap'>
        <i
          style={{ color: values.step === 'info' ? '#1b7357' : 'black' }}
          className='fas fa-user-alt icon'
        ></i>
        <svg
          className='icon'
          width='28'
          height='36'
          viewBox='0 0 28 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_286_844)'>
            <path
              d='M24.931 16.8709H24.1055V13.1394C24.1055 7.56901 19.6005 3.034 14.0704 3.034C8.53491 3.034 4.03529 7.56901 4.03529 13.1448V16.8763H3.20982C1.52651 16.8709 0.156128 18.2514 0.156128 19.95V34.5526C0.156128 36.2512 1.52651 37.6317 3.20982 37.6317H24.9256C26.6089 37.6317 27.9793 36.2512 27.9793 34.5526V19.95C27.9847 18.2514 26.6143 16.8709 24.931 16.8709ZM15.3491 27.4508V29.3597C15.3491 29.6455 15.1225 29.8774 14.8365 29.8774H13.2989C13.0183 29.8774 12.7863 29.6455 12.7863 29.3597V27.4508C12.085 27.014 11.6156 26.2429 11.6156 25.3531C11.6156 23.9889 12.7108 22.8834 14.065 22.8834C15.4192 22.8834 16.5144 23.9889 16.5144 25.3531C16.5198 26.2429 16.0451 27.014 15.3491 27.4508ZM19.703 16.8709H8.4324V13.1394C8.4324 10.0064 10.9574 7.46116 14.0704 7.46116C17.178 7.46116 19.703 10.0064 19.703 13.1394V16.8709Z'
              fill={values.step === 'password' ? '#1b7357' : 'black'}
            />
          </g>
          <defs>
            <clipPath id='clip0_286_844'>
              <rect
                width='27.8285'
                height='34.5977'
                fill='white'
                transform='translate(0.156128 0.777618)'
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          className='icon'
          width='28'
          height='29'
          viewBox='0 0 28 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_286_849)'>
            <path
              d='M26.0288 0.298828C25.3492 0.298828 24.4847 0.383143 23.463 0.551772C22.3998 0.725086 21.6647 0.926505 21.2209 1.1654C20.7771 1.40429 20.1114 2.00386 19.1822 2.99222C18.2808 3.95247 17.1296 5.45608 15.752 7.46558C14.379 9.46571 13.1724 11.4143 12.1554 13.2552C11.2447 14.904 10.3201 16.7121 9.39551 18.642C8.7483 17.8082 8.06411 17.1384 7.36142 16.6512C6.4692 16.0282 5.61396 15.7144 4.82344 15.7144C4.01443 15.7144 3.13146 16.0704 2.19763 16.7777C1.22219 17.5178 0.727539 18.3562 0.727539 19.2696C0.727539 19.9582 1.14822 20.7592 2.01733 21.7241C3.27939 23.1247 4.29643 24.4269 5.04534 25.5933C5.60009 26.4598 5.9838 27.0079 6.21032 27.2655C6.4692 27.5559 6.79743 27.7761 7.19038 27.9213C7.56483 28.0571 8.18893 28.1274 9.09964 28.1274C10.3478 28.1274 11.1984 27.9915 11.6977 27.7152C12.197 27.4388 12.5946 27.0407 12.8719 26.5441C13.1262 26.0945 13.5191 25.1904 14.0785 23.7899C15.47 20.2721 17.3654 16.595 19.7046 12.8524C22.0392 9.12377 24.3275 6.19618 26.5003 4.16325C27.0319 3.67142 27.3602 3.32479 27.522 3.06248C27.7069 2.77206 27.7993 2.43012 27.7993 2.0507C27.7993 1.57292 27.6329 1.15603 27.3047 0.818769C26.9811 0.472142 26.5512 0.298828 26.0288 0.298828Z'
              fill={values.step === 'verification' ? '#1b7357' : 'black'}
            />
          </g>
          <defs>
            <clipPath id='clip0_286_849'>
              <rect
                width='27.0764'
                height='27.8285'
                fill='white'
                transform='translate(0.727539 0.298828)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Box>
  );
};

export default RegisterPage;
