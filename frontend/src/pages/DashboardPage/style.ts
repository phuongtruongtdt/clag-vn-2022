import { styled } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export const StyledNav = styled(List)(({ theme }) => ({
  background: theme.color.primary,
}));

export const StyledLogo = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&: hover': {
    cursor: 'pointer',
  },
  marginBottom: '1rem',
});

export const StyledTitle = styled('span')(({ theme }) => ({
  color: theme.color.white,
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: '1.5rem',
  fontSize: '1rem',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.color.white,
  width: '70%',
  marginLeft: '1rem',
}));
