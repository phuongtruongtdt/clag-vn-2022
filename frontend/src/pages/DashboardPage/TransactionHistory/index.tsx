import { useMemo, useState } from 'react';
import { PageContainer } from '../../../components/styles';
import { Grid, Select, MenuItem, InputLabel, Box } from '@mui/material';
import Map, { Marker, Popup } from 'react-map-gl';
import {
  StyledDatePicker,
  StyledContainer,
  StyledGrid,
  StyledSelectContainer,
  StyledTextField,
  StyledButton,
  StyledMenu,
} from './style';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SelectChangeEvent } from '@mui/material/Select';
import Pin from './Pin';
import PLACES from './../../../data/places.json';

interface State {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  cardType: string;
  location: string;
}

interface Place {
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  transactionDate: string;
  amount: number;
}

const TOKEN =
  'pk.eyJ1Ijoibm50dDEyMTAiLCJhIjoiY2w4ZnB2ZzgxMDViZzNwbnozb3p6bWI4MSJ9.ikCRpxbAoC3muD8-TTmXaA';

const ITEM_HEIGHT = 48;
const TransactionHistory = () => {
  const [state, setState] = useState<State>({
    startDate: null,
    endDate: null,
    cardType: '',
    location: '',
  });
  const handleChange = (prop: keyof State) => (event: SelectChangeEvent) => {
    setState({ ...state, [prop]: event.target.value });
  };
  const handleSelectDate = (prop: keyof State) => (value: any) => {
    setState({ ...state, [prop]: value });
  };

  const [popupInfo, setPopupInfo] = useState<Place>(null as any);

  const pins = useMemo(
    () =>
      PLACES.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(place as any);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                value={state?.startDate}
                onChange={handleSelectDate('startDate')}
                inputFormat='DD/MM/YYYY'
                renderInput={(params) => <StyledTextField {...params} />}
              />
              <StyledDatePicker
                label='End date'
                value={state?.endDate}
                onChange={handleSelectDate('endDate')}
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
          <StyledButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Detail list...
          </StyledButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              156.000 - 348 Cach mang thang Tam, Quan 3
            </MenuItem>
            <MenuItem onClick={handleClose}>
              156.000 - 348 Cach mang thang Tam, Quan 3
            </MenuItem>
            <MenuItem onClick={handleClose}>
              156.000 - 348 Cach mang thang Tam, Quan 3
            </MenuItem>
          </StyledMenu>
        </Grid>
      </StyledGrid>
      <Box style={{ marginTop: '2rem' }}>
        <Map
          initialViewState={{
            latitude: 10.8231,
            longitude: 106.6297,
            zoom: 10,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          mapboxAccessToken={TOKEN}
        >
          {pins}
          {popupInfo && (
            <Popup
              anchor='top'
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null as any)}
            >
              <p>{popupInfo.amount}</p>
              <p>{popupInfo.transactionDate}</p>
              <p>{popupInfo.address}</p>
            </Popup>
          )}
        </Map>
      </Box>
    </PageContainer>
  );
};

export default TransactionHistory;
