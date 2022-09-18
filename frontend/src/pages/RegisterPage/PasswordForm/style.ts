import { styled } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckIcon from '@mui/icons-material/Check';

export const StyledList = styled('ul')(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.color.list_item,
  margin: '1rem 0 0 3rem',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  display: 'flex',
  width: 'fit-content',
  margin: '0 auto',
  '& span': {
    color: 'white!important',
  },
  //   '& > .Mui-checked': {
  //     color: `${theme.color.yellow}!important`,
  //     '& svg': {
  //       border: '1px solid white',
  //     },
  //   },
}));
