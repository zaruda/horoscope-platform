import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography, Grid } from '@material-ui/core';

import PalmIcon from 'public/images/Hand.svg';

import useStyles from './styles';

export default function Palm() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography align="center">
        Find out what the lines on your hands can tell about your fate
      </Typography>
      <Image src={PalmIcon} alt="Palm reading" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Link href="/analyzing" passHref>
            <Button variant="outlined" color="primary" fullWidth>
              Skip
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/scan" passHref>
            <Button variant="contained" color="primary" fullWidth>
              Scan
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
