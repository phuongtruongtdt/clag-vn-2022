import {
  StyledFormControl,
  StyledLabel,
  StyledShadowInput,
  StyledTextValidator,
} from '../../../components/styles';

import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useState } from 'react';

interface State {
  fullname: string;
  personalID: string;
  phoneNumber: string;
  address: string;
}

const InformationForm = (props: { values: any; setInformationValues: any }) => {
  const { values, setInformationValues } = props;
  const handleChange = (prop: keyof State) => (e: any) => {
    setInformationValues(prop, e.target.value);
  };

  return (
    <>
      <StyledFormControl>
        <StyledLabel>Full name</StyledLabel>
        <StyledTextValidator
          onChange={handleChange('fullname')}
          name='fullname'
          value={values.fullname}
          validators={['required']}
          errorMessages={['This field is required']}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Personal ID</StyledLabel>
        <StyledTextValidator
          onChange={handleChange('personalID')}
          name='personalID'
          value={values.personalID}
          validators={['required']}
          errorMessages={['This field is required']}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Phone number</StyledLabel>
        <StyledTextValidator
          onChange={handleChange('phoneNumber')}
          name='phoneNumber'
          value={values.phoneNumber}
          validators={['required']}
          errorMessages={['This field is required']}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Address</StyledLabel>
        <StyledTextValidator
          onChange={handleChange('address')}
          name='address'
          value={values.address}
          validators={['required']}
          errorMessages={['This field is required']}
        />
      </StyledFormControl>
    </>
  );
};

export default InformationForm;
