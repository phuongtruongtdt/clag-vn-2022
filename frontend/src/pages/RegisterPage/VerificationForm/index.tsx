import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { StyledNotification, StyledResendButton } from './style';
import { StyledContainer } from './style';

const VerificationForm = () => {
  return (
    <StyledContainer>
      <EmailIcon />
      <StyledNotification style={{ marginBottom: '1.5rem' }}>
        Email has been sent to <span>abcd@gmail.com</span> with further
        instructions.
      </StyledNotification>
      <StyledResendButton>Resend email</StyledResendButton>
    </StyledContainer>
  );
};

export default VerificationForm;
