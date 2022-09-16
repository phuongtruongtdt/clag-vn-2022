import { styled } from '@mui/material';
export const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const StyledLogo = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&: hover': {
    cursor: 'pointer',
  },
});

export const StyledList = styled('ul')({
  display: 'inline-flex',
  listStyle: 'none',
});

export const StyledListItem = styled('li')(({ theme }) => ({
  margin: '0 2rem',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.color.primary,
  fontSize: '1.5rem',
}));

export const StyledLink = styled('a')(({ theme }) => ({
  color: theme.color.secondary,
  textDecoration: 'none',
}));

export const StyledButton = styled('button')<{ isPrimary?: boolean }>`
  color: ${(props) => (props.isPrimary ? '#1b7357' : '#fff')};
  background: ${(props) => (props.isPrimary ? 'transparent' : '#1b7357')};
  margin-right: ${(props) => (props.isPrimary ? '0.25rem' : '0')};
  padding: ${(props) => (props.isPrimary ? '0.75rem 2.25rem' : '1rem 2.25rem')};
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  border: ${(props) => (props.isPrimary ? '4px solid #1b7357' : 'none')};
`;

export const StyledTitle = styled('span')(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: '1.5rem',
  fontSize: '2rem',
}));
