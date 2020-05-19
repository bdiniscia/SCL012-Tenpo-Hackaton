import React, { Fragment } from "react";
import "./Requests.css";
import { firebase } from "../firebase";
import Topbar from "./Topbar";
import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    requestState: {
    marginLeft: theme.spacing(2),
  },
}));

const Requests = () => {
  const classes = useStyles();

  const [request, setRequest] = React.useState([]);

  React.useEffect(() => {
    const getRequests = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("requirements").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setRequest(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getRequests();
  }, []);

  return (
    <Fragment>
      <Topbar />
      <div className="requests">
        <header className="welcomeRequests">
          <h1 className="titleHelp">Mis Solicitudes</h1>
        </header>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            {request.map((item) => (
              <Grid item xs={12} sm={12} md={12} className="categoryRequests">
                <Box
                  p={0}
                  border={1}
                  borderColor="#dadada"
                  mt={0.2}
                  bgcolor="#fff"
                >
                  {
                    <div key={item.id}>
                      <div className="pruebaRequests">
                        <div className={classes.requestState}>
                          <div className="datos">
                            <p>
                              <b>
                                {item.numero} : {item.id}
                              </b>
                            </p>
                            <p>{item.tipo}</p>
                          </div>
                          <div className="datos">
                            <p>{item.monto}</p>
                            <p>{item.fecha}</p>
                          </div>
                        </div>
                        <div className="infoRequests">
                          {item.estado}

                          <IconButton></IconButton>
                        </div>
                      </div>
                    </div>
                  }
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Requests;
