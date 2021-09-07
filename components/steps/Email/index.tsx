import {
  Checkbox,
  TextField,
  Typography,
  Grid,
  Button,
  FormControlLabel
} from '@material-ui/core';

import { Step } from 'types/Step';

import IStepProps from '../types';
import useStyles from './styles';

export default function Email({ onNext }: IStepProps) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography align="center">
        We will notify you is something important in your life will about to
        happen. We promise not to spam you
      </Typography>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <TextField variant="outlined" label="Your email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            style={{ alignItems: 'flex-start' }}
            control={<Checkbox />}
            label={
              <Typography variant="caption" color="textSecondary">
                I would like to receive updates about products, promotions,
                special offers, and news from Nebula via email
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onNext(Step.Relationships)}
            fullWidth
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="text"
            onClick={() => onNext(Step.Relationships)}
            fullWidth
          >
            Skip
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
