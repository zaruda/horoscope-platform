import {
  Button,
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import clsx from 'clsx';
import Image from 'next/image';

import BugIcon from '../public/images/bug.svg';
import Illustration from 'public/images/illustration.svg';
import StarPointIcon from 'public/images/StarIcon.svg';
import RatingIcon from '../public/images/Rating.svg';
import StopIcon from '../public/images/stop.png';
import BagsIcon from '../public/images/bags.png';
import AstrologyIcon from '../public/images/astrology.png';
import HeartIcon from '../public/images/heart.png';
import StarIcon from '../public/images/star.png';
import BookIcon from '../public/images/book.png';
import BlockedIcon from '../public/images/blocked.svg';
import EnabledIcon from '../public/images/enabled.svg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#040a23',
    color: theme.palette.common.white,
    paddingBottom: theme.spacing(14)
  },
  review: {
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    background:
      'linear-gradient(180deg, #4B4773 0%, rgba(75, 71, 115, 0.1) 105.12%);',
    borderRadius: theme.shape.borderRadius * 2
  },
  premiumRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 75px 75px',
    gridGap: theme.spacing(1),
    padding: theme.spacing(2)
  },
  premiumRowBg: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  premiumRowTitle: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(1),
    alignItems: 'center'
  },
  faqItem: {
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(2, 1),
    background:
      'linear-gradient(180deg, #4B4773 0%, rgba(75, 71, 115, 0.1) 105.12%)'
  },
  submitButton: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: 0,
    right: 0,
    margin: theme.spacing(0, 2),
    width: `calc(100% - ${theme.spacing(8)})`
  }
}));

const STEPS = [
  'Find out zodiac love compatibility between you and your loved one.',
  'Uncover your hidden talents.',
  'Star understanding othew people better.',
  'Get guidance concerning your relationship, career, money and luck.'
];

const PREMIUM_FEATURES = [
  {
    icon: StarIcon,
    text: 'Horoscope',
    isBasic: true,
    isPremium: true
  },
  {
    icon: HeartIcon,
    text: 'Compatibility reports',
    isBasic: false,
    isPremium: true
  },
  {
    icon: BookIcon,
    text: 'Guides',
    isBasic: false,
    isPremium: true
  },
  {
    icon: AstrologyIcon,
    text: 'Astrology consultation',
    isBasic: false,
    isPremium: true
  },
  {
    icon: BagsIcon,
    text: 'Astrology goddies',
    isBasic: false,
    isPremium: true
  },
  {
    icon: StopIcon,
    text: 'No ads',
    isBasic: false,
    isPremium: true
  }
];

const FAQ = [
  {
    question: (
      <Typography gutterBottom>
        How do I check a status of my subscription? And how do I cancel it?
      </Typography>
    ),
    answer: (
      <>
        <Typography color="textSecondary" gutterBottom>
          Open Settings &gt; [your name] &gt; Subscription on your Phone.
        </Typography>
        <Typography color="textSecondary">
          There you will see a list of all active and expired subscriptions.
          When you tap on a subscription from the list, you can choose a
          different subscription option, or tap Cancel Subscription.
        </Typography>
      </>
    )
  },
  {
    question: (
      <Typography gutterBottom>I want a refund, how do I get it?</Typography>
    ),
    answer: (
      <>
        <Typography color="textSecondary" gutterBottom>
          Unfortunately there is no way to initiate a refund on developer’s end.
        </Typography>
        <Typography color="textSecondary">
          To submit a refund request, you should contact Play Store support.
        </Typography>
      </>
    )
  },
  {
    question: <Typography gutterBottom>How do I contact you?</Typography>,
    answer: (
      <>
        <Typography color="textSecondary" gutterBottom>
          Please drop us a note at{' '}
          <a href="mailto:support.nebula@gen.tech">support.nebula@gen.tech.</a>
        </Typography>
        <Typography color="textSecondary">
          We’d be glad to hear any feedback and ideas from you, and help if you
          need any Assistance.
        </Typography>
      </>
    )
  }
];

export default function GetAccess() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={Illustration} alt="Get access" />
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Get unlimited access
        </Typography>
        <List>
          {STEPS.map(s => (
            <ListItem key={s}>
              <ListItemAvatar>
                <Image src={StarPointIcon} alt={s} />
              </ListItemAvatar>
              <ListItemText primary={s} />
            </ListItem>
          ))}
        </List>
        <div className={classes.review}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Image src={RatingIcon} alt="rating" />
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary">
                “Nebula horoscope is so accurate that sometimes scares me!
                Highly recommended!”
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Alice M.</Typography>
            </Grid>
          </Grid>
        </div>
        <Typography align="center">78k+ reviews | 4.7 stars</Typography>
      </Container>
      <br />
      <br />
      <Typography variant="h2" align="center">
        Premium makes it easy
      </Typography>
      <div style={{ marginBottom: 24 }}>
        <div className={classes.premiumRow}>
          <div></div>
          <div>
            <Typography align="center">Basic</Typography>
          </div>
          <div>
            <Typography align="center">Premium</Typography>
          </div>
        </div>
        {PREMIUM_FEATURES.map((f, i) => (
          <div
            key={i}
            className={clsx(classes.premiumRow, {
              [classes.premiumRowBg]: i % 2 === 0
            })}
          >
            <div className={classes.premiumRowTitle}>
              <Image src={f.icon} alt={f.text} />
              <Typography variant="body2">{f.text}</Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image src={f.isBasic ? EnabledIcon : BlockedIcon} alt="status" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src={f.isPremium ? EnabledIcon : BlockedIcon}
                alt="premium status"
              />
            </div>
          </div>
        ))}
      </div>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Most asked questions
        </Typography>
        <Grid container spacing={3}>
          {FAQ.map((fq, index) => (
            <Grid item xs={12} key={index}>
              <div className={classes.faqItem}>
                {fq.question}
                {fq.answer}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        href="/unlock"
      >
        Let’s do it!
      </Button>
    </div>
  );
}
