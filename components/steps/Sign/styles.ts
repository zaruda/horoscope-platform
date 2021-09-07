import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>(theme => ({
  content: {
    display: 'grid',
    gridTemplateRows: 'max-content 1fr auto',
    alignItems: 'center',
    gridGap: theme.spacing(7),
    height: '100%'
  },
  sign: {
    display: 'grid',
    gridTemplateColumns: 'max-content auto',
    gridGap: theme.spacing(1),
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,0.5)',
    padding: theme.spacing(0.5, 2),
    borderRadius: theme.shape.borderRadius * 5
  },
  signSelected: {
    background: 'linear-gradient(90deg, #636BFB 0%, #B3BDFD 100%)'
  }
}));

export default useStyles;
