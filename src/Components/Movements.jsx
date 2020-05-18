// import React, { Fragment } from "react";
// import "./Movements.css";
// import { Box, Grid, Divider } from "@material-ui/core";
// import TopbarMovements from "./TopbarMovements";
// import Typography from "@material-ui/core/Typography";
// import SquareMenuMovements from "./Widgets/SquareMenuMovements";

// import {firebase} from "../firebase"



// const Movements = () => {

//   const [movement, setMovement] = React.useState([])

//   React.useEffect(() => {

//     const obtenerDatos = async () => {

//       try {
//         const db = firebase.firestore()
//         const data = await db.collection("Movements").get()
//         const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
//         console.log(arrayData)
//         setMovement(arrayData)
        
//       } catch (error) {
//         console.log(error)
        
//       }

//     }
//     obtenerDatos()

//   }, [])


//   return (

//     <Fragment>
//      <TopbarMovements />

    

//     <div className="container mt-3">
//       <div className="row">
//        <div className="cold-md-6">
//         <ul>
//           {
//             movement.map(item => (
//             <li key={item.id}>
//               <p>{item.transaccion} {item.monto}</p>
//               <p>{item.estado} {item.fecha}</p>
              
              
//             </li>
//             ))
//           }
//         </ul>
//        </div>

//       </div>
//     </div>

//     </Fragment>


    // <Fragment>
    

    //   <Grid container className="topbar">
    //     <Grid item xs={12} sm={12} md={12}>
    //       <Box border={2} p={4} bgcolor="#F2F2F2">
    //         <Typography variant="p">Transsacciones descontadas</Typography>
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12} sm={6} md={12}>
    //       <Box border={2} mt={0.3} p={2}>
    //         BOX DO
    //         <SquareMenuMovements className="squareMenu" bgcolor="" />
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12} sm={6} md={12}>
    //       <Box border={2} mt={0.3} p={2}>
    //         BOX DO
    //         <SquareMenuMovements className="squareMenu" />
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12} sm={6} md={12}>
    //       <Box border={2} mt={0.3} p={2}>
    //         BOX DO
    //         <SquareMenuMovements className="squareMenu" />
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12} sm={6} md={12}>
    //       <Box border={2} mt={0.3} p={2}>
    //         BOX DO
    //         <SquareMenuMovements className="squareMenu" />
    //       </Box>
    //     </Grid>

    //     <Grid item xs={12} sm={6} md={12}>
    //       <Box border={2} mt={0.3} p={2}>
    //         BOX DO
    //         <SquareMenuMovements className="squareMenu" />
    //       </Box>
    //     </Grid>

    //     <Divider />
    //   </Grid>
    // </Fragment>


//   );
// };

// export default Movements;
