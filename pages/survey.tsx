import { useState, ElementType } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Step } from 'types/Step';

import BackgroundImage from '../public/images/background.png';

import {
  BirthdayDate,
  CityOfBirth,
  TimeOfBirth,
  Gender,
  Name,
  Email,
  Relationships,
  Interests,
  Sign,
  Palm
} from 'components/steps';
import Progress from 'components/Progress';

const StepToComponentMap: Record<Step, ElementType> = {
  [Step.BirthdayDate]: BirthdayDate,
  [Step.TimeOfBirth]: TimeOfBirth,
  [Step.CityOfBirth]: CityOfBirth,
  [Step.Gender]: Gender,
  [Step.Name]: Name,
  [Step.Email]: Email,
  [Step.Relationships]: Relationships,
  [Step.Interests]: Interests,
  [Step.Sign]: Sign,
  [Step.Palm]: Palm
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gridGap: theme.spacing(3),
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    paddingBottom: theme.spacing(7),
    paddingTop: theme.spacing(10)
  }
}));

export default function Survey() {
  const classes = useStyles();
  const [step, setStep] = useState(Step.BirthdayDate);

  const Component = StepToComponentMap[step];

  return (
    <Container className={classes.container}>
      <Component onNext={setStep} />

      <Progress dotsCount={9} currentIndex={step} />
    </Container>
  );
}
