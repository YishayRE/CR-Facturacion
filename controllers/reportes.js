import { response, request } from "express";
import { cr } from "../services/index.js";
import { mapping } from "../mapping/index.js";

const obtenerReporte = async (req = request, resp = response) => {
  try {
    console.log("Comenzando reporte...");
    const login = await cr.login.login("FAYALA", "FA2020");
    //console.log(login.access_token);
    console.log("Fin logeo...");

    const fechaInicio = "2023-10-27";
    const fechaFin = "2023-10-27";
    const max = 1;
    const offset = 0;
    //totalRegistros 612844 462844 312844 162844 12844

    const donaciones = await cr.donaciones.listaDonaciones(fechaInicio, fechaFin, max, offset, login.access_token);
    console.log("Donaciones extraidas...");
    //console.log(donaciones.totalRegistros);
    console.log(donaciones.donaciones.length);
    const datos = mapping.donacionesReporte(donaciones.donaciones, 0, max);

    return resp.status(200).json(datos);
  } catch (e) {
    console.error(e.message);

    return resp.status(406).json({ msg: e.message });
  }
};

export { obtenerReporte };
