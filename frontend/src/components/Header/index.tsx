import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../styles';
import {
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledTitle,
} from './style';

interface HeaderProps {
  isHomePage?: boolean;
  isRegisterPage?: boolean;
}
const Header = (props: HeaderProps) => {
  const isLoggedIn = !!JSON.parse(localStorage.getItem('isLoggedIn') as any);
  const username = localStorage.getItem('username');
  const { isHomePage, isRegisterPage } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <StyledContainer
      style={{ padding: isRegisterPage ? '2rem 4rem 1.5rem 4rem' : '0' }}
      justify={isHomePage}
    >
      <StyledLogo href='/'>
        <img
          style={{ width: '4rem' }}
          src={process.env.PUBLIC_URL + '/img/logo.svg'}
        />
        <StyledTitle>GBank Co.</StyledTitle>
      </StyledLogo>
      <StyledList>
        <StyledListItem>
          <StyledLink href='#'>Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href='#'>About Us</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href='#'>Pricing</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href='#'>Blog</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href='#'>Contact</StyledLink>
        </StyledListItem>
      </StyledList>
      {isLoggedIn ? (
        <>
          <Button
            style={{
              border: '1px solid black',
              borderRadius: '1rem',
              padding: '0.5rem 1rem',
              color: '#1b7357',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1rem',
            }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {username}
            <span
              style={{ marginLeft: '0.5rem' }}
              className='fas fa-user'
            ></span>
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              style={{ fontSize: '1rem', color: '#1b7357!important' }}
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              style={{ fontSize: '1rem', color: '#1b7357!important' }}
              onClick={handleLogout}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          {isHomePage && (
            <div>
              <StyledButton isPrimary href='/login'>
                Login
              </StyledButton>
              <StyledButton href='/register'>Register</StyledButton>
            </div>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default Header;
