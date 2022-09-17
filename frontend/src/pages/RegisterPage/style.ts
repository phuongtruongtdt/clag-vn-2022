import { FormControl, Grid, OutlinedInput, styled } from '@mui/material';
import { StyledButton } from '../../components/styles';

export const StyledTitle = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '2rem',
}));

export const StyledContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.color.primary,
  color: theme.color.white,
  padding: '4rem 10rem',
  backgroundPositionX: '25%',
  backgroundPositionY: 'center',
  backgroundRepeat: 'no-repeat',
}));

export const StyledNavigationContainer = styled('div')({
  marginTop: '2rem',
});

export const StyledNextButton = styled(StyledButton)(({ theme }) => ({
  background: 'transparent',
  border: '2px solid black',
  color: theme.color.black,
  padding: '0.5rem 1rem',
  borderRadius: '1.25rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  margin: '0 auto',
  '&:hover': {
    cursor: 'pointer',
  },
}));
