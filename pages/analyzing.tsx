import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import Image from 'next/image';

import CheckIcon from 'public/images/check.svg';
import BackgroundImage from 'public/images/background2.png';
import CircularProgress from 'components/CircularProgress';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    paddingTop: theme.spacing(10)
  },
  content: {
    textAlign: 'center'
  }
}));

const PROGRESS_END = 100;

export default function Analyzing() {
  const router = useRouter();
  const classes = useStyles();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        const diff = Math.random() * 12;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    if (progress === PROGRESS_END) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  useEffect(() => {
    if (progress === PROGRESS_END) {
      setTimeout(() => router.push('/get-access'), 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <CircularProgress value={progress} />
        </Grid>

        <Grid item xs={12}>
          <List>
            {progress > 0 && (
              <ListItem>
                <ListItemAvatar>
                  <Image src={CheckIcon} alt="Connecting to database" />
                </ListItemAvatar>
                <ListItemText primary="Connecting to database" />
              </ListItem>
            )}
            {progress > 14 && (
              <ListItem>
                <ListItemAvatar>
                  <Image src={CheckIcon} alt="Designing your natal chart" />
                </ListItemAvatar>
                <ListItemText primary="Designing your natal chart" />
              </ListItem>
            )}
            {progress > 23 && (
              <ListItem>
                <ListItemAvatar>
                  <Image
                    src={CheckIcon}
                    alt="Checking for possible upcoming impact on your zodiac sign"
                  />
                </ListItemAvatar>
                <ListItemText primary="Checking for possible upcoming impact on your zodiac sign" />
              </ListItem>
            )}
            {progress > 37 && (
              <ListItem>
                <ListItemAvatar>
                  <Image src={CheckIcon} alt="Customizing your horoscope" />
                </ListItemAvatar>
                <ListItemText primary="Customizing your horoscope" />
              </ListItem>
            )}
            {progress > 56 && (
              <ListItem>
                <ListItemAvatar>
                  <Image
                    src={CheckIcon}
                    alt="Designing your unique astronomical snapshot"
                  />
                </ListItemAvatar>
                <ListItemText primary="Designing your unique astronomical snapshot" />
              </ListItem>
            )}
            {progress > 78 && (
              <ListItem>
                <ListItemAvatar>
                  <Image
                    src={CheckIcon}
                    alt="Preparing your compatibility report"
                  />
                </ListItemAvatar>
                <ListItemText primary="Preparing your compatibility report" />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
