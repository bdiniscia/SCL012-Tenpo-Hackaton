import React from "react";
import { firebase } from "../../firebase";
import "./InputRequirement.css";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const InputRequirement = ({problematicTransac}) => {
  const [requirements, setRequirement] = React.useState("");

  React.useEffect(() => { 
    if (!problematicTransac) {
      problematicTransac = false
    }
  })

  let history = useHistory();
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(requirements);

    if (!requirements.trim()) {
      console.log("esta vacio");
      return;
    }
    try {
      const db = firebase.firestore();
      const newRequirement = {
        message: requirements,
        fecha: Date.now(),
        transac: problematicTransac,
        estado: 'En proceso'
      };
      const data = await db.collection("requirements").add(newRequirement);

      setRequirement([...requirements, { ...newRequirement, id: data.id }]);
      setRequirement("");
      history.push("/Requests");
    } catch (error) {
      console.log(error);
    }

    console.log(requirements);
  };

  return (
    <div className="inputRequirement">
      <p className="question">
        Cuéntanos qué pasó y solucionaremos tu requerimiento:
      </p>
      <form className='formRequirement' onSubmit={sendMessage}>
        <textarea
          type="text"
          className="textareaRequirement"
          placeholder="Escribe aquí..."
          onChange={(e) => setRequirement(e.target.value)}
          value={requirements}
        />
        <div className='divButton'>
          <Button type="submit" title="Enviar" ENVIAR />
        </div>
      </form>
    </div>
  );
};

export default InputRequirement;
