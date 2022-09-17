import React from 'react';
import { StyledFormControl, StyledInput, StyledLabel } from '../styles';

const InformationForm = () => {
  return (
    <>
      <StyledFormControl>
        <StyledLabel>Full name</StyledLabel>
        <StyledInput id='fullname' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Personal ID</StyledLabel>
        <StyledInput id='personal-id' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Phone number</StyledLabel>
        <StyledInput id='phone-number' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Address</StyledLabel>
        <StyledInput id='address' type='text' />
      </StyledFormControl>
    </>
  );
};

export default InformationForm;
