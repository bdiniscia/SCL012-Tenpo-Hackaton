import React, { Fragment } from "react";
import "./Movements.css";
import { Box, Grid, makeStyles, IconButton } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Typography from "@material-ui/core/Typography";
import { firebase } from "../firebase";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
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
        console.log(arrayData);
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
        <Grid container>
          <Grid item xs={12} sm={12} md={12} className="sectionMovements">
            <Box border={0} p={2} bgcolor="#F2F2F2">
              <Typography>
                <h2>
                  <b>Transsacciones descontadas</b>
                </h2>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            {movement.map((item) => (
              <Grid item xs={12} sm={12} md={12} className={classes.title}>
                <Box
                  p={0}
                  border={1}
                  borderColor="#dadada"
                  mt={0.2}
                  bgcolor="#fff"
                >
                  {
                    <div key={item.id}>
                      <p>
                        <b>
                          {item.transaccion} {item.monto}
                        </b>
                      </p>

                      <p>
                        {item.estado} {item.fecha}
                      </p>
                    </div>
                  }

                  {/* <IconButton>

                  
                    <ErrorOutlineIcon />
                  </IconButton> */}
                  
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Prueba;
