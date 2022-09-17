import { styled } from '@mui/material';

export const StyledTitle = styled('h1')(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '6rem',
  lineHeight: '1.2',
}));

export const StyledButton = styled('button')<{ isPrimary?: boolean }>`
  color: ${(props) => (props.isPrimary ? '#fff' : '#212121')};
  background: ${(props) => (props.isPrimary ? '#1b7357' : 'transparent')};
  margin-right: ${(props) => (props.isPrimary ? '0.5rem' : '0')};
  padding: 0.25rem 2rem;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  display: ${(props) => (props.isPrimary ? 'inline' : 'inline-flex')};
  align-items: center;
`;

export const StyledIcon = styled('i')(({ theme }) => ({
  color: theme.color.yellow,
  fontSize: '2.5rem',
}));

export const StyledImage = styled('img')({
  display: 'block',
  width: '80%',
  marginLeft: 'auto',
});
