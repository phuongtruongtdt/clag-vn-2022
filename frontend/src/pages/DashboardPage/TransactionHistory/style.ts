import {
  Grid,
  styled,
  FormControl,
  TextField,
  Button,
  Menu,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Map, { Popup } from 'react-map-gl';

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
  '& label': {
    fontFamily: 'Inter',
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
  '& input': {
    fontFamily: 'Inter',
  },
});

export const StyledTotalField = styled(StyledTextField)({
  '& input': {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
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
  '&.Mui-disabled': {
    background: 'rgba(27,115,87, 0.5)',
    color: 'white',
  },
}));

// export const StyledMenu = styled(Menu)({
//   width: '300.5px',
// });

export const StyledPopup = styled(Popup)({
  fontFamily: 'Inter',
  '& button': {
    display: 'none',
  },
  '& .mapboxgl-popup-content': {
    borderRadius: '0.75rem',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },
});
