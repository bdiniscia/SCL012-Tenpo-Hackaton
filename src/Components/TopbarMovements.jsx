import React from "react";
import "./TopbarMovements.css";
import SquareMenuMovements from "./Widgets/SquareMenuMovements";
import Back from './Widgets/Back'
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  back: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },

}));

const NavbarMovements = () => {
  const classes = useStyles();


  return (
    <div className="topbar">
      <IconButton className={classes.title}>
        <Back />
      </IconButton>
     
      <Typography variant="p">TU PLATA DISPONIBLE</Typography>
      {/* <Typography variant="p">$100.000</Typography> */}
      <SquareMenuMovements className="squareMenu" />
     
    </div>
  );
};

export default NavbarMovements;
