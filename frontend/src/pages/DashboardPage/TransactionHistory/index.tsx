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
import axios from 'axios';
import TransactionItem from './TransactionItem';
import { format, parseISO } from 'date-fns';

interface BankAccount {
  account_num: string;
  card_num: string;
  owner_id: string;
  method_id: string;
  exp: string;
  balance: number;
}

interface Location {
  pc_name: string;
  latitude: number;
  longtitude: number;
}

interface State {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  bankAccount: string;
  location: string;
  bankAccounts: BankAccount[];
  locations: Location[];
}

interface Place {
  account_num: string;
  amount: number;
  des: string;
  id: number;
  lat: string;
  lng: string;
  location_id: number;
  location_name: string;
  location_address: string;
  money_in: 0;
  ts: string;
}

const TOKEN =
  'pk.eyJ1Ijoibm50dDEyMTAiLCJhIjoiY2w4ZnB2ZzgxMDViZzNwbnozb3p6bWI4MSJ9.ikCRpxbAoC3muD8-TTmXaA';

const ITEM_HEIGHT = 48;
const TransactionHistory = () => {
  const [state, setState] = useState<State>({
    startDate: null,
    endDate: null,
    bankAccount: '',
    location: '',
    bankAccounts: [],
    locations: [],
  });
  const handleChange = (prop: keyof State) => (event: SelectChangeEvent) => {
    setState({ ...state, [prop]: event.target.value });
  };

  const process = (date: string) => {
    var parts = date.split('/');
    return new Date(parts[2] as any, (parts[1] as any) - 1, parts[0] as any);
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
      detailList.length > 0 &&
      detailList.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={Number(place.lng)}
          latitude={Number(place.lat)}
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
        latitude: location.latitude,
        longitude: location.longtitude,
      });
    },
    [state, viewState]
  );

  useEffect(() => {
    if (
      state.startDate &&
      state.endDate &&
      state.bankAccount &&
      state.location
    ) {
      const formatStartDate = state.startDate.format('DD/MM/YYYY');
      const formatEndDate = state.endDate.format('DD/MM/YYYY');
      axios
        .get(
          `http://localhost:3001/transactions/getRange?start=${formatStartDate}&end=${formatEndDate}&account_num=${state.bankAccount}&pc=${state.location}`
        )
        .then((result) => {
          if (result.data.error_code === -1) setDetailList([]);
          else setDetailList(result.data);
        });
    }
  }, [state]);

  const ownerId = localStorage.getItem('ownerId');

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/bank_accounts/findByOwner?owner_id=${ownerId}`
      )
      .then((result) => setState((s) => ({ ...s, bankAccounts: result.data })));
    axios
      .get('http://localhost:3001/provinces_cities/findall')
      .then((result) => setState((s) => ({ ...s, locations: result.data })));
  }, []);

  const total = useMemo(() => {
    return detailList.length > 0
      ? detailList.reduce(
          (previousValue, currentItem) => previousValue + currentItem.amount,
          0
        )
      : 0;
  }, [detailList]);

  const isDisabled = useMemo(() => {
    return detailList.length === 0;
  }, [detailList]);

  const [isEndDateError, setIsEndDateError] = useState<boolean>(false);

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
              {isEndDateError && (
                <p style={{ color: 'red' }}>
                  End date must be greater than start date
                </p>
              )}
            </LocalizationProvider>
          </StyledContainer>
        </Grid>
        <Grid item xs={6}>
          <p>Information</p>
          <StyledContainer>
            <StyledSelectContainer fullWidth>
              <InputLabel
                style={{ fontFamily: 'Inter' }}
                id='card-type-select-label'
              >
                Bank account
              </InputLabel>
              <Select
                style={{ fontFamily: 'Inter' }}
                labelId='card-type-select-label'
                id='card-type'
                label='Card type'
                value={state?.bankAccount}
                onChange={handleChange('bankAccount')}
              >
                {state.bankAccounts?.map((item) => (
                  <MenuItem value={item.account_num}>
                    GBank - {item.account_num}
                  </MenuItem>
                ))}
              </Select>
            </StyledSelectContainer>
            <StyledSelectContainer fullWidth>
              <InputLabel
                style={{ fontFamily: 'Inter' }}
                id='location-select-label'
              >
                Location
              </InputLabel>
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
            disabled={isDisabled}
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
            {detailList.length > 0 &&
              detailList.map((item) => (
                <MenuItem onClick={handleClose}>
                  <TransactionItem
                    description={item.des}
                    amount={item.amount}
                    time={format(parseISO(item.ts), 'HH:mm - dd/MM/yyyy')}
                    name={item.location_name}
                    address={item.location_address}
                  />
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
              longitude={Number(popupInfo.lng)}
              latitude={Number(popupInfo.lat)}
              onClose={() => setPopupInfo(null as any)}
            >
              {detailList.length > 0 &&
                detailList
                  .filter(
                    (item) =>
                      item.lng === popupInfo.lng && item.lat === popupInfo.lat
                  )
                  .map((popup) => (
                    <div
                      style={{
                        fontFamily: 'Inter',
                        borderRadius: '0.75rem',
                        width: '100%',
                        padding: '0.2rem',
                      }}
                    >
                      <p style={{ fontWeight: '500' }}>{popup.des}</p>
                      <p style={{ fontWeight: 'bold', color: '#1B7357' }}>
                        -{popup.amount} VND
                      </p>
                      <p style={{ fontSize: '0.7rem' }}>
                        {format(parseISO(popup.ts), 'HH:mm - dd/MM/yyyy')}
                      </p>
                      <p style={{ whiteSpace: 'normal' }}>
                        <span style={{ fontWeight: 'bold' }}>
                          {popup.location_name}
                        </span>{' '}
                        {popup.location_address}
                      </p>
                      {detailList.filter(
                        (item) =>
                          item.lng === popupInfo.lng &&
                          item.lat === popupInfo.lat
                      ).length > 1 && (
                        <hr
                          style={{
                            marginTop: '0.3rem',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                          }}
                        />
                      )}
                    </div>
                  ))}
            </StyledPopup>
          )}
        </Map>
      </Box>
    </PageContainer>
  );
};

export default TransactionHistory;
