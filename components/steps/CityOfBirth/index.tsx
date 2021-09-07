import Image from 'next/image';
import { Button, TextField } from '@material-ui/core';
import { Step } from 'types/Step';

import TimeCircle from 'public/images/TimeCircle.svg';
import useStyles from './styles';
import IStepProps from '../types';

export default function CityOfBirth({ onNext }: IStepProps) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Image src={TimeCircle} alt="time" />
      <TextField variant="outlined" label="City of birth" fullWidth />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onNext(Step.Gender)}
        fullWidth
      >
        Next
      </Button>
    </div>
  );
}
