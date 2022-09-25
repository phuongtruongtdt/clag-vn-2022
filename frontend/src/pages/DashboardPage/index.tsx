import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { mainListItems, secondaryListItems } from './listItems';
import { StyledDivider, StyledLogo, StyledTitle } from './style';
import TransactionHistory from './TransactionHistory';

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    height: '100%',
    background: theme.color.primary,
    padding: '2rem 0 0 1rem',
    color: 'white',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant='permanent' open={open}>
          <StyledLogo href='/'>
            <img
              style={{ width: '3rem' }}
              src={process.env.PUBLIC_URL + '/img/logo-dashboard.svg'}
            />
            <StyledTitle>GBank Co.</StyledTitle>
          </StyledLogo>
          <List component='nav'>
            {mainListItems}
            <StyledDivider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box style={{ width: '100%' }} component='main'>
          <TransactionHistory />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function DashboardPage() {
  return <DashboardContent />;
}
