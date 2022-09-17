import { FormControl, OutlinedInput, styled } from '@mui/material';
import { theme } from '../theme';

export const PageContainer = styled('div')({
  padding: '3rem 4rem',
});

export const StyledImage = styled('img')({
  display: 'block',
  width: '80%',
  marginLeft: 'auto',
});

export const StyledButton = styled('a')<{ isPrimary?: boolean }>`
  color: ${(props) => (props.isPrimary ? '#1b7357' : '#fff')};
  background: ${(props) => (props.isPrimary ? 'transparent' : '#1b7357')};
  margin-right: ${(props) => (props.isPrimary ? '0.25rem' : '0')};
  padding: ${(props) => (props.isPrimary ? '0.75rem 2.25rem' : '1rem 2.25rem')};
  border-radius: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  border: ${(props) => (props.isPrimary ? '4px solid #1b7357' : 'none')};
`;

export const StyledArrow = styled('span')({
  width: '20px',
  height: '20px',
  display: 'inline-block',
  position: 'relative',
  '&:after': {
    content: "''",
    height: '12px',
    width: '12px',
    top: '0px',
    borderWidth: '7px 7px 0 0',
    borderColor: theme.color.primary,
    borderStyle: 'solid',
    transform: 'matrix(0.71, 0.71, -0.71, 0.71, 0, 0)',
    position: 'absolute',
  },
});

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  marginBottom: '1rem',
});

export const StyledLabel = styled('label')(({ theme }) => ({
  marginBottom: '0.5rem',
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
