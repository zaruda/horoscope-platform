import Image from 'next/image';
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { Step } from 'types/Step';

import BirthdateCircle from 'public/images/BirthdateCircle.svg';

import useStyles from './styles';
import IStepProps from '../types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function BirthdayDate({ onNext }: IStepProps) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Image src={BirthdateCircle} alt="Birthdate" />
      <Typography align="center">
        Date is important for determining your sun sign, numerology and
        compatibility
      </Typography>
      <div className={classes.form}>
        <TextField variant="outlined" placeholder="01" />
        <Select variant="outlined">
          {MONTHS.map(m => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
        <TextField variant="outlined" placeholder="1990" />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onNext(Step.TimeOfBirth)}
        fullWidth
      >
        Next
      </Button>
    </div>
  );
}
