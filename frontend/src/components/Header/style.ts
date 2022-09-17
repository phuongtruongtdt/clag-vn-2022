import { styled } from '@mui/material';
export const StyledContainer = styled('div')<{ justify?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.justify ? 'space-between' : 'none')};
  align-items: center;
`;
export const StyledLogo = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&: hover': {
    cursor: 'pointer',
  },
});

export const StyledList = styled('ul')<{ flex?: boolean }>`
  display: inline-flex;
  list-style: none;
  margin-left: ${(props) => (props.flex ? '0' : '5rem')};
`;

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

export const StyledTitle = styled('span')(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: '1.5rem',
  fontSize: '2rem',
}));
