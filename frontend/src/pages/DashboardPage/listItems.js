import * as React from 'react';
import { styled } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { StyledListItemIcon } from '../../components/styles';

const StyledListItemText = styled(ListItemText)({
  '& span': {
    fontWeight: 'bold',
  },
});

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <StyledListItemIcon>
        <DashboardOutlinedIcon />
      </StyledListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton>
      <StyledListItemIcon>
        <AccountBalanceWalletOutlinedIcon />
      </StyledListItemIcon>
      <ListItemText primary='My Wallets' />
    </ListItemButton>
    <ListItemButton>
      <StyledListItemIcon>
        <LocalActivityOutlinedIcon />
      </StyledListItemIcon>
      <ListItemText primary='Activity' />
    </ListItemButton>
    <ListItemButton>
      <StyledListItemIcon>
        <QueryStatsIcon />
      </StyledListItemIcon>
      <StyledListItemText primary='Statistics' />
    </ListItemButton>
    <ListItemButton>
      <StyledListItemIcon>
        <NotificationsIcon />
      </StyledListItemIcon>
      <ListItemText primary='Notifications' />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (username, handleLogout) => {
  return (
    <React.Fragment>
      <ListItemButton>
        <StyledListItemIcon>
          <HelpOutlineIcon />
        </StyledListItemIcon>
        <ListItemText primary='Get Help' />
      </ListItemButton>
      <ListItemButton>
        <StyledListItemIcon>
          <SettingsOutlinedIcon />
        </StyledListItemIcon>
        <ListItemText primary='Settings' />
      </ListItemButton>
      <ListItemButton>
        <StyledListItemIcon>
          <PersonOutlinedIcon />
        </StyledListItemIcon>
        <ListItemText primary={username} />
      </ListItemButton>
      <ListItemButton onClick={handleLogout}>
        <StyledListItemIcon>
          <LogoutOutlinedIcon />
        </StyledListItemIcon>
        <ListItemText primary='Logout' />
      </ListItemButton>
    </React.Fragment>
  );
};
