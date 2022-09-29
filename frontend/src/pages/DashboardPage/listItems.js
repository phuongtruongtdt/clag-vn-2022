import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
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
import { useNavigate } from 'react-router-dom';

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
      <ListItemText primary='Statistics' />
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
