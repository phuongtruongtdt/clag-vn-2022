import { styled } from '@mui/material';

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
