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
  const { isHomePage, isRegisterPage } = props;
  return (
    <StyledContainer
      style={{ padding: isRegisterPage ? '3rem 4rem' : '0' }}
      justify={isHomePage}
    >
      <StyledLogo href='/'>
        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} />
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
      {isHomePage && (
        <div>
          <StyledButton isPrimary href='/login'>
            Login
          </StyledButton>
          <StyledButton href='/register'>Register</StyledButton>
        </div>
      )}
    </StyledContainer>
  );
};

export default Header;
