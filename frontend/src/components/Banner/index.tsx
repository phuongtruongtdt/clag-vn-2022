import { Grid } from '@mui/material';
import { StyledImage } from '../styles';
import { StyledButton, StyledIcon, StyledTitle } from './style';

const Banner = () => {
  return (
    <Grid
      container
      style={{ margin: '2rem 0', display: 'flex', alignItems: 'center' }}
    >
      <Grid xs={6} style={{ paddingLeft: '1rem' }}>
        <StyledTitle>Let's start something big with us</StyledTitle>
        <div style={{ marginTop: '1.5rem', display: 'flex' }}>
          <StyledButton isPrimary>Get Started</StyledButton>
          <StyledButton>
            <StyledIcon
              className='far fa-play-circle'
              aria-hidden='true'
            ></StyledIcon>{' '}
            <span style={{ marginLeft: '0.5rem' }}>Watch video</span>
          </StyledButton>
        </div>
      </Grid>
      <Grid xs={6}>
        <StyledImage
          style={{ height: '25rem' }}
          src={process.env.PUBLIC_URL + '/img/banner.svg'}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
