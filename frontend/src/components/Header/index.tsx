
import { StyledButton, StyledContainer, StyledLink, StyledList, StyledListItem, StyledLogo, StyledTitle } from './style'

const Header = () => {
  return (
    <StyledContainer>
        <StyledLogo href='/'>
            <img src={process.env.PUBLIC_URL + "/img/logo.svg"}/>
           <StyledTitle>GBank Co.</StyledTitle>
        </StyledLogo>
        <StyledList>
            <StyledListItem><StyledLink href="#">Home</StyledLink></StyledListItem>
            <StyledListItem><StyledLink href="#">About Us</StyledLink></StyledListItem>
            <StyledListItem><StyledLink href="#">Pricing</StyledLink></StyledListItem>
            <StyledListItem><StyledLink href="#">Blog</StyledLink></StyledListItem>
            <StyledListItem><StyledLink href="#">Contact</StyledLink></StyledListItem>
        </StyledList>
        <div>
            <StyledButton isPrimary>Login</StyledButton>
            <StyledButton>Register</StyledButton>
        </div>
    </StyledContainer>
  )
}

export default Header