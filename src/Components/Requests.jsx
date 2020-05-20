import React, { Fragment } from "react";
import "./Requests.css";
import { firebase } from "../firebase";
import Topbar from "./Topbar";
import HeaderSections from "./Widgets/HeaderSections";

const Requests = () => {

  const [request, setRequest] = React.useState([]);

  React.useEffect(() => {
    const getRequests = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("requirements").orderBy("fecha", "desc").get();
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
        <HeaderSections title='Mis solicitudes' />
        <section className='sectionRequests'>
            {request.map((item) => {
              const newDate = new Date(item.fecha).toLocaleDateString()
              return(
                <div key={item.id} className='divRequest'>
                  <div className='infoRequest'>
                    <div className='noSolitudDiv infoDetails'>
                      <span className='noSolicitud'>Nº de solicitud: </span><span>{item.id.slice(0, 6)}</span>
                    </div>
                    {item.transac ?
                    <Fragment>
                      <span className='infoDetails'>{item.transac.title}</span>
                      <span className='infoDetails'>{item.transac.amount}</span>
                    </Fragment>
                    :
                    <span className='infoDetails'>Solicitud sin transferencia asociada</span>
                    }
                    <span className='infoDetails infoDate'>{newDate}</span>
                  </div>
                  <div className='statusRequest'>
                    { item.estado === 'Resuelto' ?
                    <img className='iconStatus iconCheck' alt='Resuelto' src={require('../img/check.png')} />
                    :
                    <img className='iconStatus' alt='En proceso' src={require('../img/inprocess.png')} />
                    }
                    <span>{item.estado}</span>
                  </div>
                </div>
              )
            })}
        </section>
      </div>
    </Fragment>
  );
};

export default Requests;
