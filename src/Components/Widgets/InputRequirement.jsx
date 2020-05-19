import React from "react";
import { firebase } from "../../firebase";
import "./InputRequirement.css";
import Button from "./Button";

const InputRequirement = () => {
  const [requirements, setRequirement] = React.useState("");

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
      };
      const data = await db.collection("requirements").add(newRequirement);

      setRequirement([...requirements, { ...newRequirement, id: data.id }]);
      setRequirement("");
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
      <div className="pruebaa">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            className="textareaRequirement"
            placeholder="Escribe aquí..."
            onChange={(e) => setRequirement(e.target.value)}
            value={requirements}
          />

          <Button type="submit" title="Enviar" ENVIAR />
        </form>
      </div>
    </div>
  );
};

export default InputRequirement;
