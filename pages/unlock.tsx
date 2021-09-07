import { useEffect, useRef } from 'react';
import {
  Button,
  Container,
  Grid,
  Card,
  makeStyles,
  Typography,
  CardHeader,
  CardContent,
  Link as MuiLink
} from '@material-ui/core';
import clsx from 'clsx';
import Image from 'next/image';
import { Drawer } from '@zaruda/zetpay-core';

import ZodiacSignsImage from 'public/images/zodiacsigns.png';
import ZodiacImage from 'public/images/zodiac.png';
import TransistImage from 'public/images/transist.png';
import MajorLinesImage from 'public/images/majorlines.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#040a23',
    color: theme.palette.common.white,
    paddingBottom: theme.spacing(14),
    paddingTop: theme.spacing(5)
  },
  content: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '70%',
    backgroundColor: '#0F052C',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 2, 2),

    display: 'grid',
    gridTemplateRows: 'max-content 180px max-content max-content auto',
    gridGap: theme.spacing(2)
  },
  deal: {
    background: 'transparent',
    color: theme.palette.common.white,
    border: '2px solid #3A3A50',
    borderRadius: theme.shape.borderRadius * 2,
    marginBottom: theme.spacing(8)
  },
  dealHeader: {
    padding: theme.spacing(1),
    backgroundColor: '#3A3A50'
  },
  border: {
    padding: theme.spacing(0.5),
    borderRadius: 25,
    border: '1px solid #636BFB'
  },
  borderLighter: {
    padding: theme.spacing(0.5, 1),
    borderRadius: 25,
    border: '1px solid rgba(99, 107, 251, 0.6)'
  },
  borderLight: {
    padding: theme.spacing(0.5, 2),
    borderRadius: 30,
    border: '1px solid rgba(99, 107, 251, 0.2)'
  },
  footer: {
    textAlign: 'center'
  }
}));

let translate = 0;
const treshold = -521;
export default function Unlock() {
  const classes = useStyles();

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function scroll() {
      if (translate === treshold) {
        translate = 0;
      } else {
        translate = translate - 1;
      }

      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateY(${translate}px)`;
      }
    }

    const timer = setInterval(scroll, 30);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={1} ref={sliderRef}>
          <Grid item xs={12}>
            <Image src={MajorLinesImage} alt="Major lines" quality={100} />
          </Grid>
          <Grid item xs={12}>
            <Image src={ZodiacImage} alt="What is zodiac" quality={100} />
          </Grid>
          <Grid item xs={12}>
            <Image src={TransistImage} alt="Transist" quality={100} />
          </Grid>
          <Grid item xs={12}>
            <Image src={ZodiacSignsImage} alt="Zodiac signs" quality={100} />
          </Grid>
        </Grid>
        <div className={classes.content}>
          <Typography variant="h2" align="center">
            Unlock everything
          </Typography>
          <Card className={classes.deal}>
            <CardHeader
              className={classes.dealHeader}
              title="HOT DEAL"
              titleTypographyProps={{ variant: 'body1', align: 'center' }}
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                style={{ fontWeight: 'bold' }}
              >
                TRY 3 DAYS FOR FREE
              </Typography>
              <Typography variant="body2" align="center">
                then 0.99 US$ life time subscription
              </Typography>
            </CardContent>
          </Card>
          <Drawer href="/subscribe">
            <div className={classes.borderLight}>
              <div className={classes.borderLighter}>
                <div className={classes.border}>
                  <Button variant="contained" color="primary" fullWidth>
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </Drawer>
          <Typography variant="body2" color="textSecondary" align="center">
            Secured with Play Market. Cancel anytime
          </Typography>
          <div className={classes.footer}>
            <MuiLink
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=buyertos"
              target="_blank"
              underline="always"
              color="textSecondary"
            >
              Terms of Service
            </MuiLink>{' '}
            &middot;{' '}
            <MuiLink
              href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=ru"
              target="_blank"
              underline="always"
              color="textSecondary"
            >
              Privacy policy
            </MuiLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
