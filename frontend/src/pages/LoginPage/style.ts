import { IconButton, InputLabel, OutlinedInput, styled } from '@mui/material';
import { StyledButton } from '../../components/styles';

export const StyledTitle = styled('p')(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.color.black,
  fontSize: '1.75rem',
  margin: '2rem 0',
}));

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '1rem',
  backgroundColor: theme.color.green_light,
  '& > fieldset': {
    border: '0',
  },
  '& > input': {
    padding: '1rem 1rem 0.5rem 1rem',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
    fontSize: '1rem',
    '&:-internal-autofill-selected': {
      backgroundColor: `${theme.color.green_light}!important`,
    },
    '&:focus': {
      color: theme.color.black,
    },
  },
}));

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.3)',
  fontWeight: '300',
  fontSize: '1.25rem',
  padding: '0 1rem',
}));

export const StyledLoginButton = styled(StyledButton)(({ theme }) => ({
  display: 'block',
  width: '10rem',
  margin: '0 auto',
  background: theme.color.green_bold,
  borderRadius: '1rem',
  marginTop: '2rem',
  padding: '0.5rem 2.25rem',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const StyledLinkContainer = styled('div')(({ theme }) => ({
  width: '50%',
  margin: '2rem auto 0',
  padding: '1rem 2rem',
  borderTop: '1px solid rgba(0, 0, 0, 0.2)',
}));

export const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.color.black,
}));
