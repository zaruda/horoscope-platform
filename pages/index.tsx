import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Button,
  Container,
  Grid,
  Link as MuiLink,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import Image from 'next/image';

import BackgroundImage from '../public/images/background.png';
import StarIcon from '../public/images/StarIcon.svg';
import LogoIcon from '../public/images/logo.svg';
import RatingIcon from '../public/images/Rating.svg';

const FEATURES = [
  'Find out zodiac love compatibility between you and your loved one.',
  'Uncover your hidden talents.',
  'Star understanding other people better.',
  'Get guidance concerning your relationship, career, money and luck.'
];

const useStyles = makeStyles(theme => ({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    height: '100vh',
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4)
  },
  content: {
    display: 'grid',
    gridTemplateRows: 'max-content max-content 1fr auto',
    gridGap: theme.spacing(2),
    height: '100%',
    alignItems: 'center'
  },
  footer: {
    display: 'grid',
    gridGap: theme.spacing(2),
    textAlign: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.content}>
        <Image src={LogoIcon} alt="Horoscope" />
        <Typography variant="body2" align="center">
          Your personal guide to astrology
        </Typography>
        <List>
          {FEATURES.map(f => (
            <ListItem key={f}>
              <ListItemAvatar>
                <Image src={StarIcon} alt={f} />
              </ListItemAvatar>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {f}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <div className={classes.footer}>
          <Typography style={{ color: '#93A4FC' }}>
            Join Millions of Happy Users
          </Typography>
          <Image src={RatingIcon} alt="rating" />
          <Link href="/survey" passHref>
            <Button variant="contained" color="primary" fullWidth>
              Get started
            </Button>
          </Link>
          <div>
            <MuiLink
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=buyertos"
              target="_blank"
              underline="always"
              color="textSecondary"
              variant="caption"
            >
              Terms of Service
            </MuiLink>{' '}
            &middot;{' '}
            <MuiLink
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=ru"
              target="_blank"
              underline="always"
              color="textSecondary"
              variant="caption"
            >
              Privacy policy
            </MuiLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
