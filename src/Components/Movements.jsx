import React, { Fragment } from "react";
import "./Movements.css";
import { Box, Grid } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Typography from "@material-ui/core/Typography";
import TopbarMovements from "./TopbarMovements";
import { firebase } from "../firebase";

const Prueba = () => {
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
      <TopbarMovements />
      <Grid container className="topbar">
        <Grid item xs={12} sm={12} md={12}>
          <Box border={0} p={1} bgcolor="#F2F2F2">
            <Typography>
              <h2>
                <b>Transsacciones descontadas</b>
              </h2>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          {movement.map((item) => (
            <Grid item xs={12} sm={12} md={12}>
              <Box p={0} mt={0.2} bgcolor="#fff">
                {
                  <div key={item.id}>
                    <p>
                      <b>
                        {item.transaccion} {item.monto}
                      </b>
                    </p>

                    <p>
                      {item.estado} {item.fecha}{" "}
                      <span>
                        <ErrorOutlineIcon />
                      </span>
                    </p>
                  </div>
                }
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Prueba;
