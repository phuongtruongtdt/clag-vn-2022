import { useCallback, useMemo, useState, useEffect } from 'react';
import { PageContainer } from '../../../components/styles';
import { Grid, Select, MenuItem, InputLabel, Box, Menu } from '@mui/material';
import Map, { Marker } from 'react-map-gl';
import {
  StyledDatePicker,
  StyledContainer,
  StyledGrid,
  StyledSelectContainer,
  StyledTextField,
  StyledButton,
  StyledTotalField,
  StyledPopup,
} from './style';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SelectChangeEvent } from '@mui/material/Select';
import Pin from './Pin';
import PLACES from './../../../data/places.json';
import axios from 'axios';
import TransactionItem from './TransactionItem';

interface PaymentMethod {
  method_id: string;
  method_name: string;
}

interface Location {
  pc_name: string;
  lat: number;
  long: number;
}

interface State {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  cardType: string;
  location: string;
  paymentMethods: PaymentMethod[];
  locations: Location[];
}

interface Place {
  address: string;
  latitude: number;
  longitude: number;
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
    paymentMethods: [],
    locations: [],
  });
  const handleChange = (prop: keyof State) => (event: SelectChangeEvent) => {
    setState({ ...state, [prop]: event.target.value });
  };
  const handleSelectDate = (prop: keyof State) => (value: any) => {
    setState({ ...state, [prop]: value });
  };

  const [popupInfo, setPopupInfo] = useState<Place>(null as any);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [detailList, setDetailList] = useState<Place[]>([]);

  const pins = useMemo(
    () =>
      detailList.map((place, index) => (
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
    [detailList]
  );

  const [viewState, setViewState] = useState({
    latitude: 10.8231,
    longitude: 106.6297,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const handleChangeLocation = useCallback(
    (event: SelectChangeEvent) => {
      const value = event.target.value;
      setState({ ...state, location: value });
      const location =
        state.locations.find((item) => item.pc_name === value) ||
        state.locations[0];
      setViewState({
        ...viewState,
        latitude: location.lat,
        longitude: location.long,
      });
    },
    [state, viewState]
  );

  useEffect(() => {
    if (state.startDate && state.endDate && state.cardType && state.location) {
      setDetailList(PLACES);
    }
  }, [state]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/payment_methods/findall')
      .then((result) =>
        setState((s) => ({ ...s, paymentMethods: result.data }))
      );
    axios
      .get('http://localhost:3001/provinces_cities/findall')
      .then((result) => setState((s) => ({ ...s, locations: result.data })));
  }, []);

  const total = useMemo(() => {
    return detailList.reduce(
      (previousValue, currentItem) => previousValue + currentItem.amount,
      0
    );
  }, [detailList]);

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
                style={{ fontFamily: 'Inter' }}
                labelId='card-type-select-label'
                id='card-type'
                label='Card type'
                value={state?.cardType}
                onChange={handleChange('cardType')}
              >
                {state.paymentMethods?.map((item) => (
                  <MenuItem value={item.method_id}>{item.method_name}</MenuItem>
                ))}
              </Select>
            </StyledSelectContainer>
            <StyledSelectContainer fullWidth>
              <InputLabel id='location-select-label'>Location</InputLabel>
              <Select
                style={{ fontFamily: 'Inter' }}
                labelId='location-select-label'
                id='location'
                label='Location'
                value={state?.location}
                onChange={handleChangeLocation}
              >
                {state.locations?.map((item, index) => (
                  <MenuItem key={index} value={item.pc_name}>
                    {item.pc_name}
                  </MenuItem>
                ))}
              </Select>
            </StyledSelectContainer>
          </StyledContainer>
        </Grid>
        <Grid item xs={6}>
          <p>Transaction history</p>
          <StyledContainer>
            <StyledTotalField
              type='text'
              value={'Total: ' + total + ' VND'}
              variant='outlined'
              inputProps={{ readOnly: true }}
            />
          </StyledContainer>
          <StyledButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            disabled={detailList.length === 0}
          >
            Detail list...
          </StyledButton>
          <Menu
            id='transaction-details-list'
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
                maxHeight: ITEM_HEIGHT * 7.5,
                width: '43ch',
              },
            }}
          >
            {detailList.map((item) => (
              <MenuItem onClick={handleClose}>
                <TransactionItem />
              </MenuItem>
            ))}
            <MenuItem onClick={handleClose}>
              <StyledButton style={{ fontSize: '1rem', padding: '0.25rem' }}>
                Close
              </StyledButton>
            </MenuItem>
          </Menu>
        </Grid>
      </StyledGrid>
      <Box style={{ marginTop: '2rem' }}>
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          mapboxAccessToken={TOKEN}
        >
          {pins}
          {popupInfo && (
            <StyledPopup
              anchor='left'
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null as any)}
            >
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                {popupInfo.amount} VND
              </p>
              <p>{popupInfo.transactionDate}</p>
              <p style={{ fontWeight: 'bold' }}>{popupInfo.address}</p>
            </StyledPopup>
          )}
        </Map>
      </Box>
    </PageContainer>
  );
};

export default TransactionHistory;
