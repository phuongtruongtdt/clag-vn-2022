import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { StyledNotification, StyledResendButton } from './style';
import { StyledContainer } from './style';

const VerificationForm = (props: { email: any }) => {
  const { email } = props;
  return (
    <StyledContainer>
      <EmailIcon />
      <StyledNotification style={{ marginBottom: '1.5rem' }}>
        Email has been sent to <span>{email}</span> with further instructions.
      </StyledNotification>
      <StyledResendButton>Resend email</StyledResendButton>
    </StyledContainer>
  );
};

export default VerificationForm;
