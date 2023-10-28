import { donaciones } from "../tasks/donaciones.js";

const crons = () => {
  console.log("Tareas programadas");

  donaciones();
};

export { crons };
