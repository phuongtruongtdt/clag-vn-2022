import {
  Grid,
  styled,
  FormControl,
  TextField,
  Button,
  Menu,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Map from 'react-map-gl';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: '500',
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  margin: '1rem 0',
  '& input': {
    padding: '14px',
  },
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  marginBottom: '1rem',
  '& input': {
    padding: '14px',
  },
}));

export const StyledSelectContainer = styled(FormControl)(({ theme }) => ({
  marginBottom: '1rem',
  '& > div > div': {
    padding: '14px',
  },
}));

export const StyledTextField = styled(TextField)({
  width: '100%',
});

export const StyledMap = styled(Map)({
  height: '100vh',
});

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  background: theme.color.primary,
  color: theme.color.white,
  width: '100%',
  fontFamily: 'Inter',
  padding: '13px 8px',
  '&:hover': {
    background: theme.color.primary,
  },
}));

export const StyledMenu = styled(Menu)({
  width: '300.5px',
});
