import { styled } from '@mui/material';
import { StyledButton } from '../../../components/styles';

export const StyledContainer = styled('div')({
  textAlign: 'center',
  padding: '6rem 0',
});

export const StyledNotification = styled('p')(({ theme }) => ({
  maxWidth: '14rem',
  margin: '0 auto 1.5rem',
  '& > span': {
    color: theme.color.yellow,
    fontStyle: 'italic',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const StyledResendButton = styled(StyledButton)(({ theme }) => ({
  color: theme.color.yellow,
  border: `1px solid ${theme.color.yellow}`,
  background: 'none',
  padding: '0.25rem 0.75rem',
  fontSize: '1.25rem',
}));
