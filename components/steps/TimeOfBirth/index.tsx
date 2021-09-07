import Image from 'next/image';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Step } from 'types/Step';

import TimeCircle from 'public/images/TimeCircle.svg';

import useStyles from './styles';
import IStepProps from '../types';

export default function TimeOfBirth({ onNext }: IStepProps) {
  const classes = useStyles();
  const next = () => onNext(Step.CityOfBirth);

  return (
    <div className={classes.content}>
      <Image src={TimeCircle} alt="time of birth" />
      <Typography align="center">
        Time is important for determining your ascendans, houses, and moon
        position
      </Typography>
      <div className={classes.form}>
        <TextField variant="outlined" placeholder="09" />
        <TextField variant="outlined" placeholder="20" />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="outlined" color="primary" onClick={next} fullWidth>
            I don&apos;t know
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={next} fullWidth>
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
