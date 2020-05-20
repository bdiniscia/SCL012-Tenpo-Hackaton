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
      <IconButton className={classes.backButon} color="#595959" href="/"> 
        <BackArrow />
      </IconButton>
      <div className="title">
<<<<<<< HEAD
        <Typography variant="p">TU PLATA DISPONIBLE</Typography>
        <Typography variant="p"><b>$ 100.000</b></Typography>
=======
      <Typography variant="inherit">TU PLATA DISPONIBLE</Typography>
      <Typography variant="inherit"><b>$ 100.000</b></Typography>
>>>>>>> d35d1893e6a5832f22679a35b8e192f7017d4319
      </div>
      <SquareMenuMovements className="squareMenuMovements" />
    </div>
  );
};

export default NavbarMovements;
