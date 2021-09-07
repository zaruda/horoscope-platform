import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Typography, Button, Grid } from '@material-ui/core';
import { Step } from 'types/Step';
import IItem from 'types/IItem';

import AquariusIcon from 'public/images/icons/aquarius.svg';
import AriesIcon from 'public/images/icons/aries.svg';
import CancerIcon from 'public/images/icons/cancer.svg';
import CapriconusIcon from 'public/images/icons/capriconus.svg';
import GeminiIcon from 'public/images/icons/gemini.svg';
import LeoIcon from 'public/images/icons/leo.svg';
import LibraIcon from 'public/images/icons/libra.svg';
import PiscesIcon from 'public/images/icons/pisces.svg';
import SagitariusIcon from 'public/images/icons/sagitarius.svg';
import ScorpiusIcon from 'public/images/icons/scorpius.svg';
import TaurusIcon from 'public/images/icons/taurus.svg';
import VirgoIcon from 'public/images/icons/virgo.svg';

import IStepProps from '../types';
import useStyles from './styles';

const SIGNES: IItem[] = [
  {
    icon: AriesIcon,
    text: 'Aries'
  },
  {
    icon: TaurusIcon,
    text: 'Taurus'
  },
  {
    icon: GeminiIcon,
    text: 'Gemini'
  },
  {
    icon: CancerIcon,
    text: 'Cancer'
  },
  {
    icon: LeoIcon,
    text: 'Leo'
  },
  {
    icon: VirgoIcon,
    text: 'Virgo'
  },
  {
    icon: LibraIcon,
    text: 'Libra'
  },
  {
    icon: ScorpiusIcon,
    text: 'Scorpio'
  },
  {
    icon: SagitariusIcon,
    text: 'Sagittarius'
  },
  {
    icon: CapriconusIcon,
    text: 'Capricorn'
  },
  {
    icon: AquariusIcon,
    text: 'Aquarius'
  },
  {
    icon: PiscesIcon,
    text: 'Pisces'
  }
];

export default function Sign({ onNext }: IStepProps) {
  const classes = useStyles();
  const [sign, setSign] = useState<string>();

  const renderSign = ({ icon, text }: IItem) => (
    <Grid item xs="auto" key={text}>
      <div
        className={clsx(classes.sign, {
          [classes.signSelected]: sign === text
        })}
        onClick={() => setSign(text)}
      >
        <Typography>{text}</Typography>
        {icon && <Image src={icon} alt={text} />}
      </div>
    </Grid>
  );

  return (
    <div className={classes.content}>
      <Typography align="center">
        Do you feel like a different zodiac sign? If ‘yes’ please choose a sign.
      </Typography>
      <Grid container spacing={1}>
        {SIGNES.map(renderSign)}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disabled={!sign}
        onClick={() => onNext(Step.Palm)}
        fullWidth
      >
        Next
      </Button>
    </div>
  );
}
