import { Grid } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { StyledButton, StyledTitle } from './style'

const Banner = () => {
  return (
    <Grid container style={{marginTop: '2rem'}}>
        <Grid xs={6} style={{paddingLeft: '1rem'}}>
            <StyledTitle>Let's start something big with us</StyledTitle>
            <div style={{marginTop: '1.5rem', display: 'flex'}}>
                <StyledButton isPrimary>Get Started</StyledButton>
                <StyledButton><PlayCircleIcon/> <span style={{marginLeft: '0.5rem'}}>Watch video</span></StyledButton>
            </div>
        </Grid>
        <Grid xs={6}>
            <img src={process.env.PUBLIC_URL + "/img/banner.svg"}/>
        </Grid>
    </Grid>
  )
}

export default Banner