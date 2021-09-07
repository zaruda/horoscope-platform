import React from 'react';
import MuiCircularProgress, {
  CircularProgressProps
} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(theme => ({
  container: {
    position: 'relative',
    display: 'inline-flex'
  },
  progressText: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    color: '#FDB250'
  },
  progressTrack: {
    color: 'rgba(255, 255, 255, 0.1)'
  }
}));

function CircularProgress(props: CircularProgressProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MuiCircularProgress
        className={classes.progressTrack}
        size={120}
        thickness={4}
        variant="static"
        value={100}
      />
      <MuiCircularProgress
        className={classes.progressBar}
        size={120}
        thickness={4}
        variant="determinate"
        {...props}
      />
      <div className={classes.progressText}>
        <Typography variant="h1" component="div">
          {`${Math.round(props.value!)}%`}
        </Typography>
      </div>
    </div>
  );
}

export default CircularProgress;
