import React, { Fragment } from "react";
import { Box, Grid } from "@material-ui/core";
import SquareMenu from './Widgets/SquareMenu'
import NavbarMovements from './NavbarMovements';


const Movements = () => {
  return (
    <Fragment>
         <NavbarMovements />
       
      
      <Grid container>
        <Grid item xs={12} sm={6} md={12} >
          <Box border={2} m={2} p={8}>

              TU PLATA DISPONIBLE
              <SquareMenu className='squareMenu' /> 
                
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={12} p={8}>
          <Box border={2} m={2} p={8}>
            BOX DOS
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Movements;
