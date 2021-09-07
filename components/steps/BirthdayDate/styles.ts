import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    display: 'grid',
    gridTemplateRows: 'max-content max-content 1fr auto',
    height: '100%',
    gridGap: theme.spacing(7)
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '60px 1fr 80px',
    gridGap: theme.spacing(1.35),
    alignItems: 'flex-start'
  }
}));

export default useStyles;
