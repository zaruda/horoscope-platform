import Image from 'next/image';
import { TextField, Button } from '@material-ui/core';

import MaleGender from 'public/images/MaleGender.svg';

import { Step } from 'types/Step';

import IStepProps from '../types';
import useStyles from './styles';

export default function Name({ onNext }: IStepProps) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Image src={MaleGender} alt="Gender" />
      <TextField variant="outlined" label="Your name" fullWidth />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onNext(Step.Email)}
      >
        Next
      </Button>
    </div>
  );
}
