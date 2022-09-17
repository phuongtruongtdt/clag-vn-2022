import { Grid } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { StyledButton, StyledIcon, StyledImage, StyledTitle } from './style';

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
              className='fa fa-play-circle-o'
              aria-hidden='true'
            ></StyledIcon>{' '}
            <span style={{ marginLeft: '0.5rem' }}>Watch video</span>
          </StyledButton>
        </div>
      </Grid>
      <Grid xs={6}>
        <StyledImage src={process.env.PUBLIC_URL + '/img/banner.svg'} />
      </Grid>
    </Grid>
  );
};

export default Banner;
