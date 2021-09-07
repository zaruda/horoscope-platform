import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>((theme) => ({
  content: {
    display: "grid",
    gridTemplateRows: "max-content max-content max-content",
    height: "100%",
    gridGap: theme.spacing(7),
  },
}));

export default useStyles;
