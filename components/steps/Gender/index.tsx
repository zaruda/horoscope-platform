import Image from 'next/image';
import { Typography, Grid } from '@material-ui/core';
import { Step } from 'types/Step';
import IItem from 'types/IItem';

import MaleIcon from 'public/images/male.svg';
import FemaleIcon from 'public/images/female.svg';
import NonbinaryIcon from 'public/images/unknown.svg';

import IStepProps from '../types';
import useStyles from './styles';

const GENDER: IItem[] = [
  {
    icon: MaleIcon,
    text: 'Male'
  },
  {
    icon: FemaleIcon,
    text: 'Female'
  },
  {
    icon: NonbinaryIcon,
    text: 'Non-binary'
  }
];

export default function Gender({ onNext }: IStepProps) {
  const classes = useStyles();

  const renderGender = ({ icon, text }: IItem) => (
    <Grid
      key={text}
      item
      xs={4}
      onClick={() => onNext(Step.Name)}
      style={{ textAlign: 'center' }}
    >
      <Image src={icon} alt={text} />
      <Typography>{text}</Typography>
    </Grid>
  );

  return (
    <div className={classes.content}>
      <Typography align="center">
        Gender is important for personalizing your relationship guide and
        well-being readings
      </Typography>

      <Grid container spacing={2}>
        {GENDER.map(renderGender)}
      </Grid>
    </div>
  );
}
