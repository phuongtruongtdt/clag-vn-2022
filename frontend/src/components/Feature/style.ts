import { styled } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  background: 'linear-gradient(70deg, #575757, #787878);',
  padding: '2rem 4rem',
  margin: '0 4.5rem',
  borderRadius: '1.875rem',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledArrow = styled('i')(({ theme }) => ({
  color: theme.color.yellow,
  fontSize: '5rem',
  margin: '0 2rem',
}));
