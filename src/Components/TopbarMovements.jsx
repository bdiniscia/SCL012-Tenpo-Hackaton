import React from "react";
import "./TopbarMovements.css";
import SquareMenuMovements from "./Widgets/SquareMenuMovements";
import BackArrow from "./Widgets/BackArrow";
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backButon: {
    marginRight: theme.spacing(2),
  },
}));

const NavbarMovements = () => {
  const classes = useStyles();

  return (
    <div className="topbarMovements">
      <IconButton className={classes.backButon} href="/"> 
        <BackArrow />
      </IconButton>
      <div className="title">
      <Typography variant="inherit">TU PLATA DISPONIBLE</Typography>
      <Typography variant="inherit"><b>$ 100.000</b></Typography>
      </div>
      <SquareMenuMovements className="squareMenuMovements" />
    </div>
  );
};

export default NavbarMovements;
