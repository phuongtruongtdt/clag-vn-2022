import {
  StyledFormControl,
  StyledLabel,
  StyledShadowInput,
} from '../../../components/styles';

const InformationForm = () => {
  return (
    <>
      <StyledFormControl>
        <StyledLabel>Full name</StyledLabel>
        <StyledShadowInput id='fullname' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Personal ID</StyledLabel>
        <StyledShadowInput id='personal-id' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Phone number</StyledLabel>
        <StyledShadowInput id='phone-number' type='text' />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Address</StyledLabel>
        <StyledShadowInput id='address' type='text' />
      </StyledFormControl>
    </>
  );
};

export default InformationForm;
