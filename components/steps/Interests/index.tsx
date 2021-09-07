import { useState } from 'react';
import clsx from 'clsx';
import { Button, Typography, Grid } from '@material-ui/core';
import { Step } from 'types/Step';

import IStepProps from '../types';
import useStyles from './styles';

const INTERESTS = ['money', 'business', 'friends', 'love', 'family', 'career'];

export default function Interests({ onNext }: IStepProps) {
  const classes = useStyles();
  const [interests, setInterests] = useState<string[]>([]);

  const onAddInterest = (interest: string) => {
    setInterests(currentInterests => [...currentInterests, interest]);
  };

  const onRemoveInterest = (interest: string) => {
    setInterests(currentInterests =>
      currentInterests.filter(c => c !== interest)
    );
  };

  return (
    <div className={classes.content}>
      <Typography align="center">
        What interests you the most in your life?
      </Typography>
      <Grid container spacing={1}>
        {INTERESTS.map(i => {
          const isChosen = interests.includes(i);

          return (
            <Grid item xs="auto" key={i}>
              <div
                className={clsx(classes.interest, {
                  [classes.interestSelected]: isChosen
                })}
                onClick={() =>
                  isChosen ? onRemoveInterest(i) : onAddInterest(i)
                }
              >
                {i}
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disabled={interests.length === 0}
        onClick={() => onNext(Step.Sign)}
        fullWidth
      >
        Next
      </Button>
    </div>
  );
}
