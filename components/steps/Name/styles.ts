import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    display: 'grid',
    gridTemplateRows: 'max-content 1fr auto',
    alignItems: 'flex-start',
    gridGap: theme.spacing(7),
    height: '100%'
  }
}));

export default useStyles;
