import { Grid, styled, FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: '500',
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  margin: '1rem 0',
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  marginBottom: '1rem',
}));

export const StyledSelectContainer = styled(FormControl)(({ theme }) => ({
  marginBottom: '1rem',
}));

export const StyledTextField = styled(TextField)({
  width: '100%',
});
