import React, { Fragment } from "react";
import "./Movements.css";
import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



import { firebase } from "../firebase";
import Tooltip from './Tooltip'



const useStyles = makeStyles((theme) => ({
  transtationState: {
    marginLeft: theme.spacing(2),
  },

}));



const Prueba = () => {
  const classes = useStyles();
  

  const [movement, setMovement] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("Movements").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovement(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <Fragment>
      <div className="movements">
      <header className="welcomeMovements">
          <Typography variant="h5">Transsacciones descontadas</Typography>
        </header>
        <section>
        <Grid container>

          <Grid item xs={12} sm={12} md={12}>
            {movement.map((item) => (
              <Grid item xs={12} sm={12} md={12} className="categoryMovements">
                <Box
                  p={1}
                  border={1}
                  borderColor="#dadada"
                  mt={0.2}
                  bgcolor="#fff"
                >
                  {
                    <div key={item.id}>
                      <div className="prueba">
                        <div className={classes.transtationState}>
                          <div className="datos">
                          <Typography  className={classes.title}>
                          {item.transaccion} {item.monto}
                           </Typography>
                            
                          </div>
                          <div className="datos">
                          <Typography  className={classes.title}>
                          {item.estado} {item.fecha}
                           </Typography>
                           
                          </div>
                        </div>
                        <div className="info">
                          <IconButton>
                            <Tooltip />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  }
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </section>
      </div>
    </Fragment>
  );
};

export default Prueba;
