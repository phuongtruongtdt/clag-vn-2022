import { useState } from 'react';
import { PageContainer } from '../../../components/styles';
import { Grid, Select, MenuItem, InputLabel } from '@mui/material';
import {
  StyledDatePicker,
  StyledContainer,
  StyledGrid,
  StyledSelectContainer,
  StyledTextField,
} from './style';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SelectChangeEvent } from '@mui/material/Select';

interface State {
  cardType: string;
  location: string;
}
const TransactionHistory = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [state, setState] = useState<State>({
    cardType: '',
    location: '',
  });
  const handleChange = (prop: keyof State) => (event: SelectChangeEvent) => {
    setState({ ...state, [prop]: event.target.value });
  };

  return (
    <PageContainer>
      <StyledGrid container columns={16} spacing={2}>
        <Grid item xs={4}>
          <p>Date</p>
          <StyledContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StyledDatePicker
                label='Start date'
                value={value}
                onChange={(newValue: any) => {
                  setValue(newValue);
                }}
                inputFormat='DD/MM/YYYY'
                renderInput={(params) => <StyledTextField {...params} />}
              />
              <StyledDatePicker
                label='End date'
                value={value}
                onChange={(newValue: any) => {
                  setValue(newValue);
                }}
                inputFormat='DD/MM/YYYY'
                renderInput={(params) => <StyledTextField {...params} />}
              />
            </LocalizationProvider>
          </StyledContainer>
        </Grid>
        <Grid item xs={6}>
          <p>Information</p>
          <StyledContainer>
            <StyledSelectContainer fullWidth>
              <InputLabel id='card-type-select-label'>Card type</InputLabel>
              <Select
                labelId='card-type-select-label'
                id='card-type'
                label='Card type'
                value={state?.cardType}
                onChange={handleChange('cardType')}
              >
                <MenuItem value={10}>GBank - 1216361663013xxx</MenuItem>
                <MenuItem value={20}>GBank - 1216361663013xxx</MenuItem>
                <MenuItem value={30}>GBank - 1216361663013xxx</MenuItem>
              </Select>
            </StyledSelectContainer>
            <StyledSelectContainer fullWidth>
              <InputLabel id='location-select-label'>Location</InputLabel>
              <Select
                labelId='location-select-label'
                id='location'
                label='Location'
                value={state?.cardType}
                onChange={handleChange('location')}
              >
                <MenuItem value={10}>Ben Tre</MenuItem>
                <MenuItem value={20}>Binh Duong</MenuItem>
                <MenuItem value={30}>Ha Noi</MenuItem>
              </Select>
            </StyledSelectContainer>
          </StyledContainer>
        </Grid>
        <Grid item xs={6}>
          <p>Transaction history</p>
          <StyledContainer>
            <StyledTextField
              type='text'
              defaultValue='Total: 0 VND'
              variant='outlined'
              inputProps={{ readOnly: true }}
            />
          </StyledContainer>
        </Grid>
      </StyledGrid>
      <div style={{ marginTop: '2rem' }}>map</div>
    </PageContainer>
  );
};

export default TransactionHistory;
