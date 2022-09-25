import { styled } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  color: '#b3b3b3',
  fontWeight: '500',
  fontSize: '1.15rem',
}));

export const StyledIcon = styled('img')({
  display: 'inline-block',
  width: '2rem',
  height: 'fit-content',
  marginRight: '1.5rem',
});

export const StyledTitle = styled('span')(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1.3rem',
  color: theme.color.white,
}));

export const StyledRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});
