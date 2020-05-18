import React from "react";
import "./TopbarMovements.css";
import SquareMenuMovements from "./Widgets/SquareMenuMovements";
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  back: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

const NavbarMovements = () => {
  const classes = useStyles();

  return (
    <div className="topbarMovements">
      <IconButton className={classes.title}>
        <KeyboardBackspaceIcon />
      </IconButton>
      <Typography variant="p">TU PLATA DISPONIBLE</Typography>
      <Typography variant="p"><b>$100.000</b></Typography>
      <SquareMenuMovements className="squareMenu" />
    </div>
  );
};

export default NavbarMovements;
