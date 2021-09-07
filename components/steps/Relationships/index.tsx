import Image from 'next/image';
import { Typography, Grid } from '@material-ui/core';

import { Step } from 'types/Step';
import IItem from 'types/IItem';

import SingleIcon from 'public/images/Single.svg';
import InRelationshipIcon from 'public/images/InRelationship.svg';
import MarriedIcon from 'public/images/Married.svg';
import DivorcedIcon from 'public/images/Divorced.svg';
import EngagedIcon from 'public/images/Engaged.svg';
import ComplicatedIcon from 'public/images/Complicated.svg';

import IStepProps from '../types';
import useStyles from './styles';

const STATUSES: IItem[] = [
  {
    icon: SingleIcon,
    text: 'Single'
  },
  {
    icon: InRelationshipIcon,
    text: 'In relationship'
  },
  {
    icon: MarriedIcon,
    text: 'Married'
  },
  {
    icon: DivorcedIcon,
    text: 'Divorced'
  },
  {
    icon: EngagedIcon,
    text: 'Engaged'
  },
  {
    icon: ComplicatedIcon,
    text: 'Complicated'
  }
];

export default function Relationships({ onNext }: IStepProps) {
  const classes = useStyles();
  const renderStatus = ({ icon, text }: IItem) => (
    <Grid item xs={6} key={text}>
      <div onClick={() => onNext(Step.Interests)}>
        <Image src={icon} alt={text} />
        <Typography>{text}</Typography>
      </div>
    </Grid>
  );

  return (
    <div className={classes.content}>
      <Typography align="center">
        We need more details to make sure your horoscope is accurate
      </Typography>
      <Grid container spacing={2} style={{ textAlign: 'center' }}>
        {STATUSES.map(renderStatus)}
      </Grid>
    </div>
  );
}
